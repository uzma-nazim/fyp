"use client";
import React, { useEffect, useRef, useState } from "react";
import temp from "@/images/sign.svg";
import logo from "@/images/logo.jpeg";
import bg from "@/images/bg.jpg";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push("/login");
  };
  return (
    <>
      <div
        className="wrapper"
        style={
          {
            // backgroundImage: `url(/bg.jpg) !important`,
          }
        }
      >
        <div className="inner">
          <div className="image-holder">
            <img src={temp.src} alt="" />
          </div>
          <form onClick={handleSubmit}>
            <h3 style={{ marginBottom: "20px" }}>Sign Up</h3>
            <div className="form-holder active">
              <input type="text" placeholder="name" className="form-control" />
            </div>
            <div className="form-holder">
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
              <button type="submit">Sign up</button>
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
