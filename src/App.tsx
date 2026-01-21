import React, { useState } from 'react';
import './App.css';
import StudyGuide from './components/StudyGuide';
import Flashcards from './components/Flashcards';
import Quiz from './components/Quiz';
import Progress from './components/Progress';

type View = 'home' | 'study' | 'flashcards' | 'quiz' | 'progress';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [quizScores, setQuizScores] = useState<number[]>([]);

  const handleSectionComplete = (sectionId: string) => {
    if (!completedSections.includes(sectionId)) {
      setCompletedSections([...completedSections, sectionId]);
    }
  };

  const handleQuizComplete = (score: number) => {
    setQuizScores([...quizScores, score]);
  };

  const renderView = () => {
    switch (currentView) {
      case 'study':
        return <StudyGuide onSectionComplete={handleSectionComplete} completedSections={completedSections} />;
      case 'flashcards':
        return <Flashcards />;
      case 'quiz':
        return <Quiz onQuizComplete={handleQuizComplete} />;
      case 'progress':
        return <Progress completedSections={completedSections} quizScores={quizScores} />;
      default:
        return (
          <div className="home-view">
            <div className="hero">
              <h1>🍽️ Food Handlers Study Guide</h1>
              <p className="subtitle">Master food safety with our comprehensive study tools</p>
            </div>

            <div className="feature-grid">
              <div className="feature-card" onClick={() => setCurrentView('study')}>
                <div className="feature-icon">📚</div>
                <h2>Study Guide</h2>
                <p>Learn essential food safety concepts and regulations</p>
              </div>

              <div className="feature-card" onClick={() => setCurrentView('flashcards')}>
                <div className="feature-icon">🎴</div>
                <h2>Flashcards</h2>
                <p>Review key points with interactive flashcards</p>
              </div>

              <div className="feature-card" onClick={() => setCurrentView('quiz')}>
                <div className="feature-icon">✅</div>
                <h2>Practice Quiz</h2>
                <p>Test your knowledge with practice questions</p>
              </div>

              <div className="feature-card" onClick={() => setCurrentView('progress')}>
                <div className="feature-icon">📊</div>
                <h2>Track Progress</h2>
                <p>Monitor your learning progress and scores</p>
              </div>
            </div>

            <div className="info-section">
              <h3>About Food Handlers Certification</h3>
              <p>
                Food handlers certification is required for anyone working in the food service industry.
                This comprehensive study guide covers all essential topics including food safety,
                personal hygiene, temperature control, cross-contamination prevention, and more.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand" onClick={() => setCurrentView('home')}>
          🍽️ Food Handlers Guide
        </div>
        <div className="nav-links">
          <button
            className={currentView === 'study' ? 'active' : ''}
            onClick={() => setCurrentView('study')}
          >
            Study
          </button>
          <button
            className={currentView === 'flashcards' ? 'active' : ''}
            onClick={() => setCurrentView('flashcards')}
          >
            Flashcards
          </button>
          <button
            className={currentView === 'quiz' ? 'active' : ''}
            onClick={() => setCurrentView('quiz')}
          >
            Quiz
          </button>
          <button
            className={currentView === 'progress' ? 'active' : ''}
            onClick={() => setCurrentView('progress')}
          >
            Progress
          </button>
        </div>
      </nav>

      <main className="main-content">
        {renderView()}
      </main>

      <footer className="footer">
        <p>Food Handlers Study Guide © 2026 | Practice for certification success</p>
      </footer>
    </div>
  );
}

export default App;
