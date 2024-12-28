// components/Mold.js
import React from 'react';
import step1 from "./img/step1.png";
import step2 from "./img/step2.png";
import step3 from "./img/step3.png";
import step6 from "./img/step6.png";
import step7 from "./img/step7.png";

const Mold = () => {
  return (
    <section id="mold4">
        <div className="dividerP4" style={{width: '80%'}}>
          <hr className="divider-line" />
        </div>
        <div className="mold4-container">
          <h2 className='mold4-h2'>SILICONE MOLD MAKING</h2>
          <p className="mold4-paragraph">
            After trying 3D printing for silicone air bags, I decided to use silicone molding for a new inflatable prototype.
          </p>
          <div style={{display: 'flex'}}>
            <div style={{width: '20%'}}>
              <img src={step1} style={{marginBottom: '10px'}} alt=""/>
              <p style={{fontSize: '12px', color: '#666', textAlign: 'center'}}>1. Prepare mold materials</p>
            </div>
            <div style={{width: '20%'}}>
              <img src={step2} style={{marginBottom: '10px'}} alt=""/>
              <p style={{fontSize: '12px', color: '#666', textAlign: 'center'}}>2. Build the mold</p>
            </div>
            <div style={{width: '20%'}}>
              <img src={step3} style={{marginBottom: '10px'}} alt=""/>
              <p style={{fontSize: '12px', color: '#666', textAlign: 'center'}}>3. Pour liquid silicone</p>
            </div>
            <div style={{width: '20%'}}>
              <img src={step6} style={{marginBottom: '10px'}} alt=""/>
              <p style={{fontSize: '12px', color: '#666', textAlign: 'center'}}>6. Dry silicone</p>
            </div>
            <div style={{width: '20%'}}>
              <img src={step7} style={{marginBottom: '10px'}} alt=""/>
              <p style={{fontSize: '12px', color: '#666', textAlign: 'center'}}>7. Insert air tube and LED strip</p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Mold;