// components/Research.js
import React from 'react';
import Experiencemap from './img/User Experience Map p1.png';


const Research = () => {
  return (
    <section id="research">
      <div className="research-container">
        <h2 className='research-h2'>RESEARCH & FINDINGS</h2>
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
        <div>
          <p className="research-paragraph">I synthesized the research findings as a user journey map:</p>
          <img src={Experiencemap}></img>
        </div>
      </div>

      <div className="research-container">
        <h2 className="research-header">Therefore, the reasons why people have difficulty boarding flights at unfamiliar foreign airports can be summarized as follow:</h2>
        <ul className="research-list" style={{marginBottom:'100px'}}>
            <li className="research-list-item">Hard to get accurate refreshing information</li>
            <li className="research-list-item">Tedious searching among different platforms for information</li>
            <li className="research-list-item">Unfamiliar airport and foreign language, spending extra time on wayfinding and navigation</li>
            <li className="research-list-item">Over or underestimate the time needed for each step due to generalized expectation and inaccurate information</li>
            <li className="research-list-item">People are more confident when traveling with a companion or learning more about others' anecdotal experiences</li>
        </ul>
      </div>
    </section>
  );
};

export default Research;