// components/Research.js
import React from 'react';


const Research = () => {
  return (
    <section id="research">
      <div className="research-container">
        <h2 className='research-h2'>RESEARCH</h2>
        <h2 className="research-header">Many people feel anxious at unfamiliar foreign airports and miss their flights</h2>
        <p className="research-paragraph">
          To find out why people have difficulty boarding flights at unfamiliar foreign airports, I surveyed several young people who have experience of traveling or studying abroad. Below are my research questions.
        </p>
        <ul className="research-list">
            <li className="research-list-item">What make it hard and confusing to catch flight in a foreign airport?</li>
            <li className="research-list-item">What do they do beforehand and at the airport?</li>
            <li className="research-list-item">What tools do they use?</li>
            <li className="research-list-item">How they feel about existing flight process?</li>
        </ul>
        <p className="research-paragraph">
          I interviewed 3 participants, combining the “draw your experience” method.
        </p>
        <div className="research-image-area">
          {/* 在这里放置图片或其他内容 */}
          Image Placeholder
        </div>
      </div>
    </section>
  );
};

export default Research;