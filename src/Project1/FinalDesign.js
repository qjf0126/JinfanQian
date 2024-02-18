// components/FinalDesign.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import us11 from './img/us11.gif';
import us12 from './img/us12.gif';
import us2 from './img/us2.gif';
import us31 from './img/us31.gif';
import us312 from './img/us312.gif';
import us3122 from './img/us3122.gif';
import us32 from './img/us32.gif';
import us33 from './img/us33.gif';
import render2 from './img/render2.png';
import Start1 from './img/Start1.png';
import Start2 from './img/Start2.png';
import Start3 from './img/Start3.png';
import Start4 from './img/Start4.png';
import featurecallout1 from './img/featurecallout1.png';
import featurecallout2 from './img/featurecallout2.png';


const FinalDesign = () => {
  return (
    <section id="final">
      <div className="final-container">
        <h2 className='final-h2'>FINAL DESIGN</h2>
      </div>
      <img className='render' src={render2}></img>
      <div className="final-container">
        <section>
          <h2 className="final-header">#scenario1 (plan your itinerary on desktop)</h2>
          <ul className="final-list"><li className="final-list-item" style={{lineHeight:'30px'}}>It is several weeks before you take the flight. Since you are not familiar with JFK, you want to make a plan tgt for the journey to make sure you can catch the flight.</li></ul>
          <div className="final-video1">
            <img src={us11}></img>
            <img src={featurecallout1} />
          </div>
          <ul className="final-list"><li className="final-list-item" style={{lineHeight:'30px'}}>It is several weeks before you take the flight. Since you are not familiar with JFK, you want to make a plan tgt for the journey to make sure you can catch the flight.</li></ul>
          <div className="final-video1">
            <img src={us12} />
            <img src={featurecallout2} style={{margin:'0px 0px 40px 0px'}}/>
          </div>
        </section>
        <section>
          <h2 className="final-header">#scenario2 (book a taxi before departure)</h2>
          <ul className="final-list"><li className="final-list-item">The night before departure, you want to book a taxi to the JFK airport in advance.</li></ul>
          <div className="final-video2">
            <div className="final-image-area">
              <p className='final-paragraph'>I design the ride-hailing feature section of the app to resemble Uber's interface, making it more intuitive for users to locate where to request a ride.</p>
              <img src={Start1}></img>
            </div>
            <img src={us2} className='final-us2'></img>
          </div>
        </section>
        <section>
          <h2 className="final-header">#scenario3.1 (depart for the airport)</h2>
          <ul className="final-list"><li className="final-list-item">After receiving the departure notification, you and your friends set off for JFK Airport.</li></ul>
          <div className="final-video2">
            <div className="final-image-area">
              <p className='final-paragraph'>When the user selects to start the journey, the software will begin displaying a countdown to the closing of the boarding gate and track the user's real-time movement.</p>
              <img src={Start2}></img>
            </div>
            <img src={us31} className='final-us2'></img>
          </div>
          <ul className="final-list"><li className="final-list-item">You can share your experiences, feedback, and report any unexpected situation during the journey.</li></ul>
          <div className="final-video2">
            <img src={us3122} className='final-us2'></img>
            <img src={us312} className='final-us2'></img>
          </div>
        </section>
        <section>
          <h2 className="final-header">#scenario3.2 (unexpected situation: boarding gate change)</h2>
          <ul className="final-list"><li className="final-list-item">On the way to the airport, you received a push notification that the boarding gate had changed. Therefore, you may need to modify your original itinerary.</li></ul>
          <div className="final-video2">
            <div className="final-image-area">
              <img src={Start3}></img>
            </div>
            <img src={us32} className='final-us2'></img>
          </div>
        </section>
        <section>
          <h2 className="final-header">#scenario3.3 (use navigation at the airport.)</h2>
          <ul className="final-list"><li className="final-list-item">At JFK airport, you can’t find the security screening, so you need to follow the navigation.</li></ul>
          <div className="final-video2">
            <div className="final-image-area">
              <p className='final-paragraph'>Users can directly view navigation from custom mobile home screen widgets.</p>
              <img src={Start4}></img>
            </div>
            <img src={us33} className='final-us2'></img>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FinalDesign;