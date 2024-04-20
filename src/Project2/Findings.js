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
            <li className="findings2-list-item">The mobile app is downloaded for other purposes. However, users are not using it to discover or purchase games.</li>
            <div className="card card-body" style={{margin: '20px 0px 40px 0px', backgroundColor:'#F2F7FD', padding:'0px 20px',border:'none'}}>
              <p className="research2-paragraph" style={{fontSize:'14px'}}>According to the survey📊, 35% of participants have never used Steam Mobile or barely use Steam Mobile. Among users of Steam Mobile, only about 23% have purchased games on mobile.</p>
            </div>
            <li className="findings2-list-item">High-quality content and community are the reasons to purchase game and DLC.</li>
            <div style={{display:'flex'}}>
              <div className="card card-body" style={{margin: '20px 20px 40px 0px', backgroundColor:'#F2F7FD', padding:'0px 20px', width:'250px',border:'none'}}>
                <p className="research2-paragraph" style={{fontSize:'14px'}}>More gamers use social media to discover games compared with Steam community, while more use Steam community to follow updates after purchase.</p>
              </div>
              <div className="card card-body" style={{margin: '20px 20px 40px 0px', backgroundColor:'#F2F7FD', padding:'0px 20px', width:'250px',border:'none'}}>
                <p className="research2-paragraph" style={{fontSize:'14px'}}>Gamers are more likely to continue purchasing DLC if the community of the game is engaging.</p>
              </div>
              <div className="card card-body" style={{margin: '20px 0px 40px 0px', backgroundColor:'#F2F7FD', padding:'0px 20px', width:'250px',border:'none'}}>
              <p className="research2-paragraph" style={{fontSize:'14px'}}>The Steam Mobile community doesn't provide feeds based on user interests that social media offer.</p>
              </div>
            </div>
            <li className="findings2-list-item">Purchasing experience on mobile is lengthy and not streamlined for phone.</li>
            <div className="card card-body" style={{margin: '20px 0px 40px 0px', backgroundColor:'#F2F7FD', padding:'0px 20px', flexDirection: 'row', border:'none'}}>
              <img src={purchase} className="purchase"/>
              <img src={purchaseflow} className="purchaseflow"/>
            </div>
        </ul>
      </div>
    </section>
  );
};

export default Findings;