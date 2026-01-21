import React from 'react';
import { studySections } from '../data/studyContent';

interface ProgressProps {
  completedSections: string[];
  quizScores: number[];
}

const Progress: React.FC<ProgressProps> = ({ completedSections, quizScores }) => {
  const totalSections = studySections.length;
  const completionPercentage = ((completedSections.length / totalSections) * 100).toFixed(0);
  const averageQuizScore = quizScores.length > 0
    ? (quizScores.reduce((a, b) => a + b, 0) / quizScores.length).toFixed(1)
    : 0;
  const bestScore = quizScores.length > 0 ? Math.max(...quizScores).toFixed(1) : 0;

  return (
    <div className="progress">
      <h1>Your Progress</h1>
      <p className="progress-intro">Track your learning journey and achievements</p>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-value">{completedSections.length}/{totalSections}</div>
          <div className="stat-label">Sections Completed</div>
          <div className="stat-progress">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            <span>{completionPercentage}%</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-value">{quizScores.length}</div>
          <div className="stat-label">Quizzes Taken</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-value">{averageQuizScore}%</div>
          <div className="stat-label">Average Quiz Score</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-value">{bestScore}%</div>
          <div className="stat-label">Best Quiz Score</div>
        </div>
      </div>

      <div className="sections-progress">
        <h2>Study Sections Progress</h2>
        <div className="sections-list">
          {studySections.map(section => (
            <div
              key={section.id}
              className={`section-progress-item ${
                completedSections.includes(section.id) ? 'completed' : 'incomplete'
              }`}
            >
              <span className="section-icon">{section.icon}</span>
              <span className="section-title">{section.title}</span>
              {completedSections.includes(section.id) ? (
                <span className="status-badge completed">✓ Complete</span>
              ) : (
                <span className="status-badge incomplete">○ Incomplete</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {quizScores.length > 0 && (
        <div className="quiz-history">
          <h2>Quiz History</h2>
          <div className="quiz-scores">
            {quizScores.map((score, index) => (
              <div key={index} className="quiz-score-item">
                <span className="quiz-number">Quiz #{index + 1}</span>
                <span className={`quiz-score ${score >= 70 ? 'passed' : 'failed'}`}>
                  {score.toFixed(1)}%
                </span>
                <span className={`quiz-status ${score >= 70 ? 'passed' : 'failed'}`}>
                  {score >= 70 ? 'Passed' : 'Failed'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="motivational-message">
        {completedSections.length === totalSections && quizScores.some(score => score >= 70) ? (
          <div className="success-message">
            🎉 <strong>Excellent work!</strong> You've completed all sections and passed the quiz.
            You're ready for your food handlers certification exam!
          </div>
        ) : completedSections.length === totalSections ? (
          <div className="info-message">
            📖 You've completed all study sections! Keep taking practice quizzes to improve your score.
          </div>
        ) : (
          <div className="info-message">
            💪 Keep going! Complete all sections and aim for at least 70% on the practice quiz.
          </div>
        )}
      </div>
    </div>
  );
};

export default Progress;
