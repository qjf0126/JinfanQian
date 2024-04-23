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
          I have been using Steam to discover and purchase games for 6 years and have its mobile app on my phone ever since. However, I've never opened it except for authentication. By browsing the Google Play reviews, many people might share the same experience — the app is a clumsy replica of the desktop version. It's hard to use and bring no additional values to gamers.
        </p>
        <div className='imgcontainer'>
          <img src={review1} style={{width:'45%',margin:'20px 40px 20px 0px',borderRadius:'10px'}}/>
          <img src={review2} style={{width:'45%',margin:'20px 40px 20px 0px',borderRadius:'10px'}}/>
        </div>
        <p className="Intro-paragraph" style={{marginBottom:'20px'}}>
          On the other hand, over 70% of games on the Steam platform are indie games, most of which desperately needs to reach their audience. With people spending more and more time on their phone, these downloaded but dormant Steam apps living in every gamer's phone is such a waste of opportunities for game developers and Steam. 
        </p>
        <p className="HMW">
          💡 How might we re-design the Steam Mobile app to be useful and usable for gamers and valuable for game developers?
        </p>
      </div>
    </section>
  );
};

export default Intro;