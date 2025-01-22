// components/Display.js
import React from 'react';
import final1 from './img/final1.mp4';
import final2 from './img/final2.mp4';

const Display = () => {
  return (
    <section id="display4">
        <div className="dividerP4" style={{width: '80%'}}>
          <hr className="divider-line" />
        </div>
        <div className="display4-container">
          <h2 className='display4-h2'>EFFECT DISPLAY</h2>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <video 
              src={final1}
              controls 
              className="display4-video"
              style={{width: '49%', marginTop: '20px'}}
            >
              Your browser does not support the video tag.
            </video>
            <video 
              src={final2}
              controls 
              className="display4-video"
              style={{width: '49%', marginTop: '20px'}}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
    </section>
  );
};

export default Display;