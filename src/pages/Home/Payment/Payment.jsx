import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
// console.log(import.meta.env.VITE_Payment_Gateway_PK);
console.log(stripePromise);
const Payment = ({ getBadge }) => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckOutForm getBadge={getBadge}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
