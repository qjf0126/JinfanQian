import React from 'react';
import Principles from "./img/Principles.png";

const Ideation = () => {
  return (
    <section id="ideation3">
      <div className="ideation3-container">
        <h2 className='ideation3-h2'>IDEATION & CONCEPT TESTING</h2>
        <p className="ideation3-paragraph">
          With these insights, I decided to create a game that would collect and visualize individual data, using interaction to show how behavior changes could positively affect the environment.
        </p>
        <h2 className="ideation3-header">Design Principles</h2>
        <img src={Principles} className="fooddeliverywaste"></img>
      </div>
    </section>
  );
};

export default Ideation;