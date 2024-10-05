import React from 'react';

const Ideation = () => {
  return (
    <section id="ideation3">
      <div className="ideation3-container">
        <h2 className='ideation3-h2'>IDEATION & CONCEPT TESTING</h2>
        <h2 className="ideation3-header">Design Goal</h2>
        <p className="ideation3-paragraph">
          By using visual storytelling, I wanted to help people truly grasp the scale of the takeout plastic waste problem and understand the harm it causes.
        </p>
        <h2 className="ideation3-header">Solution</h2>
        <p className="ideation3-paragraph">
          With these insights, I decided to create a game that would collect and visualize individual data, using interaction to show how behavior changes could positively affect the environment.
        </p>
        <h2 className="ideation3-header">Design Principles</h2>
        <ul className="ideation3-list" style={{margin:'20px 0px 60px 0px'}}>
          <li className="ideation3-paragraph">Personalized: the game should shed light on personal choices and their influences</li>
          <li className="ideation3-paragraph">Interactive & Immersive: player should make choices as if in real life and in real scenarios and feel engaging</li>
          <li className="ideation3-paragraph">Easy: player shouldn't feel hard to navigate through the game and understand the data</li>
          <li className="ideation3-paragraph">Actionable: player should know what to do to reduce food delivery plastic waste</li>
          <li className="ideation3-paragraph">Fun: it is a game! It should not be lecturing</li>
        </ul>
      </div>
    </section>
  );
};

export default Ideation;