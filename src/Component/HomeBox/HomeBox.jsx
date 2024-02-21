"use client";
import React from "react";
import home from "@/images/home.svg";
import bg from "@/images/bg.jpg";
import { useRouter } from "next/navigation";

const HomeBox = () => {
  const router = useRouter();
  return (
    <div>
      <div className="homeBox container">
        <div className="textBox">
          <h2>Welcome to polytrack</h2>
          <p className="textColor">
            Our mission is to raise awareness about PCOS, provide reliable and
            accessible information, and offer a user-friendly PCOS detection
            tool to help women assess their risk and take proactive steps
            towards a healthier life.
          </p>
          <button
            onClick={() => {
              router.push("/sign-up");
            }}
            className="blue-bg-btn"
          >
            Get Started
          </button>
        </div>
        <img width={"760px"} src={home.src} alt="" />
      </div>
    </div>
  );
};

export default HomeBox;
