import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg3 from "../assets/img/project-img3.png";
import renderp1 from '../assets/img/renderp1.png';
import 'animate.css';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Filter } from 'react-bootstrap-icons';
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';

export const Projects = () => {

  const projects = [
    {
      imgUrl: projImg1,

    },
    {
      imgUrl: projImg3,
    }
  ];

  const [showButtons, setShowButtons] = useState(false);

  const handleFilterClick = () => {
    setShowButtons(!showButtons);
  };

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
              <button className="filter-button">VR</button>
              <button className="filter-button">Data Visulazation</button>
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
            <button>Personal Project</button>
          </div>
          <NavLink to="/project1" className='clicktoexplore'>
            Explore <ArrowRightCircle size={25} />
          </NavLink>
        </aside>
        <NavLink to="/project1" className='renderp1'>
          <img src={renderp1}></img>
        </NavLink>
      </div>
      <div>
        <div id="projects-tabs" defaultActiveKey="first">
          <div id="slideInUp">
            <div eventKey="first">
              <div>
                {
                  projects.map((project, index) => {
                    return (
                      <ProjectCard
                        key={index}
                        {...project}
                        />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}