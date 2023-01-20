import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState("");
 const {signIn} = useContext(AuthContext)

 const navigate = useNavigate();
 const location = useLocation();
 const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    signIn(data.email, data.password)
    .then(result => {
      const user = result.user;
      console.log(user);
      setLoginError("")
      navigate(from, { replace: true });
      
    })
    .catch(error => {
      console.log(error.message)
      setLoginError(error.message)
    })
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96">
        <h2 className="text-3xl text-center"> Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full "
            />
            {errors.email?.type === "required" && (
              <p className="text-red-600 mt-2" role="alert">
                Email is Required
              </p>
            )}
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password Must Be 6 Or More Characters",
                minLength: {
                  value: 6,
                  message: "Password Must Be 6 or More Characters",
                },
              })}
              className="input input-bordered w-full "
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600 mt-2" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <label className="label">
            <span className="label-text text-primary">Forget Password ? </span>
          </label>

          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-accent w-full mt-6 text-white"
          />
        </form>
        <p className="mt-4 text-center">
          New User In Our Website ?{" "}
          <Link className="text-red-600 " to="/signup">
            Please Register
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">
          Continue With Google{" "}
        </button>
      </div>
    </div>
  );
};

export default Login;
