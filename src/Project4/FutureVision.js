// components/FutureVision.js
import React from 'react';
import render1 from "./img/render1.png";

const FutureVision = () => {
  return (
    <section id="futurevision4">
        <div className="dividerP4" style={{width: '80%'}}>
            <hr className="divider-line" />
        </div>
        <div className="futurevision4-container">
            <h2 className='futurevision4-h2'>FUTURE VISION</h2>
            <div style={{display:'flex'}}>
              <img src={render1} alt="" style={{maxWidth: '40%', height: 'auto', marginBottom: '10px'}}/>
              <p className="futurevision4-paragraph">
                The future iterations of InfoWhisper will explore the potential of integrating more advanced sensory feedback mechanisms, expanding the range of notifications it can respond to, and further enhancing its ability to adapt to various use scenarios. By directly integrating miniature air pumps and sensors into the device, future versions of InfoWhisper will offer users an intuitive, tactile way to experience digital information.
              </p>
            </div>
        </div>
    </section>
  );
};

export default FutureVision;