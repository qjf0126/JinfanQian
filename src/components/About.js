import React from 'react';
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import portrait1 from "../assets/img/portrait1.png"
import { Envelope } from 'react-bootstrap-icons';
import { Camera } from 'react-bootstrap-icons';

const About = () => {
  return (
    <div className="aboutContainer">
      <NavBar />
      <div className="aboutContent">
        <div>
          <img src={portrait1} className='skyimg' alt="Cloudy Sky" />
          <div className="email-info mt-3">
            <Envelope className="me-2" />
            <span>qjf20030126@outlook.com</span>
          </div>
          <a href="https://youtu.be/EW_nVTt5MDs" target="_blank" rel="noopener noreferrer">
            <p style={{color: '#3C8CDD'}}>
              <Camera style={{ marginRight: '8px', fontSize: '19px' }} /> {/* 调整图标大小和间距 */}
              Watch my video essay
            </p>
          </a>
        </div>
        <div className='aboutText'>
          <p style={{lineHeight: '1.5em'}}>I am Jinfan Qian, an interdisciplinary designer and creative technologist with a focus on merging art, technology, and environmental awareness.</p>
          <p style={{lineHeight: '1.5em'}}>My journey began with a fascination for how design and new technology can drive social change. With a background in art, front-end development, and psychology, I'm committed to creating meaningful, user-centered experiences that address real-world challenges. I’m particularly drawn to projects that blend innovation with ecological impact, crafting interactions that encourage sustainable habits and inspire people to connect with the environment in thoughtful ways.</p>
          <p style={{lineHeight: '1.5em'}}>Outside of work, you'll find me exploring new visual techniques, collaborating on creative projects, or traveling to draw inspiration from diverse cultures.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;