import React from 'react';
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import skyimg from "../assets/img/skyimg.jpg"

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="Aboutcontainer">
        <p>
          <p>I did my undergraduate studies in the</p>
          <p>Art and Technology program at Zhejiang University.</p>
          <p>I have a strong passion for UX design and coding.</p>
          <p>My personal portfolio website is still under development,</p>
          <p>I will continue to update my work.</p>
        </p>
        <p className="emoji">🌍</p>
        <img src={skyimg} className='skyimg' alt="Cloudy Sky" />
      </div>
      <Footer />
    </div>
  );
};

export default About;