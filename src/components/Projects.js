import renderp1 from '../assets/img/renderp1.png';
import renderp2 from '../assets/img/renderp2.png';
import renderp3 from '../assets/img/renderp3.png';
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
          <h1>Tide of Takeout Waste</h1>
          <p>A survey to collect users' daily takeout habits; Visualizing the environmental impact of takeout waste.</p>
          <div>
            <button>Communication Design</button>
            <button>Data Visualization</button>
            <button>Individual Project</button>
          </div>
          <NavLink to="/project2" className='clicktoexplore'>
            Explore <ArrowRightCircle size={25} />
          </NavLink>
        </aside>
        <NavLink to="/project2" className='renderp1'>
          <img src={renderp3}></img>
        </NavLink>
      </div>
      <div className="project">
        <aside className="Project-sidebar">
          <h1>Steam app redesign</h1>
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
    </section>
  );
}
