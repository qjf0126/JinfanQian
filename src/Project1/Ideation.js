// components/Ideation.js
import React from 'react';
import ideas from './img/ideas.png';
import features from './img/features.png';

const Ideation = () => {
  return (
    <section id="ideation">
      <div className="ideation-container">
        <h2 className='ideation-h2'>IDEATION & VALIDATION</h2>
        <h2 className="ideation-header">How might we help people who travel abroad to catch flights easily and confidently?</h2>
        <p className="ideation-paragraph">
        To facilitate people traveling abroad by airplane, I have envisioned the following features and conducted two rounds of concept testing:
        </p>
        <img src={features} style={{margin:'20px 0 20px 0'}}></img>
        <p className="ideation-paragraph">
          After concept testing, I have decided to retain the following three main ideas:
        </p>
        <div className="ideation-image-area" style={{marginBottom:'80px'}}>
          <img src={ideas}></img>
        </div> 
      </div>
    </section>
  );
};

export default Ideation;