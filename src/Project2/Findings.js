// components/Findings.js
import React from 'react';
import purchase from './img/purchase.gif';
import purchaseflow from './img/purchaseflow.png';


const Findings = () => {
  return (
    <section id="findings2">
      <div className="findings2-container">
        <h2 className='findings-h2'>RESEARCH FINDINGS</h2>
        <h2 className="findings2-header">Based on my research, I have come to the following conclusions.</h2>
        <ul className="findings2-list" style={{margin:'20px 0px 100px 0px'}}>
            <li className="findings2-list-item">The mobile app is downloaded for other purposes. However, users don't often use it to discover or purchase games.</li>
            <div className="card card-body" style={{margin: '20px 0px 40px 0px', backgroundColor:'#EEF5FC', padding:'0px 20px',border:'none', borderRadius:'12px'}}>
              <p className="findings-paragraph" style={{fontSize:'14px'}}>According to the survey, 35% of participants have never used Steam Mobile or barely use Steam Mobile. Among users of Steam Mobile, only about 23% have purchased games on mobile.</p>
            </div>
            <li className="findings2-list-item">Gamers spend their mobile screen time on social media to look for information and consume gaming content, which is also how they discover game and DLC.</li>
            <div className="card card-body" style={{margin: '20px 0px 40px 0px', backgroundColor:'#EEF5FC', padding:'0px 20px',border:'none', borderRadius:'12px'}}>
              <p className="findings2-paragraph" style={{fontSize:'14px'}}>The Steam Mobile community is harder to use for discovering game because it doesn't suggest content based on their interests as social media offer.</p>
            </div>
            <li className="findings2-list-item">High-quality content and community are the reasons to purchase game and DLC.</li>
            <div className="card card-body" style={{margin: '20px 20px 40px 0px', backgroundColor:'#EEF5FC', padding:'0px 20px',border:'none', borderRadius:'12px'}}>
              <p className="findings-paragraph" style={{fontSize:'14px'}}>Gamers are more likely to continue purchasing DLC if the community of the game is engaging.</p>
            </div>
            <li className="findings2-list-item">Purchasing experience on mobile is lengthy and not streamlined for phone.</li>
            <div className="card card-body" style={{margin: '20px 0px 40px 0px', backgroundColor:'#EEF5FC', padding:'0px 20px', flexDirection: 'row', border:'none', borderRadius:'12px'}}>
              <img src={purchase} className="purchase"/>
              <img src={purchaseflow} className="purchaseflow"/>
            </div>
        </ul>
      </div>
    </section>
  );
};

export default Findings;