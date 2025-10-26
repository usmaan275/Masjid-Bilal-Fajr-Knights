import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MCQ({ questions, title = "Fajr Knights Quiz" }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowExplanation(true);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setShowExplanation(false);
    setSelectedOption("");
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // End of quiz
      setCurrentQuestion(questions.length);
    }
  };

  if (currentQuestion >= questions.length) {
    return (
      <div className="mcq-results">
        <h2>Quiz Complete!</h2>
        <p>Your score: {score} / {questions.length}</p>
        <Link to="/home">
          <button>Back to Home</button>
        </Link>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="mcq-container">
      <header>
        <Link to="/home" className="back-button">Exit</Link>
      </header>

      <div className="mcq-question-section">
        <h2>Question {currentQuestion + 1}</h2>
        <div className="mcq-question">{q.question}</div>

        <div className="mcq-options">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionClick(opt)}
              disabled={showExplanation} // prevent multiple clicks while showing explanation
              className={`option-button ${
                showExplanation && opt === q.answer ? "correct" :
                showExplanation && opt === selectedOption ? "incorrect" : ""
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {showExplanation && (
          <>
            <div className="explanation-popup">
              {selectedOption === q.answer ? "✅ Correct!" : "❌ Wrong!"} <br />
              {q.explanation}
            </div>
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default MCQ;
