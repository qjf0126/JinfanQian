import React from 'react';
import MUSE from "./img/2024-MUSE-Design-Awards-Site-Bages-Silver.png";

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
            <button className='winnerpage'>Dedicated Winner's Page</button>
          </h2>
          <img src={MUSE} style={{width:'140px'}}></img>
        </div>
      </section>
    );
  };
  
  export default Footer;