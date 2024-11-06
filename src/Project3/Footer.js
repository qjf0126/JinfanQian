import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
      <section id="footer3">
        <div className="footer3-container">
          <h2 className="footer3-header">
            <NavLink to="https://museaward.com/winner-info.php?id=229805" className='winnerpage'>
              <p style={{margin:'4px 0px 4px 0px'}}>Next Project</p>
              <p style={{margin:'4px 0px 4px 0px'}}>→</p>
            </NavLink>
          </h2>
        </div>
      </section>
    );
  };
  
  export default Footer;