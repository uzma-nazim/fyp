import React, { useState } from "react";
import surveyVector from "@/images/surveyVector.svg";
import { useRouter } from "next/navigation";
const SurveyForm = () => {
  const questionArray = [
    {
      question:
        "How would you describe the regularity of your menstrual cycle?",
    },
    {
      question: "Do you experience heavy or painful periods?",
    },
    {
      question:
        "Have you noticed changes in your skin, such as acne or oily skin?",
    },
    {
      question:
        "Have you experienced weight gain or found it difficult to lose weight?",
    },
    {
      question: "Do you have excess facial or body hair?",
    },
    {
      question: "How would you describe your hair thickness and health?",
    },
    {
      question:
        "Have you noticed darkening of your skin in certain areas (neck, groin, under breasts)?",
    },
    {
      question: "Do you experience mood swings or changes in mood frequently?",
    },
    {
      question: "Do you have a history of ovarian cysts?",
    },
    {
      question: "Have you experienced changes in your appetite or cravings?",
    },
    {
      question:
        "Have you been diagnosed with any other reproductive health conditions?",
    },
  ];
  const [answers, setAnswers] = useState({}); // State to store answers

  const history = useRouter();
  const handleRadioChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Count number of 'yes' answers
    const yesCount = Object.values(answers).filter(
      (answer) => answer === "yes"
    ).length;
    const noCount = Object.values(answers).filter(
      (answer) => answer === "no"
    ).length;
    

    // Redirect based on conditions
    if (yesCount > 3) {
      // Redirect to one page
      history.push("/info");
    } else if (noCount >= 8) {
      // Redirect to another page
      history.push("/success");
    }
  };
  return (
    <div className="formbold-main-wrapper">
      <div
        style={{
          alignItems: "flex-start",
        }}
        className="formbold-form-wrapper"
      >
        <img className="stickyBox" width={"400px"} src={surveyVector.src} />
        <form onSubmit={handleSubmit} method="POST">
          {questionArray.map((item, index) => {
            return (
              <div key={index} className="formbold-mb-6">
                <label for="qusOne" className="formbold-form-label">
                  {item.question}
                </label>

                <div className="formbold-radio-flex">
                  <div className="formbold-radio-group">
                    <label className="formbold-radio-label">
                      <input
                        className="formbold-input-radio"
                        type="radio"
                        name={`qusOne${index}`}
                        id="qusOne"
                        value="yes"
                        onChange={handleRadioChange}
                      />
                      yes
                      <span className="formbold-radio-checkmark"></span>
                    </label>
                  </div>

                  <div className="formbold-radio-group">
                    <label className="formbold-radio-label">
                      <input
                        className="formbold-input-radio"
                        type="radio"
                        name={`qusOne${index}`}
                        value="no"
                        onChange={handleRadioChange}
                        id="qusOne"
                      />
                      No
                      <span className="formbold-radio-checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            );
          })}

          <button className="formbold-btn btn">Test </button>
        </form>
      </div>
    </div>
  );
};

export default SurveyForm;
