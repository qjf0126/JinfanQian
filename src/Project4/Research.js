// components/Research.js
import React from 'react';
import sketch from "./img/sketch.png";

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
                  An inflatable structure is made of a thin layer of material that can be inflated with gases. Its unique properties—such as cushioning, strong interactivity, and lightweight—make it versatile and widely used in many fields. These features offer exciting possibilities for innovation in human-computer interaction.
                </p>
              </div>
              <div style={{marginLeft: '30px', width: '50%'}}>
                <h2 className="research4-header">What if I Visualize Digital Information Using Inflatable Structure </h2>
                <p className="research4-paragraph">
                  I designed an interactive airbag device that transforms digital information into physical sensations. InfoWhisper consists of multiple independent airbags, which inflate to deliver tactile feedback when the phone receives information. This project simulates the application of InfoWhisper in digital payments and mobile banking: during payments or receipts, the airbags inflate sequentially; when viewing the monthly bill, the degree of inflation of different airbags represents various types of spending.
                </p>
                <img src={sketch} alt=""/>
              </div>
            </div>
        </div>
    </section>
  );
};

export default Research;