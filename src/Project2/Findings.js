// components/Findings.js
import React from 'react';
import purchase from './img/purchase.gif';
import community from './img/community.gif';
import mihoyo from './img/mihoyo.gif';
import purchaseflow from './img/purchaseflow.png';
import pie1 from './img/pie1.png';


const Findings = () => {
  return (
    <section id="findings2">
      <div className="findings2-container">
        <h2 className='findings2-h2'>RESEARCH FINDINGS</h2>
        <h2 className="findings2-header">Based on my research, I have come to the following conclusions :</h2>
        <ul className="findings2-list" style={{margin:'20px 0px 100px 0px'}}>
            <li className="findings2-list-item">The mobile app is downloaded for other purposes. However, users don't often use it to discover or purchase games.</li>
            <div className="card card-body" style={{margin: '20px 0px 40px 0px', padding:'10px 20px 20px 20px',border:'none'}}>
              <img src={pie1} className="pie1"/>
            </div>
            <li className="findings2-list-item">Gamers spend their mobile screen time on social media to look for information and consume gaming content, which is also how they discover game and DLC.</li>
            <div className="card card-body" style={{margin: '20px 0px 40px 0px', padding:'10px 40px',border:'none', flexDirection: 'row', alignItems:'center'}}>
              <img src={community} className="purchase"/>
              <div>
                <li className="findings2-paragraph" style={{fontSize:'16px', margin:'0px 50px 20px 60px'}}>The Steam Mobile community is harder to use for discovering game because it doesn't suggest content based on uesrs' interests as social media offer.</li>
                <li className="findings2-paragraph" style={{fontSize:'16px', margin:'0px 50px 0px 60px'}}>The UI design is clumsy cpmpared to desktop version, while other social media or its competitors like PlayStation mobile and Xbox mobile provide a better browsing experience</li>
              </div>
            </div>
            <li className="findings2-list-item">High-quality content and community are the reasons to purchase game and DLC.</li>
            <div className="card card-body" style={{margin: '20px 20px 40px 0px', padding:'10px 40px',border:'none'}}>
              <p className="findings2-paragraph" style={{fontSize:'16px'}}>Gamers are more likely to continue purchasing DLC or recharging if the community of the game is engaging.</p>
              <div style={{display:'flex', alignItems:'center'}}>
                <img src={mihoyo} className="purchase"/>
                <p className="findings2-paragraph" style={{fontSize:'16px', margin:'0px 50px 20px 60px'}}>MiHoYo(a game company) has established a special gaming community "MiHoYo Club" for its series of games to encourage players to continue to pay attention to its games.</p>
              </div>
            </div>
            <li className="findings2-list-item">Purchasing experience on mobile is lengthy and not streamlined for phone.</li>
            <div className="card card-body" style={{margin: '20px 0px 40px 0px', padding:'10px 40px', flexDirection: 'row', border:'none'}}>
              <img src={purchase} className="purchase"/>
              <img src={purchaseflow} className="purchaseflow"/>
            </div>
        </ul>
      </div>
    </section>
  );
};

export default Findings;