import React from 'react';
import MUSE from "./img/2024-MUSE-Design-Awards-Site-Bages-Silver.png";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    const target = document.getElementById('background');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
      <section id="footer">
        <div className="footer-container">
          <h2 className="footer-header">
            <p>
              "PlanWings" has won the 
            </p>
            <p>
              2024 Muse Design Award Silver Prize.
            </p>
            <NavLink to="https://museaward.com/winner-info.php?id=229805" className='winnerpage'>
              <p style={{margin:'4px 0px 4px 0px'}}>Dedicated Winner's Page</p>
              <p style={{margin:'4px 0px 4px 0px'}}>→</p>
            </NavLink>
          </h2>
          <img src={MUSE} style={{width:'140px'}}></img>
        </div>
        <div className="footer-container" style={{justifyContent:'space-between'}}>
          <NavLink to="/project4" className="winnerpage">
            <p style={{ margin: '4px 4px 4px 0px' }}>Next Project: InfoWhisper</p>
            <p style={{ margin: '4px 0px 4px 4px' }}>→</p>
          </NavLink>
          <button className='nextProj' onClick={scrollToTop} >
            Back to Top
          </button>
        </div>
      </section>
    );
  };
  
  export default Footer;