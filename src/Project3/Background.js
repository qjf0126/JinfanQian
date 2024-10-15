import React from 'react';
import divide from "./img/divide.png";
import fooddeliverywaste from "./img/deliverywaste.png";

const Background = () => {
  return (
    <section id="background3">
      <img src={divide} className="divide"></img>
      <div className="background3-container">
        <h2 className='background3-h2'>BACKGROUND</h2>
        <h2 className="background3-header">Our community is being flooded with food delivery waste</h2>
        <p className="background3-paragraph">
          In our daily lives, food delivery has become an essential convenience for many, but the waste it generates—plastic packaging, and single-use utensils—has placed an immense burden on the environment. In China, plastic waste from food delivery surged from 0.02 million tons in 2015 to 1.6 million tons in 2020. In the U.S., food delivery packaging accounts for nearly 30% of plastic waste on.
        </p>
        <p className="background3-paragraph">
          Every time I witness piles of food delivery trash accumulating on city streets and along the coastlines, I can't help but wonder: what can I do to help reduce the food delivery plastic waste?
        </p>
        <img src={fooddeliverywaste} className="fooddeliverywaste"></img>
      </div>
    </section>
  );
};

export default Background;