"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";

export default function SignIn() {
  const router = useRouter();
  const [signInUser, setSignInUser] = useState({ email: "", password: "" });
  const [signUpUser, setSignUpUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSignUp, setIsSignUp] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [emailError, setEmailError] = useState("");

  const emailValidation = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setIsEmailValid(true);
      setEmailError("");
    } else {
      setIsEmailValid(false);
      setEmailError("Invalid email address");
    }
    setSignInUser({ ...signInUser, email });
    setSignUpUser({ ...signUpUser, email });
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    const res = await signIn("credentials", {
      email: signInUser.email,
      password: signInUser.password,
      redirect: false,
    });
    if (res?.error) {
      console.log(res.error);
    } else {
      router.push("/");
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (signUpUser.password === signUpUser.confirmPassword) {
      let res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpUser),
      });
      if (res.status === 200) {
        toast.success(
          "Account Created Successfully\nWe have sent you an email to verify your account"
        );
        await Mail({
          to: signUpUser.email,
          subject: "Sign-up successful",
          message:
            `Hi ${signUpUser.name},\nYou Signed Up in Gujrat Fan company'App,now you will inform about all updates held in our Company.`,
        });
      }
      router.push("/");
    } else {
      toast.error("You can't sign up with different passwords");
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[80%] flex flex-col lg:flex-row mb-20 mt-10 bg-white rounded-2xl shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out">
        <div className="w-full lg:w-1/2 hidden lg:block">
          <Image
            src="/Icons/mainlogo.png"
            width={500}
            height={300}
            alt="Login Side Image"
            className="w-full h-full rounded-l-2xl"
          />
        </div>
        <div className="w-full lg:w-1/2 rounded-2xl shadow-2xl m-5 hover:scale-105 transform transition duration-300 ease-in-out">
          {isSignUp ? (
            <form
              onSubmit={handleSignUp}
              className="w-full px-5 lg:px-8 flex flex-col py-5"
            > 
              <label className="text-xl lg:text-3xl font-bold font-serif text-center">
                Sign Up Form
              </label>
              <div className="w-full grid grid-cols-1 gap-3 mt-10">
                <div>
                  <h1 className="mb-3 ml-1 font-semibold">Name:</h1>
                  <TextField
                    className="w-full bg-white"
                    variant="outlined"
                    value={signUpUser.name}
                    onChange={(e) =>
                      setSignUpUser({ ...signUpUser, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <h1 className="mb-3 ml-1 font-semibold">Email:</h1>
                  <TextField
                    type="email"
                    className="w-full bg-white"
                    variant="outlined"
                    value={signUpUser.email}
                    onChange={(e) => emailValidation(e.target.value)}
                    required
                  />
                  <p
                    className={`text-md tracking-wider font-serif ${
                      isEmailValid === true
                        ? "text-green-500"
                        : isEmailValid === false
                          ? "text-red-500"
                          : ""
                    }`}
                  >
                    {emailError}
                  </p>
                </div>
                <div>
                  <h1 className="mb-3 ml-1 font-semibold">Password:</h1>
                  <TextField
                    type="password"
                    className="w-full bg-white"
                    variant="outlined"
                    value={signUpUser.password}
                    onChange={(e) =>
                      setSignUpUser({ ...signUpUser, password: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <h1 className="mb-3 ml-1 font-semibold">Confirm Password:</h1>
                  <TextField
                    type="password"
                    className="w-full bg-white"
                    variant="outlined"
                    value={signUpUser.confirmPassword}
                    onChange={(e) =>
                      setSignUpUser({
                        ...signUpUser,
                        confirmPassword: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="py-3 px-8 border-black text-white bg-black tracking-wider rounded-xl hover:scale-95"
                >
                  Sign Up
                </button>
              </div>
            </form>
          ) : (
            <form
              onSubmit={handleSignIn}
              className="w-full px-5 lg:px-8 flex flex-col py-8"
            >
              <label className="text-xl lg:text-3xl font-serif font-bold text-center tracking-wide my-5">
                Sign In Form
              </label>
              <div className="w-full grid grid-cols-1 gap-2 my-5">
                <div>
                  <h1 className="mb-3 ml-1 font-semibold">Email:</h1>
                  <TextField
                    type="email"
                    className="w-full bg-white"
                    variant="outlined"
                    value={signInUser.email}
                    onChange={(e) => emailValidation(e.target.value)}
                    required
                  />
                  <p
                    className={`text-md tracking-wider font-serif ${
                      isEmailValid === true
                        ? "text-green-500"
                        : isEmailValid === false
                          ? "text-red-500"
                          : ""
                    }`}
                  >
                    {emailError}
                  </p>
                </div>
                <div>
                  <h1 className="mb-3 ml-1 font-semibold">Password:</h1>
                  <TextField
                    type="password"
                    className="w-full bg-white"
                    variant="outlined"
                    value={signInUser.password}
                    onChange={(e) =>
                      setSignInUser({ ...signInUser, password: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="py-3 px-10 border-black text-white bg-black tracking-wider rounded-xl hover:scale-95"
                >
                  Sign In
                </button>
              </div>
            </form>
          )}
          <div className="text-center mb-5">
            {isSignUp ? (
              <div>
                <p onClick={toggleForm}>
                  Have an Account? Click here to{" "}
                  <b className="hover:cursor-pointer">Sign In</b>
                </p>
              </div>
            ) : (
              <div>
                <p onClick={toggleForm}>
                  Did not have an Account? Click here to{" "}
                  <b className="hover:cursor-pointer">Sign Up</b>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
