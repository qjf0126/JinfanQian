import render1 from "./img/render1.png";
import divide from './img/divide.png';
import './Project2.css'

const Overview = () => {
  return (
    <section id="overview2">
      {/* 顶部图片 */}
      <header className="Project2-header">
        <img src={render1} alt="" />
      </header>

      {/* 正文内容 */}
      <div className="Project2-header2">
        {/* 左侧区块：项目标题与各项信息 */}
        <aside className="Project2-sidebar">
          <h1>Steam Mobile redesign</h1>
        </aside>

        {/* 右侧区块：项目背景介绍 */}
        <section className="Project2-overview">
          <p>Timeline: January 2024 - April 2024</p>
          <p>Tool: Figma, Figjam, Google Forms</p>
          <p>Skill: Interviews, Competitive analysis, Low & High-fidelity prototyping</p>
          <button>UX Design</button>
          <button>UI Design</button>
          <button>Redesign project</button>
          <button>Individual Project</button>
        </section>
      </div>
      <img src={divide} className="divide"/>
    </section>
  );
}

export default Overview;