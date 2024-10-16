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
        <div className="userflow3-container" style={{margin:'0px 0px 60px 0px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
          <div className="userflow3-column">
            <h2 className="userflow3-header">Problems</h2>
            <ol className="userflow3-list">
              <li className="userflow3-paragraph" id="problem1"><strong>(1) </strong>Users have questions about the final results and want to learn more.</li>
              <li className="userflow3-paragraph" id="problem2"><strong>(2) </strong>Feel lost due to inadequate engagement and long process.</li>
              <li className="userflow3-paragraph" id="problem3"><strong>(3) </strong>Lack of navigation options and a clear end.</li>
            </ol>
          </div>
          <div className="userflow3-column">
            <h2 className="userflow3-header">Solutions</h2>
            <ol className="userflow3-list">
              <li className="userflow3-paragraph" id="solution1"><strong>(1) </strong>Provide references and explanations of the results.</li>
              <li className="userflow3-paragraph" id="solution2-1"><strong>(2.1) </strong>Involve users by sharing notes and tips during the gameplay once an option was selected.</li>
              <li className="userflow3-paragraph" id="solution2-2"><strong>(2.2) </strong>Cut down the number of scenarios.</li>
              <li className="userflow3-paragraph" id="solution3"><strong>(3) </strong>Streamline the game with a clearer end and provide navigation to previous scenarios.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserFlow;