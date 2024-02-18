// components/Findings.js
import React from 'react';
import Experiencemap from './img/User Experience Map p1.png';


const Findings = () => {
  return (
    <section id="findings">
      <div className="findings-container">
        <h2 className='findings-h2'>FINDINGS</h2>
        <div>
          <p className="findings-paragraph">I synthesized the research findings as a user journey map:</p>
          <img src={Experiencemap}></img>
        </div>
        <h2 className="findings-header">Therefore, the reasons why people have difficulty boarding flights at unfamiliar foreign airports can be summarized as follow:</h2>
        <ul className="findings-list" style={{marginBottom:'100px'}}>
            <li className="findings-list-item">Hard to get accurate refreshing information</li>
            <li className="findings-list-item">Tedious searching among different platforms for information</li>
            <li className="findings-list-item">Unfamiliar airport and foreign language, spending extra time on wayfinding and navigation</li>
            <li className="findings-list-item">Over or underestimate the time needed for each step due to generalized expectation and inaccurate information</li>
            <li className="findings-list-item">People are more confident when traveling with a companion or learning more about others' anecdotal experiences</li>
        </ul>
      </div>
    </section>
  );
};

export default Findings;