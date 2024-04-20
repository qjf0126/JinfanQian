// components/Intro.js
import React from 'react';
import review1 from "./img/review1.png";
import review2 from "./img/review2.png";

const Intro = () => {
  return (
    <section id="Intro">
      <div className="Intro-container">
        <h2 className='Intro-h2'>INTRODUCTION</h2>
        <h2 className="Intro-header">Steam is a digital distribution platform for playing, discussing, and creating games</h2>
        <p className="Intro-paragraph">
          I have been using Steam to discover and purchase games for 6 years and have its mobile app on my phone ever since. However, I've never opened it except for authentication. By browsing the Google Play reviews, many people might share the same feelings as me — it's not designed for mobile, the interface and functionality of Steam Mobile are not compatible with a mobile app. Furthermore, according to statistics, over 70% of games on the Steam platform are indie games, and most of them do not have good promotion channels on Steam, facing a dilemma of losses.
        </p>
        <div className='imgcontainer'>
          <img src={review1} style={{width:'45%',margin:'20px 40px 20px 0px',borderRadius:'10px'}}/>
          <img src={review2} style={{width:'45%',margin:'20px 40px 20px 0px',borderRadius:'10px'}}/>
        </div>
        <p className="research-paragraph" style={{marginBottom:'80px'}}>
          However, mobile has become a more and more important distribution channel in the current attention economy – more and more players are getting gaming information on their phone. A bad experience on the mobile app can lead to customer churn for Steam.
        </p>
      </div>
    </section>
  );
};

export default Intro;