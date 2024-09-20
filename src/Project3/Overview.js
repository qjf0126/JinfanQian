import render1 from "./img/render1.png"; 
import { useEffect } from 'react';
import './Project3.css';

const Overview = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0); // 将页面滚动到顶部
  }, []);

  return (
    <section id="overview3">
      <header className="Project3-header">
        <img src={render1} alt="" />
      </header>

      {/* 正文内容 */}
      <div className="Project3-header2">
        {/* 左侧区块：项目标题与各项信息 */}
        <aside className="Project3-sidebar">
          <h1>Tide of Takeout Waste</h1>
          {/* Wrap the button in an anchor tag to link to your webpage */}
          <a href="https://qjf030126.itch.io/tide-of-takeout-waste" target="_blank" rel="noopener noreferrer">
            <button className="irregular-button">Play the Game!</button>
          </a>
        </aside>

        {/* 右侧区块：项目背景介绍 */}
        <section className="Project3-overview">
          <p>Timeline: April 2024 - October 2024</p>
          <p>Tool: Unity, Figma, ChatGPT</p>
          <p>Skill: Game Development, C#</p>
          <button>Communication Design</button>
          <button>Game</button>
          <button>Dataviz</button>
          <button>Individual Project</button>
        </section>
      </div>
    </section>
  );
}

export default Overview;