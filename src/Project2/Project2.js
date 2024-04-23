import React from 'react';

// 可以为每个部分创建一个单独的组件
import Overview from './Overview';
import Intro from './Intro';
import Research from './Research';
import Findings from './Findings';
import Goals from './Goals';
import FinalDesign from './FinalDesign';
import Prototype from './Prototype';
import Navigation from './Navigation';
import Discussion from './Discussion';

// 主组件，用于布局和导航
class Project2 extends React.Component {
  render() {
    return (
      <div className="project2-container">
        <Overview />
        <Intro />
        <Research />
        <Findings />
        <Goals />
        <Prototype />
        <FinalDesign />
        <Navigation />
        <Discussion />
      </div>
    );
  }
}

export default Project2;