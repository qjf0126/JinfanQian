// components/Prototyping.js
import React from 'react';
import sketch from "./img/sketch.png";
import Prototyping1 from "./img/prototyping1.png";
import painter3d from "./img/painter3d.png";

const Prototyping = () => {
  return (
    <section id="prototyping4">
        <div className="dividerP4" style={{width: '80%'}}>
            <hr className="divider-line" />
        </div>
        <div className="prototyping4-container">
            <h2 className='prototyping4-h2'>PROTOTYPING</h2>
            <div style={{display: 'flex'}}>
              <div style={{marginRight: '30px', width: '50%'}}>
                <h2 className="prototyping4-header">Physical Prototype Design</h2>
                <p className="prototyping4-paragraph">
                  In the first version of the prototype design, I created silicone airbags using modeling and 3D printing technology.
                </p>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '40px'}}>
                  <div style={{width: '49%'}}>
                    <img src={Prototyping1} alt="" style={{maxWidth: '100%', height: 'auto', marginBottom: '10px'}}/>
                    <p style={{fontSize: '12px', color: '#666', textAlign: 'center'}}>3D modeling in Rhino</p>
                  </div>
                  <div style={{width: '49%'}}>
                    <img src={painter3d} alt="" style={{maxWidth: '100%', height: 'auto', marginBottom: '10px'}}/>
                    <p style={{fontSize: '12px', color: '#666', textAlign: 'center'}}>3D printing result</p>
                  </div>
                </div>
                <p className="prototyping4-paragraph">
                  After 3D printing, I found the prototype couldn't achieve a good inflation effect, so I made the following improvements:
                </p>
                <ul className="prototyping4-list">
                  <li className="prototyping4-list-item">Used silicone molding with softer silicone material.</li>
                  <li className="prototyping4-list-item">Reduced the number of airbags and resized it to fit the phone.</li>
                  <li className="prototyping4-list-item">Added individual inflation ports for independent control.</li>
                </ul>
              </div>
              <div style={{marginLeft: '30px', width: '50%'}}>
                <h2 className="prototyping4-header">Arduino Setup</h2>
                <p className="prototyping4-paragraph">
                  I use a balloon as a substitute for the InfoWhisper and control the air pump with Arduino for inflation and deflation experiments.
                </p>
                <img src={sketch} alt=""/>
              </div>
            </div>
        </div>
    </section>
  );
};

export default Prototyping;