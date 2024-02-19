"use client";
import React, { useEffect, useRef, useState } from "react";
import temp from "@/images/Interview-pana.svg";
import logo from "@/images/logo.jpeg";
import bg from "@/images/bg.jpg";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";
const WeightForm = () => {
  const router = useRouter();
  const [formData, setformData] = useState({
    name: "",
    height: "",
    weight: "",
  });
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    router.push("/question");
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleAdvice = (e) => {
    e.preventDefault();
    if (formData.name == "") {
      alert("Name are required");
      return;
    } else if (formData.weight == "") {
      alert("Weight are required");

      return;
    }

    router.push(`/advice?data=${JSON.stringify(formData)}`);
    // const queryParams = [];
    // for (let key in formData) {
    //   if (formData.hasOwnProperty(key)) {
    //     queryParams.push(
    //       encodeURIComponent(key) + "=" + encodeURIComponent(formData[key])
    //     );
    //   }
    // }
    // const data = queryParams.join("&");
    // 
  };
  return (
    <>
      <div
        className="wrapper"
        style={{
          alignItems: "center",
          minHeight: "auto",
          
        }}
      >
        <div className="inner"
        style={{
            alignItems:"center"
        }}
        >
          <div className="image-holder">
            <img src={temp.src} alt="" />
          </div>
          <form onSubmit={handleAdvice} action="">
            <h3>Survey</h3>

            <div style={{ marginTop: "30px" }} className="form-holder">
              <input
                onChange={handleChange}
                name="name"
                value={formData.name}
                type="text"
                placeholder="Name"
                className="form-control"
              />
            </div>
            <div className="form-holder">
              <input
                type="number"
                onChange={handleChange}
                name="weight"
                value={formData.weight}
                placeholder="Enter weight"
                className="form-control"
                style={{ fontSize: "14px" }}
              />
            </div>
            <div className="form-holder">
              <input
                onChange={handleChange}
                name="height"
                value={formData.height}
                type="number"
                placeholder="Enter weight"
                className="form-control"
                style={{ fontSize: "14px" }}
              />
            </div>

            <div className="form-login ">
              <button type="submit" onClick={handleAdvice}>
                {" "}
                Get Advice
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default WeightForm;
