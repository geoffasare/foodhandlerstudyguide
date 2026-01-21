import React, { useState } from 'react';
import { studySections, StudySection } from '../data/studyContent';

interface StudyGuideProps {
  onSectionComplete: (sectionId: string) => void;
  completedSections: string[];
}

const StudyGuide: React.FC<StudyGuideProps> = ({ onSectionComplete, completedSections }) => {
  const [selectedSection, setSelectedSection] = useState<StudySection | null>(null);

  const handleSectionClick = (section: StudySection) => {
    setSelectedSection(section);
  };

  const handleMarkComplete = (sectionId: string) => {
    onSectionComplete(sectionId);
  };

  if (selectedSection) {
    return (
      <div className="study-detail">
        <button className="back-button" onClick={() => setSelectedSection(null)}>
          ← Back to Sections
        </button>

        <div className="section-header">
          <span className="section-icon">{selectedSection.icon}</span>
          <h1>{selectedSection.title}</h1>
        </div>

        <div className="section-content">
          <h2>Overview</h2>
          {selectedSection.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <h2>Key Points to Remember</h2>
          <ul className="key-points">
            {selectedSection.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="section-actions">
          {completedSections.includes(selectedSection.id) ? (
            <div className="completed-badge">✓ Completed</div>
          ) : (
            <button
              className="complete-button"
              onClick={() => handleMarkComplete(selectedSection.id)}
            >
              Mark as Complete
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="study-guide">
      <h1>Study Guide Sections</h1>
      <p className="guide-intro">
        Review each section to master food safety concepts. Click on any topic to learn more.
      </p>

      <div className="sections-grid">
        {studySections.map((section) => (
          <div
            key={section.id}
            className={`section-card ${completedSections.includes(section.id) ? 'completed' : ''}`}
            onClick={() => handleSectionClick(section)}
          >
            <div className="card-icon">{section.icon}</div>
            <h3>{section.title}</h3>
            <p>{section.content[0]}</p>
            {completedSections.includes(section.id) && (
              <div className="check-badge">✓</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyGuide;
