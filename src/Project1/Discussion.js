import React from 'react';

const Discussion = () => {
  return (
    <section id="discussion">
      <div className="discussion-container">
        <h2 className='discussion-h2'>DISCUSSION</h2>
        <h2 className="discussion-header">The design of utility apps should prioritize flexibility and efficiency</h2>
        <p className="discussion-paragraph">
          users of utility apps have strong intentions and expect to efficiently complete tasks and obtain the information they need through the app.
        </p>
        <div>
          <p className="discussion-paragraph">During prototype and final design testing, users often provided feedback that they had to go through multiple steps or page transitions to achieve their goals, leading to impatience or even abandonment of the app. Therefore, when designing the user flow for utility apps, it is important to prioritize a more convenient user experience by minimizing unnecessary steps and providing quick access options.</p>
        </div>
      </div>
    </section>
  );
};

export default Discussion;