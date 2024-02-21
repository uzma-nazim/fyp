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
            <h1 style={{ marginBottom: "20px", textAlign: "start" }}>
              Good news all clear!
            </h1>

            <p for="qusOne" className="formbold-form-label">
              Congratulations! Your results are in, and we are happy to share
              that there are no indications of PCOS in your ultrasound images.
              This is fantastic news for your health journey! It's a testament
              to your commitment to well-being. Remember, maintaining a healthy
              lifestyle, balanced nutrition, and regular check-ups are valuable
              steps toward overall wellness. Should you have any questions or
              need further guidance on your health, our team is here to support
              you. Keep up the excellent work, and here's to your continued
              Health and Happiness!
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SuccessBox;
