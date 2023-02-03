import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const navigate = useNavigate();
  const [createdUserEmail, setCreatedUserEmail] = useState("")
  const [token] = useToken(createdUserEmail);

  if(token) {
    navigate("/")
  }

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // updateUser({displayName:data.name})
        toast("User Created Successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            savedUser(data.name, data.email);
          })
          .catch((error) => {
            console.log(error);
            setSignUpError(error.message);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setSignUpError(error.message);
        console.log(errorMessage);
      });
  };

  const savedUser = (name, email) => {
    const user = { name, email };
    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // getUserToken(email);
        setCreatedUserEmail(email);
        console.log("saved user in the database", data);
      });
  };

  // const getUserToken = (email) => {
  //   fetch(`http://localhost:5000/jwt?email=${email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.accessToken) {
  //         localStorage.setItem("accessToken", data.accessToken);
  //         navigate("/");
  //       }
  //     });
  // };

  // const getUserToken = (email) => {
  //   fetch(`http://localhost:5000/jwt?email=${email}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     if(data.accessToken) {
  //       localStorage.setItem("accessToken",data.accessToken)
  //       navigate("/")
  //     }
  //   })
  // }
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96">
        <h2 className="text-3xl text-center">Please Register</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input input-bordered w-full "
            />
            {errors.name?.type === "required" && (
              <p className="text-red-600 mt-2" role="alert">
                Name is Required
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
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

          <input
            type="submit"
            value="Sign Up"
            className="btn btn-accent w-full mt-6 text-white"
          />
          {signUpError && (
            <p className="text-red-600 text-lg text-center my-2">
              {signUpError}
            </p>
          )}
        </form>
        <p className="mt-4 text-center">
          Already Have An Account ?{" "}
          <Link className="text-red-600 " to="/login">
            Please Login
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

export default SignUp;
