'use client'
import React, { useEffect, useState } from "react";
import surveyVector from "@/images/advice.jpg";
import bg from "@/images/bg.jpg";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const AdviceBox = () => {
  const router = useSearchParams().getAll("data")[0];
  
  const [data, setdata] = useState(JSON.parse(router??"{}"));
  const [advice, setadvice] = useState("loading...");
  
  useEffect(() => {
    if (data.weight > 60 && data.weight <= 75) {
      const htmlContent = `
      Hey  <b> ${data.name} !</b>,
      <p>Weight Information:</p>
      <ul>
        <li>Since your weight is  <b> ${data.weight} kg</b></li>
      </ul>
      <p>Personalized Goal:</p>
      <ul>
        <li>you’re recommended to lose around 7 to 10 kg of weight</li>
      </ul>
      <p>Diet Recommendations:</p>
      <ul>
        <li>For maintaining a healthy weight, Focus on a balanced diet with a variety of nutrients. Include whole grains, lean proteins, and plenty of fruits and vegetables in your meals.</li>
      </ul>
      <p>Exercise Recommendations:</p>
      <ul>
        <li>Consider brisk walking around 30-40 mins a day</li>
      </ul>
      <p>Hydration:</p>
      <ul>
        <li>Stay well-hydrated by drinking plenty of water throughout the day.</li>
      </ul>
      <p>Sleep:</p>
      <ul>
        <li>Ensure you get adequate sleep each night for overall well-being.</li>
      </ul>
      <p>Consistency:</p>
      <ul>
        <li>Consistency is key! Stick to your chosen diet and exercise routine for lasting result.</li>
      </ul>
<h6>LETS BEAT <b> PCOS </b> TOGETHER</h6>
    `;
      setadvice(htmlContent);
    } else if (data.weight >= 76 && data.weight <= 90) {
      const htmlContent = `
      Hey  <b> ${data.name} !</b>,
      <p>Weight Information:</p>
      <ul>
        <li>Since your weight is  <b> ${data.weight} kg</b></li>
      </ul>
      <p>Personalized Goal:</p>
      <ul>
        <li>I recommend aiming for gradual weight loss within a healthy range, around 15-20 kg.</li>
      </ul>
      <p>Diet Recommendations:</p>
      <ul>
        <li>For effective weight loss, consider staying in a calorie deficit and aim to burn around 600 calories a day. Include lean proteins, whole grains, and fiber-rich foods in your meals.</li>
      </ul>
      <p>Exercise Recommendations:</p>
      <ul>
        <li>Incorporate a combination of aerobic exercises, such as jogging or dancing, and strength training exercises to support weight loss and improve muscle tone.</li>
      </ul>
      <p>Hydration:</p>
      <ul>
        <li>Stay well-hydrated by drinking plenty of water throughout the day.</li>
      </ul>
      <p>Sleep:</p>
      <ul>
        <li>Ensure you get adequate sleep each night for overall well-being.</li>
      </ul>
      <p>Consistency:</p>
      <ul>
        <li>Consistency is key! Stick to your chosen diet and exercise routine for lasting result.</li>
      </ul>
<h6>LETS BEAT <b> PCOS </b> TOGETHER</h6>
    `;
      setadvice(htmlContent);
    } else if (data.weight > 90) {
      const htmlContent = `
      Hey  <b> ${data.name} !</b>,
      <p>Weight Information:</p>
      <ul>
        <li>Since your weight is  <b> ${data.weight} kg</b></li>
      </ul>
      <p>Personalized Goal:</p>
      <ul>
        <li>I recommend aiming for gradual and sustainable weight loss within a healthy range, around 20-30 kg.</li>
      </ul>
      <p>Diet Recommendations:</p>
      <ul>
        <li>For effective weight loss, opt for intermittent fasting (16:8). Include plenty of vegetables, lean proteins, and whole grains in your meals.</li>
      </ul>
      <p>Exercise Recommendations:</p>
      <ul>
        <li>Incorporate a mix of high-intensity aerobic exercises, such as running or HIIT workouts, and strength training exercises to accelerate weight loss and improve overall fitness.</li>
      </ul>
      <p>Hydration:</p>
      <ul>
        <li>Stay well-hydrated by drinking plenty of water throughout the day.</li>
      </ul>
      <p>Sleep:</p>
      <ul>
        <li>Ensure you get adequate sleep each night for overall well-being.</li>
      </ul>
      <p>Consistency:</p>
      <ul>
        <li>Consistency is key! Stick to your chosen diet and exercise routine for lasting result.</li>
      </ul>
<h6>LETS BEAT <b> PCOS </b> TOGETHER</h6>
    `
    
    ;
      setadvice(htmlContent);
    }else{
      const htmlContent = `
      Hey  <b> ${data.name} !</b>,
      <p>Weight Information:</p>
      <ul>
        <li>Since your weight is  <b> ${data.weight} kg</b></li>
      </ul>
  
      <p>Hydration:</p>
      <ul>
        <li>Stay well-hydrated by drinking plenty of water throughout the day.</li>
      </ul>
      <p>Sleep:</p>
      <ul>
        <li>Ensure you get adequate sleep each night for overall well-being.</li>
      </ul>
      <p>Consistency:</p>
      <ul>
        <li>Consistency is key! Stick to your chosen diet and exercise routine for lasting result.</li>
      </ul>
<h6>LETS BEAT <b> PCOS </b> TOGETHER</h6>
    `
    
    ;
      setadvice(htmlContent);
    }
  }, [router]);
  if (!router) {
    return <div>Loading...</div>; // You can customize the loading indicator
  }
  return (
    <div
      style={{
        backgroundImage: ` url(${bg.src})`,
      }}
      className="formbold-main-wrapper"
    >
      <div className="formbold-form-wrapper">
        <div>
          <img width={"900px"} height={"auto"} src={surveyVector.src} />
        </div>

        <div className="formbold-mb-6">
          <h3 style={{ marginBottom: "20px", textAlign: "start" }}>
            {" "}
            Personalized Diet and Exercise Recommendations:
          </h3>
          {/* <h6 style={{ marginBottom: "20px" , textAlign:"start"}}> Personalized Diet and Exercise Recommendations:</h6> */}
          <p
            className="formbold-form-label"
            dangerouslySetInnerHTML={{ __html: advice }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default AdviceBox;
