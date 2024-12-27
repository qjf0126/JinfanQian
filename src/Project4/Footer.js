import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        const target = document.getElementById('abstract4');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="footer4">
            <div className="footer4-container">
                <h2 className="footer4-header">
                  <NavLink to="/project3" className="winnerpage">
                    <p style={{ margin: '4px 4px 4px 0px' }}>Next Project: Tide of Food Delivery Waste</p>
                    <p style={{ margin: '4px 0px 4px 4px' }}>→</p>
                  </NavLink>
                  <button className='nextProj' onClick={scrollToTop} >
                    Back to Top
                  </button>
                </h2>
            </div>
        </section>
    );
};

export default Footer;