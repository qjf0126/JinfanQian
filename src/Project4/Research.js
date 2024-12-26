// components/Research.js
import React from 'react';
import sketch from "./img/sketch.png";
import inflatablechair from "./img/inflatablechair.jpeg";
import inflatablestructure from "./img/inflatablestructure.jpeg";

const Research = () => {
  return (
    <section id="research4">
        <div className="dividerP4" style={{width: '80%'}}>
            <hr className="divider-line" />
        </div>
        <div className="research4-container">
            <h2 className='research4-h2'>RESEARCH</h2>
            <div style={{display: 'flex'}}>
              <div style={{marginRight: '30px', width: '50%'}}>
                <h2 className="research4-header">Inflatable Structure</h2>
                <p className="research4-paragraph">
                  An inflatable structure is made of a thin layer of material that can be inflated with gases. Its unique properties—such as cushioning, strong interactivity, and lightweight—make it versatile and widely used in many fields. These features offer exciting possibilities for innovation in interaction design.
                </p>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '40px'}}>
                  <div style={{width: '49%'}}>
                    <img src={inflatablechair} alt="" style={{maxWidth: '100%', height: 'auto', marginBottom: '10px'}}/>
                    <p style={{fontSize: '12px', color: '#666', textAlign: 'center'}}>The inflatable Blow chair by Jonathan De Pas, Donato D'Urbino and Paolo Lomazzi (1967)</p>
                  </div>
                  <div style={{width: '49%'}}>
                    <img src={inflatablestructure} alt="" style={{maxWidth: '100%', height: 'auto', marginBottom: '10px'}}/>
                    <p style={{fontSize: '12px', color: '#666', textAlign: 'center'}}>Organic Concept by Shih Chieh Huang at the Worcester Art Museum (2017)</p>
                  </div>
                </div>
              </div>
              <div style={{marginLeft: '30px', width: '50%'}}>
                <h2 className="research4-header">What if I Visualize Digital Information Using Inflatable Structure </h2>
                <p className="research4-paragraph">
                  I designed an interactive airbag device that transforms digital information into physical sensations. InfoWhisper consists of multiple independent airbags, which inflate to deliver tactile feedback when the phone receives information.
                </p>
                <img src={sketch} alt=""/>
              </div>
            </div>
        </div>
    </section>
  );
};

export default Research;