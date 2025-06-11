import React, { useState } from "react";
import { questions } from "./data/questions";
import "./App.css";

function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionClick = (index) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = index;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    }
  };

  const handleBack = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
  };

  const handleSubmit = () => {
    let correct = 0;
    answers.forEach((ans, idx) => {
      if (ans === questions[idx].correctIndex) {
        correct++;
      }
    });
    setScore(correct);
    setShowResult(true);
  };

  const renderConfetti = () => {
    return (
      <div className="confetti">
        {Array.from({ length: 30 }).map((_, i) => {
          const hue = Math.floor(Math.random() * 360);
          const left = Math.random() * 100;
          const delay = Math.random() * 2;
          return (
            <span
              key={i}
              style={{
                "--hue": hue,
                left: `${left}%`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>
    );
  };

  if (showResult) {
    return (
      <>
        <div className="result-container">
          <h2>🎉 Quiz Completed!</h2>
          <h3>Your Score: {score} / {questions.length}</h3>
        </div>
        {renderConfetti()}
      </>
    );
  }

  const currentQuestion = questions[currentQ];

  return (
    <div className="app">
      <div className="quiz-title">🎯 Fun Quiz Game</div>
      <div className="question-box">
        <h2>Question {currentQ + 1} of {questions.length}</h2>
        <h3 className="question">{currentQuestion.question}</h3>
        <div className="options">
          {currentQuestion.options.map((opt, idx) => (
            <button
              key={idx}
              className={`option-button ${answers[currentQ] === idx ? "selected" : ""}`}
              onClick={() => handleOptionClick(idx)}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="navigation-buttons">
          <button onClick={handleBack} disabled={currentQ === 0}>Back</button>
          {currentQ < questions.length - 1 ? (
            <button onClick={handleNext} disabled={answers[currentQ] === null}>Next</button>
          ) : (
            <button onClick={handleSubmit} disabled={answers[currentQ] === null}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
