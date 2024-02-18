import React from "react";
import surveyVector from "@/images/succes.svg";
import bg from "@/images/bg.jpg";

const SuccessBox = () => {
  return (
    <div
      style={{
        backgroundImage: ` url(${bg.src})`,
      }}
      className="formbold-main-wrapper"
    >
      <div className="formbold-form-wrapper">
        <img width={"460px"} src={surveyVector.src} />
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div className="formbold-mb-6">
            <h1  style={{ marginBottom: "20px", textAlign: "start" }}>
            Good news all clear!
            </h1>

            <p for="qusOne" className="formbold-form-label">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tellus turpis, consectetur nec iaculis eget, dapibus
              non velit. Orci varius natoque penatibus et magnis dis parturient
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SuccessBox;
