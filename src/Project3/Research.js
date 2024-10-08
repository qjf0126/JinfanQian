import React from 'react';
import growth from './img/growth.png';
import noutensils from './img/noutensils.png';

const Research = () => {
  return (
    <section id="research3">
      <div className="research3-container">
        <h2 className='research3-h2'>RESEARCH</h2>
        <h2 className="research3-header">What can consumers do?</h2>
        <p className="research3-paragraph">I did a table research and found that consumers can:</p>
        <ul className="research3-list" style={{margin:'20px 0px 60px 0px'}}>
          <li className="research3-list-item">Reduce the number of times ordering delivery</li>
          <p className="research3-paragraph">
            According to recent data, food delivery orders in China have surged from 5.5 billion in 2015 to approximately 40 billion in 2022, highlighting a rapid increase. obviously, ordering fewer deliveries can reduce the amount of plastic waste. However, the booming food delivery market revels the opposite trend.
          </p>
          <div className="card card-body" style={{margin: '20px 0px 40px 0px', padding:'10px 20px 20px 20px',border:'none'}}>
            <img src={growth} alt="Growth chart" className="growth"/ >
          </div>
          <li className="research3-list-item">Decline single-use utensils</li>
          <p className="research3-paragraph">
            many food delivery platforms offer “no utensil” options as a way to reduce the waste. Consumers can simply toggle it on.
          </p>
          <div className="card card-body" style={{margin: '20px 0px 40px 0px', padding:'10px 40px',border:'none', flexDirection: 'row'}}>
            <img src={noutensils} alt="Screenshot from Uber Eats" className="noutensils"/>
            <p className="research3-paragraph">
              On average, choosing “no utensils” can reduce carbon emissions by 38g per order.
            </p>
          </div>
          <li className="research3-list-item">Recycle single-use plastics</li>
          <p className="research3-paragraph">
            most of the single-use plastics are incinerated or landfilled rather than recycled. Currently, the recycling rate of plastic waste from Chinese food delivery is only 23.3%, much lower than China's overall plastic recycling rate (31%). The main reason for the low recycling rate is that food delivery waste is often contaminated by food residue and grease, making it difficult to recycle and less desirable for collectors and recycling plants. 
          </p>
        </ul>
        <h2 className="research3-header">What did consumers do?</h2>
        <p className="research3-paragraph">I conducted interviews to explore people's habits and perspectives on food delivery waste and recycling.</p>
        <ul className="research3-list" style={{margin:'20px 0px 40px 0px'}}>
          <li className="research3-paragraph">Ordering takeout or delivery is not the last resort. Participants often order takeout because they don't want to go out or too lazy to cook, etc, instead of being left with no choice.</li>
          <li className="research3-paragraph">People are not aware of the option to decline utensils or do not have access to portable utensils in certain circumstances such as in the office.</li>
          <li className="research3-paragraph">People lack the awareness or the means to clean and recycle food delivery containers.</li>
          <li className="research3-paragraph">People are not aware of the plastic waste problem and the consequences.</li>
        </ul>
        <p className="research3-paragraph">Whether ordering takeout or not, opting into “no utensil” or not, cleaning and recycling food packages and utensils or not are personal choices. Because people are not aware that they are making choices and the impacts of their choices, they choose actions that harm the environment.</p>
        <p className="HMW">
          💡 How might we raise the awareness of food delivery waste and encourage people to make eco-friendly decisions when ordering and disposing of food deliveries?
        </p>
      </div>
    </section>
  );
};

export default Research;