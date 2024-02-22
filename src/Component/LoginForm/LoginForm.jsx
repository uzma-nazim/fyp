"use client";
import React, { useEffect, useRef, useState } from "react";
import temp from "@/images/vector.svg";
import logo from "@/images/logo.jpeg";
import bg from "@/images/bg.jpg";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loader from "../Loader/Loader";
// const LoginForm = () => {
//   const router = useRouter();
//   const handleLogin = (e) => {
//     e.preventDefault();

//     router.push("/question");
//   };
//   return (
//     <>
//       <div
//         className="wrapper"
//         style={
//           {
//             //   backgroundImage: `url(${bg.src}) !important`,
//             // backgroundImage: `url(/bg.jpg) !important`,
//           }
//         }
//       >
//         <div className="inner">
//           <div className="image-holder">
//             <img src={temp.src} alt="" />
//           </div>
//           <form onSubmit={handleLogin} action="">
//             <h3>Login</h3>
//             {/* <div className="form-holder active">
//               <input type="text" placeholder="name" className="form-control" />
//             </div> */}
//             <div style={{ marginTop: "30px" }} className="form-holder">
//               <input
//                 type="text"
//                 placeholder="e-mail"
//                 className="form-control"
//               />
//             </div>
//             <div className="form-holder">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="form-control"
//                 style={{ fontSize: "14px" }}
//               />
//             </div>

//             <div className="form-login ">
//               <button type="submit" onClick={handleLogin}> Login</button>
//               <p className="p1">
//                 Don't have account? <Link href={"/sign-up"}> Sign Up</Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

const LoginForm = () => {
  const router = useRouter();
  const [loading, setloading] = useState(false);

  // State variables for form data and errors
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleLogin = async (event) => {
    event.preventDefault();
    if (loading) return;
    setloading(true);
    // Required field validation
    const validationErrors = {};
    if (!formData.email) {
      validationErrors.email = "Email is required";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    if (Object.keys(validationErrors).length > 0) {
      // Set validation errors
      setErrors(validationErrors);
      setloading(false);

      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setloading(false);

      if (!response.ok) {
        const errorMessage = await response.text();
        alert(errorMessage);

        setloading(false);
        throw new Error(errorMessage);
      }
      const user = await response.json();
      console.log("Logged in user:", user);

      // Redirect to the next page (e.g., '/question') after successful login
      router.push("/question");
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle error, e.g., display an error message to the user
    }
  };

  // Function to handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Update form data state
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear validation error for the field if any
    setErrors({
      ...errors,
      [name]: undefined,
    });
  };

  return (
    <>
      <div className="wrapper">
        <div className="inner">
          <div className="image-holder">
            <img src={temp.src} alt="" />
          </div>
          <form onSubmit={handleLogin}>
            <h3>Login</h3>
            <div style={{ marginTop: "30px" }} className="form-holder">
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="form-control"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </div>
            <div className="form-holder">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && (
                <div className="error-message">{errors.password}</div>
              )}
            </div>

            <div className="form-login ">
              <button type="submit">{loading ? <Loader /> : " Login"}</button>
              <p className="p1">
                Don't have an account? <Link href={"/sign-up"}>Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
