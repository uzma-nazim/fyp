"use client";
import React, { useEffect, useRef, useState } from "react";
import temp from "@/images/sign.svg";
import logo from "@/images/logo.jpeg";
import bg from "@/images/bg.jpg";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loader from "../Loader/Loader";

// const SignUpForm = () => {
//   const router = useRouter();
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // router.push("/login");

//   };

//   async function handleSubmit(event) {
//     event.preventDefault();

//     // Required field validation
//     const errors = {};
//     if (!userData.name) {
//       errors.name = 'Name is required';
//     }
//     if (!userData.email) {
//       errors.email = 'Email is required';
//     }
//     if (!userData.password) {
//       errors.password = 'Password is required';
//     }

//     // Email format validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (userData.email && !emailRegex.test(userData.email)) {
//       errors.email = 'Invalid email format';
//     }

//     if (Object.keys(errors).length > 0) {
//       // Handle validation errors, e.g., display error messages to the user
//       console.error('Validation errors:', errors);
//       return;
//     }

//     try {
//       const response = await fetch('/api/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userData)
//       });

//       if (!response.ok) {
//         const errorMessage = await response.text();
//         throw new Error(errorMessage);
//       }

//       const newUser = await response.json();
//       console.log('New user created:', newUser);

//       // Handle success, e.g., display a success message to the user
//     } catch (error) {
//       console.error('Error creating user:', error);
//       // Handle error, e.g., display an error message to the user
//     }
//   }

//   return (
//     <>
//       <div
//         className="wrapper"
//         style={
//           {
//             // backgroundImage: `url(/bg.jpg) !important`,
//           }
//         }
//       >
//         <div className="inner">
//           <div className="image-holder">
//             <img src={temp.src} alt="" />
//           </div>
//           <form onSubmit={handleSubmit}>
//             <h3 style={{ marginBottom: "20px" }}>Sign Up</h3>
//             <div className="form-holder active">
//               <input type="text" placeholder="name" className="form-control" />
//             </div>
//             <div className="form-holder">
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
//               <button type="submit">Sign up</button>
//               <p className="p1">
//                 Already Have account? <Link href={"/login"}> Login</Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

const SignUpForm = () => {
  const router = useRouter();
  const [loading, setloading] = useState(false);

  // State variables for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State variable for form errors
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;
    setloading(true);

    // Required field validation
    const validationErrors = {};
    if (!formData.name) {
      validationErrors.name = "Name is required";
    }
    if (!formData.email) {
      validationErrors.email = "Email is required";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
    }

    // Email format validation
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
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        alert(errorMessage)
        console.log("errorMessage",errorMessage);
        throw new Error(errorMessage);
      }

      const newUser = await response.json();
      router.push("/login")
      console.log("New user created:", newUser);
      setloading(false);

      // Handle success, e.g., display a success message to the user
    } catch (error) {
      console.error("Error creating user:", error);
      setloading(false);

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
          <form onSubmit={handleSubmit}>
            <h3 style={{ marginBottom: "20px" }}>Sign Up</h3>
            <div className="form-holder active">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && (
                <div className="error-message">{errors.name}</div>
              )}
            </div>
            <div className="form-holder">
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
              <button type="submit">{loading ? <Loader /> : " Sign up"}</button>
              <p className="p1">
                Already Have account? <Link href={"/login"}> Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
