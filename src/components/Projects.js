import renderp1 from '../assets/img/renderp1.png';
import renderp2 from '../assets/img/renderp2.png';
import renderp3 from '../assets/img/renderp3.png';
import renderp4 from '../assets/img/renderp4.png';
import Alipay from '../assets/img/Alipay.png';
import Farmer from '../assets/img/Farmer.png';
import 'animate.css';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Filter } from 'react-bootstrap-icons';
import { NavLink } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';

export const Projects = () => {

  const [showButtons, setShowButtons] = useState(false);
  const scrollRef = useRef(null);

  const handleFilterClick = () => {
    setShowButtons(!showButtons);
  };

  // 自动滚动功能
  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >= scrollRef.current.scrollWidth) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 1; // 调整滚动速度
        }
      }
    };

    const interval = setInterval(scroll, 30); // 通过调整这里的时间来控制滚动的速度
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="divider">
        <hr className="divider-line" />
        <div className="divider-text">
          <p className="dividerp">Projects</p>
          <button onClick={handleFilterClick}>
            <Filter size={24} color="gray" />
          </button>
          {showButtons && (
            <div className="filter-buttons">
              <button className="filter-button">UX</button>
              <button className="filter-button">Dataviz</button>
              <button className="filter-button">Communication Design</button>
            </div>
          )}
        </div>
      </div>
      <div className="project">
        <aside className="Project-sidebar">
          <h1>PlanWings</h1>
          <p>PlanWings is an application that allows you to travel with peace of mind in unfamiliar airports.</p>
          <div>
            <button>UX Design</button>
            <button>UI Design</button>
            <button>Individual Project</button>
          </div>
          <NavLink to="/project1" className='clicktoexplore'>
            Explore <ArrowRightCircle size={25} />
          </NavLink>
        </aside>
        <NavLink to="/project1" className='renderp1'>
          <img src={renderp1}></img>
        </NavLink>
      </div>
      <div className="project">
        <aside className="Project-sidebar">
          <h1>InfoWhisper</h1>
          <p>InfoWhisper is an interactive phone case bridging the gap between screen and touch, translating financial activity into tactile feedback.</p>
          <div>
            <button>Tangible Interaction</button>
            <button>Physical Prototyping</button>
            <button>3D Modeling</button>
          </div>
          <NavLink to="/project4" className='clicktoexplore'>
            Explore <ArrowRightCircle size={25} />
          </NavLink>
        </aside>
        <NavLink to="/project4" className='renderp1'>
          <img src={renderp4}></img>
        </NavLink>
      </div>
      <div className="project">
        <aside className="Project-sidebar">
          <h1>Tide of Food Delivery Waste</h1>
          <p>A survey to collect users' daily food ordering habits and visualize the environmental impact of food delivery waste.</p>
          <div>
            <button>Communication Design</button>
            <button>Game</button>
            <button>Dataviz</button>
            <button>Individual Project</button>
          </div>
          <NavLink to="/project3" className='clicktoexplore'>
            Explore <ArrowRightCircle size={25} />
          </NavLink>
        </aside>
        <NavLink to="/project3" className='renderp1'>
          <img src={renderp3}></img>
        </NavLink>
      </div>
      <div className="project" style={{marginBottom: '20px'}}>
        <aside className="Project-sidebar">
          <h1>Steam App Redesign</h1>
          <p>Optimize the gaming community user experience on the Steam Mobile.</p>
          <div>
            <button>UX Design</button>
            <button>Case Study</button>
            <button>Mobile</button>
            <button>Individual Project</button>
          </div>
          <NavLink to="/project2" className='clicktoexplore'>
            Explore <ArrowRightCircle size={25} />
          </NavLink>
        </aside>
        <NavLink to="/project2" className='renderp1'>
          <img src={renderp2}></img>
        </NavLink>
      </div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <button class="btn otherproj-btn" data-bs-toggle="collapse" data-bs-target="#otherprojContent" aria-controls="otherprojContent">
          Check more projects
        </button>
        <hr className="divider-line" style={{flex: 1, height: '1px'}} />
      </div>
      <div className="collapse" id="otherprojContent">
        <div className='row'>
          <div className="card-container">
            <div className="image-container">
              <NavLink to="/alipaystock" className='renderp1'>
                <img src={Alipay}></img>
              </NavLink>
            </div>
            <div className="project-info">
              <h2 className="project-title">
                <NavLink to="/alipaystock" className='linktoOthers'>Alipay stock investment education system</NavLink>
              </h2>
              <p className="project-subtitle">
                Optimize Alipay's stock mini-program for stable investor returns.
              </p>
            </div>
          </div>
          <div className="card-container">
            <div className="image-container">
              <a href="https://youtu.be/tup-v-nIGFU" target="_blank" rel="noopener noreferrer" className='renderp1'>
                <img src={Farmer} alt="Farmer"></img>
              </a>
            </div>
            <div className="project-info">
              <h2 className="project-title">
                <a href="https://youtu.be/tup-v-nIGFU" target="_blank" rel="noopener noreferrer" className='linktoOthers'>
                  New version of "The Farmer and the River God"
                </a>
              </h2>
              <p className="project-subtitle">
                A modern take on "The Farmer and the River God" that warns people about financial scams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
