import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const CheckOutForm = ({ getBadge }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  //   const [cart, refetch] = useCart();
  const navigate = useNavigate();

  //   const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const totalPrice = 100;

  //
  // const {
  //   data: membership = [],
  //   isPending: loading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["membership", user?.email],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get(`/membership?email=${user?.email}`);
  //     return res.data;
  //   },
  // });
  // console.log(membership);
  // const totalPrice = 100;
  // console.log(totalPrice);
  //

  useEffect(() => {
    // if (totalPrice > 0) {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    // }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      // console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.error("confirm error");
    } else {
      // console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // save payment info into the database
        const membership = getBadge();

        axiosPublic
          .patch(`/users/badge/${membership?.email}`, membership)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error.message);
          });
        const payment = {
          email: user.email,
          price: membership.price,
          transactionId: paymentIntent.id,
          data: new Date(), // utc data convert, use moment js
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log("payment save", res.data);
        // refetch();
        if (res?.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${payment.price} successfuly paid`,
            showConfirmButton: false,
            timer: 1500,
          });
          // navigate("/dashboard/paymentHistory");
        }
      }
    }
  };
  return (
    // <form>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-primary my-4"
        type="submit"
        disabled={!stripe}
        // disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && (
        <p className="text-green-500">Your Transaction Id {transactionId}</p>
      )}
    </form>
  );
};

export default CheckOutForm;
