import React, { useState } from "react";
import surveyVector from "@/images/surveyVector.svg";
import { useRouter } from "next/navigation";
const SurveyForm = () => {
  const questionArray = [
    {
      question:
        "How would you describe the regularity of your menstrual cycle?",
      option: [
        {
          value: "yes",
          label: "Regular (28-32 days)",
        },
        {
          value: "no",
          label: "Irregular",
        },
      ],
    },
    {
      question: "Do you experience heavy or painful periods?",
      option: [
        {
          value: "yes",
          label: "yes",
        },
        {
          value: "no",
          label: "no",
        },
      ],
    },
    {
      question:
        "Have you noticed changes in your skin, such as acne or oily skin?",
      option: [
        {
          value: "yes",
          label: "yes",
        },
        {
          value: "no",
          label: "no",
        },
      ],
    },
    {
      question:
        "Have you experienced weight gain or found it difficult to lose weight?",
      option: [
        {
          value: "yes",
          label: "yes",
        },
        {
          value: "no",
          label: "no",
        },
      ],
    },
    {
      question: "Do you have excess facial or body hair?",
      option: [
        {
          value: "yes",
          label: "yes",
        },
        {
          value: "no",
          label: "no",
        },
      ],
    },
    {
      question: "How would you describe your hair thickness and health?",
      option: [
        {
          value: "yes",
          label: "Thinning",
        },
        {
          value: "no",
          label: "Normal",
        },
      ],
    },
    {
      question:
        "Have you noticed darkening of your skin in certain areas (neck, groin, under breasts)?",
      option: [
        {
          value: "yes",
          label: "yes",
        },
        {
          value: "no",
          label: "no",
        },
      ],
    },
    {
      question: "Do you experience mood swings or changes in mood frequently?",
      option: [
        {
          value: "yes",
          label: "yes",
        },
        {
          value: "no",
          label: "no",
        },
      ],
    },
    {
      question: "Do you have a history of ovarian cysts?",
      option: [
        {
          value: "yes",
          label: "yes",
        },
        {
          value: "no",
          label: "no",
        },
      ],
    },
    {
      question: "Have you experienced changes in your appetite or cravings?",
      option: [
        {
          value: "yes",
          label: "yes",
        },
        {
          value: "no",
          label: "no",
        },
      ],
    },
    {
      question:
        "Have you been diagnosed with any other reproductive health conditions?",
      option: [
        {
          value: "yes",
          label: "yes",
        },
        {
          value: "no",
          label: "no",
        },
      ],
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
      history.push("http://13.236.71.16/");
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
                  {item?.option?.map((item) => {
                    return (
                      <div className="formbold-radio-group">
                        <label className="formbold-radio-label">
                          <input
                            className="formbold-input-radio"
                            type="radio"
                            name={`qusOne${index}`}
                            id="qusOne"
                            value={item.value}
                            onChange={handleRadioChange}
                          />
                          {item.label}
                          <span className="formbold-radio-checkmark"></span>
                        </label>
                      </div>
                    );
                  })}
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
