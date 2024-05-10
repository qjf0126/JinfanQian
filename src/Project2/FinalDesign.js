// components/FinalDesign.js
import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import sitemap from './img/sitemap.png';
import sitemapOld from './img/sitemapold.png';
import final1 from './img/final1.png';
import final2 from './img/final2.png';
import final3 from './img/final3.png';
import final4 from './img/final4.png';
import shopping from './img/shopping.gif';


const FinalDesign = () => {

  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section id="final2">
      <div className="final2-container">
        <h2 className='final2-h2'>FINAL DESIGN</h2>
        <div className='switch'>
          <p className='final2-sub-header' style={{fontSize:'20px'}}>I developed a refined sitemap based on usability studies:</p>
          <p className='final2-paragraph'>The new information architecture integrates the functions of Steam Mobile, simplifies the navigation bar, retains the game community homepage with mixed content, and re-integrates the content of the game community into game hub units.</p>
          <div id="imageContainer">
            <img
              src={isChecked ? sitemap : sitemapOld}
              style={{ width: '100%' }}
            />
          </div>
          <Form style={{display:'flex', justifyContent:'center'}}>
            <Form.Check
              type="switch"
              id="imageToggle"
              checked={isChecked}
              onChange={handleToggle}
              className="custom-switch"
            />
            <Form.Label>{isChecked ? 'new site map ✨' : 'current site map'}</Form.Label>
          </Form>
        </div>
        <div>
          <p className='final2-sub-header'># Brand new onboarding experience</p>
          <p className='final2-paragraph'>In the new onboarding process, I made some improvements based on the results of the usability test</p>
          <li className="final2-list-item">Push games that users may be interested in based on their past purchase records.</li>
          <li className="final2-list-item">A 'Skip' button is set on the onboarding splash screen, allowing users to explore the game community directly if they don't want to subscribe to games officially recommended for them.</li>
          <li className="final2-list-item">A toggle button on subscription pages provides detailed game information for users.</li>
        </div>
      </div>
      <img src={final1}/>
      <img src={final2}/>
      <img src={final3} style={{marginBottom:'20px'}}/>
      <div className="final2-container">
        <p className='final2-sub-header'># Visit a game hub</p>
        <p className='final2-paragraph'> The game list is set on the homepage of the game community, providing users with a quick entry to subscribed game hubs. Users can also find a game hub through direct search.</p>
      </div>
      <img src={final4} style={{marginBottom:'40px'}}/>
      <div className="final2-container">
        <p className='final2-sub-header'># Content-driven shopping experience</p>
        <p className='final2-paragraph'>By placing product links in posts, game operators allow players to directly purchase game-related content while browsing the game community.</p>
        <img src={shopping} style={{width:'45%'}}/>
      </div>
    </section>
  );
};

export default FinalDesign;