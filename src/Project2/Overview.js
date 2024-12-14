import render1 from "./img/render1.png";
import divide from './img/divide.png';
import './Project2.css';
import { useEffect } from 'react';

const Overview = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0); // 将页面滚动到顶部
  }, []);

  return (
    <section id="overview2">
      <header className="Project2-header">
        <img src={render1} alt="" />
      </header>

      {/* 正文内容 */}
      <div className="Project2-header2">
        <aside className="Project2-sidebar">
          <h1>Steam Mobile redesign</h1>
          <section className="Project2-overview">
            <p>Timeline: January 2024 - April 2024</p>
            <p>Skill: Low & High-fidelity, Interviews, Competitive analyse</p>
            <button>UX Design</button>
            <button>UI Design</button>
            <button>Redesign project</button>
            <button>Individual Project</button>
          </section>
        </aside>

        {/* 右侧区块：项目背景介绍 */}
        <section className="Project2-background">
          <h2>OVERVIEW</h2>
          <p style={{ fontSize: '14px', color: '#707070' }}>My redesigned app's features include <strong><u>improved community interaction</u></strong>, allowing players to easily browse posts and discussions, and a <strong><u>streamlined in-app purchase process</u></strong> for quick and convenient access to game-related content. These updates make Steam more accessible on mobile, enabling players to stay connected and make purchases anytime, anywhere.</p>
        </section>
      </div>
      <img src={divide} className="divide"/>
    </section>
  );
}

export default Overview;