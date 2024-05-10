import render1 from "./img/render1.png";
import divide from "./img/divide.png";
import './Project1.css'
import { useEffect } from 'react';

const Background = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // 将页面滚动到顶部
  }, []);

  return (
    <section id="background">
      {/* 顶部图片 */}
      <header className="Project1-header">
        <img src={render1} alt="" />
      </header>

      {/* 正文内容 */}
      <div className="Project1-header2">
        {/* 左侧区块：项目标题与各项信息 */}
        <aside className="Project1-sidebar">
          <h1>PlanWings</h1>
          <p>August 2023 - January 2024</p>
          <p>2024 Muse Design Award Silver Prize</p>
          <button>UX Design</button>
          <button>UI Design</button>
          <button>Personal Project</button>
        </aside>

        {/* 右侧区块：项目背景介绍 */}
        <section className="Project1-background">
          <h2>BACKGROUND</h2>
          <p style={{ fontSize: '14px', color: '#707070' }}>In August 2023, I visited Japan for tourism with my friends. After a week of sightseeing, our trip ended with a return flight from KIX. Despite checking Google Maps and social media apps for traffic updates, we almost got lost trying to find the right train platform to the airport. When we finally reached the airport, the check-in counter was closed.</p>
          <p style={{ fontSize: '14px', color: '#707070' }}>Later, I found out that many of my friends had similar experiences when flying from foreign airports. They feel anxious and worried, facing unexpected situations that can cause them to miss their flights.</p>
          <p className='HMW' style={{ fontSize: '16px', color: '#454545'}}>💡So, how might we help people who travel abroad to catch flights easily and confidently?</p>
          {/* 添加更多内容... */}
        </section>
      </div>

      <img src={divide} className="divide"></img>
    </section>
  );
}

export default Background;