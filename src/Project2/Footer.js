import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        const target = document.getElementById('overview2');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="footer2">
            <div className="footer2-container">
                <h2 className="footer2-header">
                  <NavLink to="https://museaward.com/winner-info.php?id=229805" className="winnerpage">
                    <p style={{ margin: '4px 4px 4px 0px' }}>More Project</p>
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
