import React, { useState } from 'react';
import { studySections } from '../data/studyContent';

interface Card {
  id: string;
  front: string;
  back: string;
}

const Flashcards: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const allCards: Card[] = studySections.flatMap(section =>
    section.keyPoints.map((point, index) => ({
      id: `${section.id}-${index}`,
      front: point,
      back: section.content[index] || section.content[0]
    }))
  );

  const cards = selectedCategory
    ? allCards.filter(card => card.id.startsWith(selectedCategory))
    : allCards;

  const currentCard = cards[currentCardIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  return (
    <div className="flashcards">
      <h1>Flashcards</h1>
      <p className="flashcards-intro">
        Review key concepts with interactive flashcards. Click to flip!
      </p>

      <div className="category-filter">
        <button
          className={selectedCategory === '' ? 'active' : ''}
          onClick={() => handleCategoryChange('')}
        >
          All Topics
        </button>
        {studySections.map(section => (
          <button
            key={section.id}
            className={selectedCategory === section.id ? 'active' : ''}
            onClick={() => handleCategoryChange(section.id)}
          >
            {section.icon} {section.title}
          </button>
        ))}
      </div>

      {currentCard && (
        <div className="flashcard-container">
          <div className="card-counter">
            Card {currentCardIndex + 1} of {cards.length}
          </div>

          <div
            className={`flashcard ${isFlipped ? 'flipped' : ''}`}
            onClick={handleFlip}
          >
            <div className="card-face card-front">
              <div className="card-label">Question</div>
              <div className="card-text">{currentCard.front}</div>
              <div className="flip-hint">Click to flip</div>
            </div>
            <div className="card-face card-back">
              <div className="card-label">Answer</div>
              <div className="card-text">{currentCard.back}</div>
              <div className="flip-hint">Click to flip</div>
            </div>
          </div>

          <div className="card-navigation">
            <button onClick={handlePrevious} disabled={cards.length <= 1}>
              ← Previous
            </button>
            <button onClick={handleNext} disabled={cards.length <= 1}>
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flashcards;
