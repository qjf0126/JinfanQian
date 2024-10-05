import React from 'react';
import scene01 from "./img/scene01.gif";
import scene02 from "./img/scene02.gif";
import scene03 from "./img/scene03.gif";
import scene04 from "./img/scene04.gif";

const FinalDesign = () => {
  return (
    <section id="final3">
      <div className="final3-container">
        <h2 className='final3-h2'>FINAL DESIGN</h2>
        <p className="final3-paragraph">
          Our community is being flooded with takeoutwaste. Navigate your life and make choicesthat shape your community's future. <a href="https://qjf030126.itch.io/tide-of-takeout-waste" target="_blank" rel="noopener noreferrer">Play the Game <i className="bi bi-box-arrow-up-right"></i></a>
        </p>
        <h2 className="final3-header"># scene 01: weekday morning</h2>
        <p className="final3-paragraph">
          You are a resident of this beautiful city. It's a typical weekday, 8Am. Time to get up and head to work.
        </p>
        <img src={scene01} alt='scene01' className="scene"></img>
        <h2 className="final3-header"># scene 02: weekday noon</h2>
        <p className="final3-paragraph">
          At twelve o'clock at noon, it starts to rain in the city. You don't know when it will stop. And you've wrapped up your morning tasks. Now, it's time for lunch.
        </p>
        <img src={scene02} alt='scene02' className="scene"></img>
        <h2 className="final3-header"># scene 03: weekday night</h2>
        <p className="final3-paragraph">
          You get off work at 6pm, it's time for dinner.
        </p>
        <img src={scene03} alt='scene03' className="scene"></img>
        <h2 className="final3-header"># scene 04: weekend</h2>
        <p className="final3-paragraph">
          It's Saturday, and you're hosting a gathering party with friends. Now, it's time to prepare some food for the party.
        </p>
        <img src={scene04} alt='scene04' className="scene"></img>
      </div>
    </section>
  );
};

export default FinalDesign;