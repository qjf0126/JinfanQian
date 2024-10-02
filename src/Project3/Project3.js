import React from 'react';

// 可以为每个部分创建一个单独的组件
import Overview from './Overview';
import TopBar from './TopBar';
import Background from './Background';
import Research from './Research';

// 主组件，用于布局和导航
class Project3 extends React.Component {
  render() {
    return (
      <div className="project3-container">
        <TopBar />
        <Overview />
        <Background />
        <Research />
      </div>
    );
  }
}

export default Project3;