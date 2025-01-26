import React from 'react';
import scenarios from "./img/scenarios.png";

const FinalDesign = () => {
  return (
    <section id="final3">
      <div className="final3-container">
        <h2 className='final3-h2'>FINAL DESIGN</h2>
        <p className="final3-paragraph">
          I set up four scenarios in the game where players make choices about whether to order delivery. In the end, the game estimates the total amount of food delivery waste they generate in a month and a year based on their choices.
        </p>
        <img src={scenarios} className="scenarios"></img>
        <p className="final3-paragraph">
          Our community is being flooded with food delivery waste. Navigate your life and make choices that shape your community's future. <a href="https://qjf030126.itch.io/tide-of-takeout-waste" target="_blank" rel="noopener noreferrer">Play the Game <i className="bi bi-box-arrow-up-right"></i></a>
        </p>
        <iframe width="860" height="547" src="https://www.youtube.com/embed/euCEkwGyx8k?si=o2l9Jg_XSO_fxBVq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
      </div>
    </section>
  );
};

export default FinalDesign;