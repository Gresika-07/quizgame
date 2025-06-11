// src/components/Result.js
import React from "react";


const Result = ({ score, total, questions }) => {
  const isPassed = score >= total / 2;

  return (
    <div className="result">
      
      <p className="score">You scored <strong>{score}</strong> out of <strong>{total}</strong></p>

      <hr />
      <h3>Correct Answers Review:</h3>
      {questions.map((q, i) => {
        return (
          <div key={i} className="review-block">
            <p><strong>Q{i + 1}:</strong> {q.question}</p>
            <div className="option correct">
              {q.options[q.correctIndex]}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Result;
