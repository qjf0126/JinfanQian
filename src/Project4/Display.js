// components/Display.js
import React from 'react';
import final from './img/final.mp4';

const Display = () => {
  return (
    <section id="display4">
        <div className="dividerP4" style={{width: '80%'}}>
          <hr className="divider-line" />
        </div>
        <div className="display4-container">
          <h2 className='display4-h2'>EFFECT DISPLAY</h2>
          <video 
            src={final}
            controls 
            className="display4-video"
            style={{width: '100%', marginTop: '20px'}}
          >
            Your browser does not support the video tag.
          </video>
        </div>
    </section>
  );
};

export default Display;