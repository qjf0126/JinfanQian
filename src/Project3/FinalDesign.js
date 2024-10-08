import React from 'react';
import scene01 from "./img/scene01.gif";
import scene02 from "./img/scene02.gif";
import scene03 from "./img/weeksummary.png";

const FinalDesign = () => {
  return (
    <section id="final3">
      <div className="final3-container">
        <h2 className='final3-h2'>FINAL DESIGN</h2>
        <p className="final3-paragraph">
          Our community is being flooded with food delivery waste. Navigate your life and make choices that shape your community's future. <a href="https://qjf030126.itch.io/tide-of-takeout-waste" target="_blank" rel="noopener noreferrer">Play the Game <i className="bi bi-box-arrow-up-right"></i></a>
        </p>
        <h2 className="final3-header"># scene 01: weekday</h2>
        <p className="final3-paragraph">
          You are a resident of this beautiful city. It's a typical weekday, 8Am. Time to get up and head to work.
        </p>
        <img src={scene01} alt='scene01' className="scene"></img>
        <h2 className="final3-header"># scene 02: weekend</h2>
        <p className="final3-paragraph">
          It's Saturday, and you're hosting a gathering party with friends. Now, it's time to prepare some food for the party.
        </p>
        <img src={scene02} alt='scene02' className="scene"></img>
        <h2 className="final3-header"># scene 03: week summary</h2>
        <img src={scene03} alt='scene03' className="scene" style={{width: '100%'}}></img>
      </div>
    </section>
  );
};

export default FinalDesign;