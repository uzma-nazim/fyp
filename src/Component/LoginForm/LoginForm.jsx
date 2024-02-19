"use client";
import React, { useEffect, useRef, useState } from "react";
import temp from "@/images/vector.svg";
import logo from "@/images/logo.jpeg";
import bg from "@/images/bg.jpg";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";
const LoginForm = () => {
  const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();
    
    router.push("/question");
  };
  return (
    <>
      <div
        className="wrapper"
        style={
          {
            //   backgroundImage: `url(${bg.src}) !important`,
            // backgroundImage: `url(/bg.jpg) !important`,
          }
        }
      >
        <div className="inner">
          <div className="image-holder">
            <img src={temp.src} alt="" />
          </div>
          <form onSubmit={handleLogin} action="">
            <h3>Login</h3>
            {/* <div className="form-holder active">
              <input type="text" placeholder="name" className="form-control" />
            </div> */}
            <div style={{ marginTop: "30px" }} className="form-holder">
              <input
                type="text"
                placeholder="e-mail"
                className="form-control"
              />
            </div>
            <div className="form-holder">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                style={{ fontSize: "14px" }}
              />
            </div>

            <div className="form-login ">
              <button type="submit" onClick={handleLogin}> Login</button>
              <p className="p1">
                Don't have account? <Link href={"/"}> Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
