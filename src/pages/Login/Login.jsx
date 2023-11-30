import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const user = { email, password };
    console.log(user);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "User login successfully",
          showClass: {
            popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `,
          },
          hideClass: {
            popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `,
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      {/* <div className="hero min-h-screen bg-base-200"> */}
      <div className="hero-content flex-col md:flex-row">
        <div className="card flex-shrink-0 shadow-2xl bg-[#FFE4E1]">
          <h1 className="text-3xl font-bold text-center mt-4">Please SignIn</h1>
          {/* <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"> */}
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                // disabled={disabled}
                className="btn bg-[#482668] hover:bg-[#482668] text-white rounded-3xl"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="px-6">
            New Here?{" "}
            <Link to={"/signUp"} className="text-sky-500">
              Create an account
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
