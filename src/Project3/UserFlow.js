import React from 'react';
import Paper01 from "./img/paper01.png";
import Paper02 from "./img/paper02.png";

const UserFlow = () => {
  return (
    <section id="userflow3">
      <div className="userflow3-container">
        <h2 className="userflow3-h2">USER FLOW & WIREFRAME</h2>
        <p className="userflow3-paragraph">
          I created paper prototype to test the game and the flow with 4 participants.
        </p>
        <div className='Paper'>
          <img src={Paper01} className="PaperImg"></img>
          <img src={Paper02} className="PaperImg"></img>
        </div>
        <h2 className="userflow3-header">Problems:</h2>
        <ul className="userflow3-list" style={{margin:'0px 0px 20px 0px'}}>
          <li className="userflow3-paragraph">Lacking a clear conclusion and summary of player actions.</li>
          <li className="userflow3-paragraph">Lacking sufficient feedback during gameplay.</li>
          <li className="userflow3-paragraph">Lacking clarity on the environmental impact of behavior changes.</li>
        </ul>
        <h2 className="userflow3-header">Iteration:</h2>
        <ul className="userflow3-list" style={{margin:'0px 0px 60px 0px'}}>
          <li className="userflow3-paragraph">Allowing players to replay, share the game, and download results reports.</li>
          <li className="userflow3-paragraph">Providing environmental knowledge throughout gameplay.</li>
          <li className="userflow3-paragraph">Enabling behavior changes and displaying the resulting environmental impact.</li>
        </ul>
      </div>
    </section>
  );
};

export default UserFlow;