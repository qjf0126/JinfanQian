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
          <li className="research3-list-item">Order takeout less frequently.</li>
          <p className="research3-paragraph">
            According to recent data, takeout orders in China have surged from 5.5 billion in 2015 to approximately 40 billion in 2022, highlighting a rapid increase. Obviously, ordering takeout less frequently can significantly reduce plastic waste generation.
          </p>
          <div className="card card-body" style={{margin: '20px 0px 40px 0px', padding:'10px 20px 20px 20px',border:'none'}}>
            <img src={growth} alt="Growth chart" className="growth"/ >
          </div>
          <li className="research3-list-item">Select the "no utensils" option when ordering takeout.</li>
          <p className="research3-paragraph">
            many food delivery platforms offer “no utensil” options as a way to reduce the waste. Consumers can simply toggle it on.
          </p>
          <div className="card card-body" style={{margin: '20px 0px 40px 0px', padding:'10px 40px',border:'none', flexDirection: 'row'}}>
            <img src={noutensils} alt="Screenshot from Uber Eats" className="noutensils"/>
            <p className="research3-paragraph">
              On average, choosing “no utensils” can reduce carbon emissions by 38g per order.
            </p>
          </div>
          <li className="research3-list-item">Increase recycling and reduce pollution by cleaning and sorting packaging.</li>
          <p className="research3-paragraph">
            most of it is incinerated or landfilled rather than recycled. Contamination from food and grease makes takeout waste less desirable for collectors and recycling plants. Currently, the recycling rate of plastic waste from Chinese takeout is only 23.3%, much lower than the overall plastic recycling rate in China (31%). The main reason for the low recycling rate is that takeout waste is often mixed with food residue, making it difficult to recycle.
          </p>
        </ul>
        <h2 className="research3-header">What did consumers do?</h2>
        <p className="research3-paragraph">I conducted interviews to explore people's habits and perspectives on takeout waste and recycling.</p>
        <ul className="research3-list" style={{margin:'20px 0px 60px 0px'}}>
          <li className="research3-paragraph">Consumers often choose to order takeout proactively (rather than out of necessity), for reasons such as not wanting to go out, feeling too lazy to cook……</li>
          <li className="research3-paragraph">People are unaware of the option to request no utensils or do not have access to portable utensils in their specific contexts.</li>
          <li className="research3-paragraph">People lack the awareness or the means to clean and recycle takeout containers.</li>
          <li className="research3-paragraph">People are not aware of the plastic waste problem and the harm caused by ordering takeout.</li>
        </ul>
        <p className="research3-paragraph">Whether ordering takeout or not, opting into “no utensil” or not, cleaning and recycling food packages and utensils or not are personal choices. After the interview, I formed the hypothesis that because some people are not aware of these choices and their impacts, they take action neglecting the environment.</p>
        <p className="HMW">
          💡 How might we raise the awareness of takeout waste and encourage people to make eco-friendly decisions when ordering and disposing of food deliveries?
        </p>
      </div>
    </section>
  );
};

export default Research;