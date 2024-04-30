// components/Solution.js
import React from 'react';
import prototype1 from './img/prototype1.gif';
import prototype2 from './img/prototype2.gif';
import prototype3 from './img/prototype3.gif';
import feedback1 from './img/feedback1.png';
import feedback2 from './img/feedback2.png';
import feedback3 from './img/feedback3.png';


const Prototype = () => {
  return (
    <section id="prototype2">
      <div className="prototype2-container">
        <h2 className='prototype2-h2'>PROTOTYPING & TESTING</h2>
        <p className="prototype2-paragraph">I prototyped based on three user scenarios and later conducted usability studies with 5 participants.</p>
        <section className='scenariop2'>
          <p className='prototype2-sub-header' style={{fontSize:'20px'}}>#scenario 1 (onboarding & browse community)</p>
          <p className='prototype2-paragraph' style={{marginTop:'20px'}}>Ming is an avid gamer on Steam and he downloaded Steam Mobile for authentication. When he feels bored on his commute he opened Steam Mobile to casually browse through discussions, reviews, and updates on the game community.</p>
          <div style={{display:'flex'}}>
            <img src={prototype1} className="d-block" style={{width:'40%'}}></img>
            <img src={feedback1} className="d-block" style={{width:'50%'}}></img>
          </div>
        </section>
        <section className='scenariop2'>
          <p className='prototype2-sub-header' style={{fontSize:'20px'}}>#scenario 2 (visit a game hub)</p>
          <p className='prototype2-paragraph' style={{marginBottom:'0px'}}>Recently, the upcoming release of 'Homeworld 3' on Steam has caught Ming's attention. He subscribed to the game during onboarding and now seeks to explore its development updates, tester reviews, and player discussions within the Steam community.</p>
          <div style={{display:'flex'}}>
            <img src={prototype2} className="d-block" style={{width:'40%'}}></img>
            <img src={feedback2} className="d-block" style={{width:'50%'}}></img>
          </div>
        </section>
        <section className='scenariop2'>
          <p className='prototype2-sub-header' style={{fontSize:'20px'}}>#scenario 3 (content-driven shopping)</p>
          <p className="prototype2-paragraph">Ming read a post from the official Horizon 5 (a racing game) account on Steam community, detailing recent events in the game. Intrigued by the vehicle pack, Ming bought the DLC on Steam Mobile.</p>
          <div style={{display:'flex'}}>
            <img src={prototype3} className="d-block" style={{width:'40%'}}></img>
            <img src={feedback3} className="d-block" style={{width:'50%'}}></img>
          </div>
        </section>
        <p className='prototype2-sub-header' style={{fontSize:'20px'}}>After usability studies, I decided to make the following improvements:</p>
        <ul className="prototype2-list">
          <li className="prototype2-list-item">Delete the onboarding process in the login phase, which will only be triggered when the user enters the game community for the first time.</li>
          <li className="prototype2-list-item">Change the form of onboarding, adding game posters and brief game introductions to help users know about the game.</li>
          <li className="prototype2-list-item">Change the navigation bar icon to make it easier to understand.</li>
          <li className="prototype2-list-item">Change the content layout of the community main interface so that players can directly enter a gamehub using the community main interface.</li>
        </ul>
      </div>
    </section>
  );
};

export default Prototype;