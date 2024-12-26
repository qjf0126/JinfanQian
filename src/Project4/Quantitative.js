// components/Quantitative.js
import React from 'react';
import scenario from "./img/scenario1,2.png";

const Quantitative = () => {
  return (
    <section id="quantitative4">
        <div className="dividerP4" style={{width: '80%'}}>
            <hr className="divider-line" />
        </div>
        <div className="quantitative4-container">
            <h2 className='quantitative4-h2'>INFORMATION CONVERTION</h2>
            <p className="quantitative4-paragraph">
              This project simulates the application of InfoWhisper in two scenarios: 1. Real-time alerts for fund flows during payments and collections; 2. Intuitive feedback on expenditure for different categories in monthly bills. The graph below shows how I convert information into air sac inflation.
            </p>
            <div style={{display: 'flex'}}>
              <img src={scenario} alt=""/>
            </div>
        </div>
    </section>
  );
};

export default Quantitative;