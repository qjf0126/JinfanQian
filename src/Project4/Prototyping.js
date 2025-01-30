// components/Prototyping.js
import React from 'react';
import arduinosetup from "./img/arduinosetup.png";
import Prototyping1 from "./img/prototyping1.png";
import painter3d from "./img/painter3d.png";

const Prototyping = () => {
  return (
    <section id="prototyping4">
        <div className="dividerP4" style={{width: '80%'}}>
            <hr className="divider-line" />
        </div>
        <div className="prototyping4-container">
            <h2 className='prototyping4-h2'>EARLY PROTOTYPE</h2>
            <div style={{display: 'flex'}}>
              <div style={{marginRight: '30px', width: '50%'}}>
                <h2 className="prototyping4-header">Physical Prototype Design</h2>
                <p className="prototyping4-paragraph">
                  In the first version of the prototype design, I created silicone airbags using modeling and 3D printing technology.
                </p>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
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
                  After 3D printing, I found that the prototype didn't achieve the desired inflation effect, so I made the following improvements:
                </p>
                <ul className="prototyping4-list">
                  <li className="prototyping4-list-item">Use silicone molding with softer silicone material.</li>
                  <li className="prototyping4-list-item">Reduce the number of airbags and resized it to fit the phone.</li>
                  <li className="prototyping4-list-item">Adde individual inflation ports for independent control.</li>
                </ul>
              </div>
              <div style={{marginLeft: '30px', width: '50%'}}>
                <h2 className="prototyping4-header">Arduino Setup</h2>
                <p className="prototyping4-paragraph">
                  I built an air inflating and deflating device using Arduino and experimented with a 3D-printed "infowhisper." Due to the material of the airbag being too stiff, the inflation of the airbag was not very noticeable in the 3D-printed "infowhisper."
                </p>
                <div>
                  <img src={arduinosetup} alt="" style={{marginBottom: '10px'}}/>
                  <p style={{fontSize: '12px', color: '#666', textAlign: 'center'}}>Materials: Arduino UNO, L298N, Air pumps, Air valve, Breadboard</p>
                </div>
              </div>
            </div>
        </div>
    </section>
  );
};

export default Prototyping;