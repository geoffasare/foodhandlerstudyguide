import React, { useState } from 'react';
import { quizQuestions, QuizQuestion } from '../data/studyContent';

interface QuizProps {
  onQuizComplete: (score: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (answeredQuestions.includes(currentQuestionIndex)) {
      return;
    }

    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
      onQuizComplete((score / quizQuestions.length) * 100);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const percentage = ((score / quizQuestions.length) * 100).toFixed(1);
    const passed = parseFloat(percentage) >= 70;

    return (
      <div className="quiz-results">
        <div className={`results-card ${passed ? 'passed' : 'failed'}`}>
          <h1>{passed ? '🎉 Congratulations!' : '📚 Keep Studying!'}</h1>
          <div className="score-display">
            <div className="score-number">{percentage}%</div>
            <div className="score-fraction">
              {score} out of {quizQuestions.length} correct
            </div>
          </div>

          <p className="results-message">
            {passed
              ? 'Great job! You have a strong understanding of Canadian food safety requirements.'
              : 'Review the study materials and try again. Aim for at least 70% to pass.'}
          </p>

          <div className="results-actions">
            <button className="restart-button" onClick={handleRestart}>
              Take Quiz Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz">
      <div className="quiz-header">
        <h1>Practice Quiz</h1>
        <div className="quiz-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="progress-text">
            Question {currentQuestionIndex + 1} of {quizQuestions.length}
          </div>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-text">{currentQuestion.question}</h2>

        <div className="options-list">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQuestion.correctAnswer;
            const showResult = showExplanation;

            let optionClass = 'option';
            if (showResult && isSelected && isCorrect) {
              optionClass += ' correct';
            } else if (showResult && isSelected && !isCorrect) {
              optionClass += ' incorrect';
            } else if (showResult && isCorrect) {
              optionClass += ' correct';
            } else if (isSelected) {
              optionClass += ' selected';
            }

            return (
              <button
                key={index}
                className={optionClass}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
                {showResult && isCorrect && <span className="checkmark">✓</span>}
                {showResult && isSelected && !isCorrect && <span className="crossmark">✗</span>}
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="explanation">
            <h3>Explanation</h3>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}

        {showExplanation && (
          <button className="next-button" onClick={handleNext}>
            {currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question' : 'View Results'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
