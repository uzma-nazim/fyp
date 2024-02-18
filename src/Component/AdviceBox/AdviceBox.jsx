import React from "react";
import surveyVector from "@/images/advice.jpg";
import bg from "@/images/bg.jpg";

const AdviceBox = () => {
  return (
    <div 
    style={{
        backgroundImage: ` url(${bg.src})`
    }}
    className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <img width={"460px"} src={surveyVector.src} />
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div className="formbold-mb-6">
          <h3 style={{ marginBottom: "20px" , textAlign:"start"}}>Health Advice</h3>

            <p for="qusOne" className="formbold-form-label">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tellus turpis, consectetur nec iaculis eget, dapibus
              non velit. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Mauris nec nisi eu erat pulvinar
              consectetur at sed leo. Aenean eros ipsum, luctus ac risus at,
              ullamcorper condimentum elit. Ut sodales, purus a pharetra
              sollicitudin, est nibh sodales lectus, rhoncus semper dui libero
              id ex. Cras scelerisque, erat quis lacinia tempus, lectus leo
              laoreet nisi, nec tincidunt ante ipsum in mi. Duis erat metus,
              tempor nec libero non, pharetra fringilla lorem. Mauris sit amet
              dictum ipsum. In velit risus, laoreet nec gravida eget, tempor ac
              sapien. Sed mauris quam, laoreet vel eleifend quis, lacinia id
              est. Vivamus aliquet orci non ante aliquet, aliquam malesuada
              velit hendrerit.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdviceBox;
