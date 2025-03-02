"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "@/app/lib/send-mail";

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

  const emailValidation = (em) => {
    if (isSignUp) {
      setSignUpUser({ ...signUpUser, email: em });
    } else {
      setSignInUser({ ...signInUser, email: em });
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(em)) {
      setEmailError("Email is valid");
      setIsEmailValid(true);
    } else {
      setEmailError("Email is Invalid");
      setIsEmailValid(false);
    }
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    if (emailError === "Email is valid") {
      if (signInUser.email && signInUser.password) {
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
      }
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    console.log("signUpUser Object:", signUpUser); // Log the whole object
    console.log("Confirm Password:", signUpUser.confirmPassword); // Log confirmPassword separately
    if (emailError === "Email is valid") {
      if (
        signUpUser.name &&
        signUpUser.email &&
        signUpUser.password &&
        signUpUser.confirmPassword
      ) {
        if (signUpUser.password === signUpUser.confirmPassword) {
          let res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(signUpUser),
          });
          if (res.ok) {
            toast.success(
              "Account Created Successfully. Please check your email for verification."
            );
            router.push("/");
            await Mail({
              to: signUpUser.email,
              subject: ` Welcome, ${signUpUser.name}! 🚀`,
              message: `<p>Dear ${signUpUser.name},</p>
              <p>Thank you for joining</p>
            <p>Best regards,</p>
            <p><strong>Gujrat Fans</strong></p>`,
            });
          } else {
            toast.error("user already exsists");
          }
        } else {
          toast.error("Passwords do not match");
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-600 to-blue-500">
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl flex flex-col lg:flex-row bg-white shadow-lg rounded-3xl overflow-hidden">
          <div className="hidden lg:flex w-1/2 items-center justify-center bg-blue-900 p-10">
            <Image
              src="/Icons/mainlogo.png"
              width={300}
              height={300}
              alt="Fan Industry Logo"
            />
          </div>

          <div className="w-full lg:w-1/2 p-8">
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
              {isSignUp ? "Create an Account" : "Welcome Back"}
            </h2>

            <AnimatePresence mode="wait">
              <motion.form
                key={isSignUp ? "signUp" : "signIn"}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                onSubmit={isSignUp ? handleSignUp : handleSignIn}
                className="space-y-4"
              >
                {isSignUp && (
                  <div>
                    <label className="block text-gray-700">Name</label>
                    <TextField
                      fullWidth
                      variant="outlined"
                      value={signUpUser.name}
                      onChange={(e) =>
                        setSignUpUser({ ...signUpUser, name: e.target.value })
                      }
                      required
                    />
                  </div>
                )}
                <div>
                  <label className="block text-gray-700">Email</label>
                  <TextField
                    fullWidth
                    type="email"
                    variant="outlined"
                    value={isSignUp ? signUpUser.email : signInUser.email}
                    onChange={(e) => emailValidation(e.target.value)}
                    required
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm">{emailError}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700">Password</label>
                  <TextField
                    fullWidth
                    type="password"
                    variant="outlined"
                    value={isSignUp ? signUpUser.password : signInUser.password}
                    onChange={(e) =>
                      isSignUp
                        ? setSignUpUser({
                            ...signUpUser,
                            password: e.target.value,
                          })
                        : setSignInUser({
                            ...signInUser,
                            password: e.target.value,
                          })
                    }
                    required
                  />
                </div>
                {isSignUp && (
                  <div>
                    <label className="block text-gray-700">
                      Confirm Password
                    </label>
                    <TextField
                      fullWidth
                      type="password"
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
                )}
                <button
                  type="submit"
                  className="w-full py-3 mt-6 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  {isSignUp ? "Sign Up" : "Sign In"}
                </button>
              </motion.form>
            </AnimatePresence>

            <p
              className="text-center text-gray-600 mt-4 cursor-pointer hover:text-blue-700 transition duration-300"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
