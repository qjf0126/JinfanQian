import React from 'react';

// 可以为每个部分创建一个单独的组件
import Background from './Background';
import Research from './Research';
import Findings from './Findings';
import Ideation from './Ideation';
import FinalDesign from './FinalDesign';
import Prototype from './Prototype';
import Navigation from './Navigation';
import Discussion from './Discussion';

// 主组件，用于布局和导航
class Project1 extends React.Component {
  render() {
    return (
      <div className="project1-container">
        <Background />
        <Research />
        <Findings />
        <Ideation />
        <Prototype />
        <FinalDesign />
        <Navigation />
        <Discussion />
      </div>
    );
  }
}

export default Project1;