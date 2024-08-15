import React from 'react';
import MUSE from "./img/2024-MUSE-Design-Awards-Site-Bages-Silver.png";
import { NavLink } from 'react-router-dom';

const Footer = () => {
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
      </section>
    );
  };
  
  export default Footer;