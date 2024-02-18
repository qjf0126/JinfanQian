// components/Solution.js
import React from 'react';
import s2 from './img/s2.png';
import s1step1 from './img/s1step1.png';
import s1step2 from './img/s1step2.png';
import s1step3 from './img/s1step3.png';
import s1step4 from './img/s1step4.png';
import s1step5 from './img/s1step5.png';
import s3c1 from './img/s3c1.png';
import s3c2 from './img/s3c2.png';
import s3c3 from './img/s3c3.png';

const Prototype = () => {
  return (
    <section id="Prototype">
      <div className="Prototype-container">
        <h2 className='Prototype-h2'>PROTOTYPING & TESTING</h2>
        <p className="Prototype-paragraph">
          I prototyped based on three user scenarios and later conducted usability studies with 5 participants.
        </p>
        <section className='Prototype-scenarios'>
          <p className='scenariotitle'>#scenario1 (itinerary planning)</p>
          <p className='scenariocontent'>It is several weeks before you take the flight. Since you are not familiar with JFK, you want to make plan with your friends tgt for the journey to make sure you can catch the flight.</p>
          <div id="carousel" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={s1step1} className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <img src={s1step2} className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <img src={s1step3} className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <img src={s1step4} className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <img src={s1step5} className="d-block w-100" alt="..."></img>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        <section className='Prototype-scenarios'>
          <p className='scenariotitle'>#scenario2 (book a taxi)</p>
          <p className='scenariocontent'>The night before departure, you want to book a taxi to the JFK airport in advance.</p>
          <img src={s2} style={{paddingBottom:'20px'}}></img>
        </section>
        <section className='Prototype-scenarios'>
          <p className='scenariotitle'>#scenario3 (depart)</p>
          <div id="carousel3" className="carousel carousel-dark slide" style={{marginBottom:"120px"}}>
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={s3c1} className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <img src={s3c2} className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <img src={s3c3} className="d-block w-100" alt="..."></img>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel3" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel3" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Prototype;