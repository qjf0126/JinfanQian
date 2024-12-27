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
            <h2 className='futurevision4-h2'>FUTURE VISION: CONCEPT RENDERINGS</h2>
            <img src={render1} alt="" style={{maxWidth: '40%', height: 'auto', marginBottom: '10px'}}/>
        </div>
    </section>
  );
};

export default FutureVision;