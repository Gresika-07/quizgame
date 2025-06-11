// src/components/QuestionCard.js
import React from "react";
import "../App.css";

const QuestionCard = ({ questionData, currentIndex, total, selectedOption, setSelectedOption, handleNext, userAnswers }) => {
  const handleOptionClick = (option) => {
    if (!selectedOption) {
      setSelectedOption(option);
      userAnswers.push(option);
      setTimeout(() => handleNext(), 1000);
    }
  };

  return (
    <div className="card">
      <div className="progress">
        Question {currentIndex + 1} / {total}
      </div>
      <h2>{questionData.question}</h2>
      <div className="options">
        {questionData.options.map((option, i) => {
          let className = "option";
          if (selectedOption) {
            if (option === questionData.answer) className += " correct";
            else if (option === selectedOption) className += " incorrect";
          }
          return (
            <button key={i} className={className} onClick={() => handleOptionClick(option)}>
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;