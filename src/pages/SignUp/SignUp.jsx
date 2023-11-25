import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
// import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

const SignUp = () => {
  //   const axiosPublic = useAxiosPublic();
  const { userSignUp, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    userSignUp(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL).then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          console.log(userInfo);
          //   axiosPublic.post("/users", userInfo).then((res) => {
          //     if (res.data.insertedId) {
          //       console.log("user add to database successfully");
          //       reset();
          //       Swal.fire({
          //         position: "top-end",
          //         icon: "success",
          //         title: "User created successfully",
          //         showConfirmButton: false,
          //         timer: 1500,
          //       });
          navigate("/");
          //     }
          //   });
        });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                })}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {errors.password?.type == "required" && (
                <p className="text-red-600">Password must be required</p>
              )}
              {errors.password?.type == "minLength" && (
                <p className="text-red-600">Password must be 6 character</p>
              )}
              {errors.password?.type == "maxLength" && (
                <p className="text-red-600">Password must be 20 character</p>
              )}
              {errors.password?.type == "pattern" && (
                <p className="text-red-600">
                  Password must be one uppercase, one lowercase, one number, one
                  special character character
                </p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="px-6">
            Already have an account <Link to={"/login"}>Login</Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
