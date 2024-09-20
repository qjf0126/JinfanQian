import React from 'react';

// 可以为每个部分创建一个单独的组件
import Overview from './Overview';

// 主组件，用于布局和导航
class Project3 extends React.Component {
  render() {
    return (
      <div className="project3-container">
        <Overview />
      </div>
    );
  }
}

export default Project3;