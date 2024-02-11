import { ArrowRightCircle } from 'react-bootstrap-icons';
import { NavLink } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="project-card">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <NavLink to="/project1" >
            CLICK to EXPLORE <ArrowRightCircle size={25} />
          </NavLink>
        </div>
      </div>
    </div>
  )
}