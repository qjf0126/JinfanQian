import React from 'react';

const UserFlow = () => {
  return (
    <section id="userflow3">
      <div className="userflow3-container">
        <h2 className="userflow3-h2">USER FLOW & WIREFRAME</h2>
        <p className="userflow3-paragraph">
          I outlined the user flow and created a paper prototype to test the game and the flow with 4 participants.
        </p>
        <div style={{ width: '640px', height: '540px', margin: '10px', position: 'relative' }}>
          <iframe
            allowFullScreen
            style={{ width: '840px', height: '540px' }}
            src="https://lucid.app/documents/embedded/be40753d-0d6f-42fe-b9e9-1b1528c1781d"
            id="JgWeomgvMi1x"
            title="User Flow Diagram"
          ></iframe>
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