// components/Quantitative.js
import React from 'react';

const Quantitative = () => {
  return (
    <section id="quantitative4">
        <div className="dividerP4" style={{width: '80%'}}>
            <hr className="divider-line" />
        </div>
        <div className="quantitative4-container">
            <h2 className='quantitative4-h2'>QUANTITATIVE ANALYSIS</h2>
            <div style={{display: 'flex'}}>
              <div style={{marginRight: '30px', width: '50%'}}>
                <h2 className="quantitative4-header">Inflatable Structure</h2>
                <p className="quantitative4-paragraph">
                  An inflatable structure is made of a thin layer of material that can be inflated with gases. Its unique properties—such as cushioning, strong interactivity, and lightweight—make it versatile and widely used in many fields. These features offer exciting possibilities for innovation in human-computer interaction.
                </p>
              </div>
              <div style={{marginLeft: '30px', width: '50%'}}>
                <h2 className="quantitative4-header">What if I Visualize Digital Information Using Inflatable Structure </h2>
                <p className="quantitative4-paragraph">
                  I designed an interactive airbag device that transforms digital information into physical sensations. InfoWhisper consists of multiple independent airbags, which inflate to deliver tactile feedback when the phone receives information. This project simulates the application of InfoWhisper in digital payments and mobile banking: during payments or receipts, the airbags inflate sequentially; when viewing the monthly bill, the degree of inflation of different airbags represents various types of spending.
                </p>
              </div>
            </div>
        </div>
    </section>
  );
};

export default Quantitative;