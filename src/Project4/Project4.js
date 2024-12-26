import React from 'react';

// 可以为每个部分创建一个单独的组件
import TopBar from './Topbar';
import Abstract from './Abstract';
import Research from './Research';
import Quantitative from './Quantitative';
import Prototyping from './Prototyping';

// 主组件，用于布局和导航
class Project4 extends React.Component {
  render() {
    return (
      <div className="project1-container">
        <TopBar />
        <Abstract />
        <Research />
        <Quantitative />
        <Prototyping />
      </div>
    );
  }
}

export default Project4;