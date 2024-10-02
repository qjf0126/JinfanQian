import React from 'react';
import growth from './img/growth.png';
import noutensils from './img/noutensils.png';

const Research = () => {
  return (
    <section id="research3">
      <div className="research3-container">
        <h2 className='research3-h2'>RESEARCH</h2>
        <h2 className="research3-header">What can consumers do?</h2>
        <p className="research3-paragraph">
          I did a table research and found that consumers can:
        </p>
        <ul className="research3-list" style={{margin:'20px 0px 100px 0px'}}>
            <li className="research3-list-item">Order takeout less frequently.</li>
            <p className="research3-paragraph">
              According to recent data, takeout orders in China have surged from 5.5 billion in 2015 to approximately 40 billion in 2022, highlighting a rapid increase. Obviously, ordering takeout less frequently can significantly reduce plastic waste generation.
            </p>
            <div className="card card-body" style={{margin: '20px 0px 40px 0px', padding:'10px 20px 20px 20px',border:'none'}}>
              <img src={growth} className="growth"/>
            </div>
            <li className="research3-list-item">Select the "no utensils" option when ordering takeout.</li>
            <p className="research3-paragraph">
              many food delivery platforms offer “no utensil” options as a way to reduce the waste. Consumers can simply toggle it on.
            </p>
            <div className="card card-body" style={{margin: '20px 0px 40px 0px', padding:'10px 40px',border:'none', flexDirection: 'row'}}>
              <img src={noutensils} className="noutensils"/>
              <p className="research3-paragraph">
                On average, choosing “no utensils” can reduce carbon emissions by 38g per order.
              </p>
            </div>
            <li className="research3-list-item">Increase recycling and reduce pollution by cleaning and sorting packaging.</li>
            <p className="research3-paragraph">
              most of it is incinerated or landfilled rather than recycled. Contamination from food and grease makes takeout waste less desirable for collectors and recycling plants. Currently, the recycling rate of plastic waste from Chinese takeout is only 23.3%, much lower than the overall plastic recycling rate in China (31%). The main reason for the low recycling rate is that takeout waste is often mixed with food residue, making it difficult to recycle.
            </p>
        </ul>
      </div>
    </section>
  );
};

export default Research;
