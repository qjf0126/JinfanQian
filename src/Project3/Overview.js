import { ArrowRightCircle } from 'react-bootstrap-icons';
import './Project3.css';
import { useEffect } from 'react';

const Overview = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // 将页面滚动到顶部
  }, []);

  return (
    <section id="overview">
      <div className='Project3-background-image'></div>
      <div className="Project3-overview">
        {/* 正文内容 */}
        <div className="Project3-header2">
          {/* 左侧区块：项目标题与各项信息 */}
          <aside className="Project3-sidebar">
            <h1 style={{color: '#ffffff', fontSize: '45px', fontWeight: 'bold', letterSpacing: '0.05em'}}>Tide of Food Delivery Waste</h1>
            <p>Timeline: April 2024 - October 2024</p>
            <p>Tool: Unity, Figma, ChatGPT</p>
            <p>Skill: Game Development, C#</p>
            <button>Communication Design</button>
            <button>Game</button>
            <button>Dataviz</button>
            <button>Individual Project</button>
          </aside>
        </div>

        <div className='GameIntroduction'>
          <section className="Project3-background">
            <h2>GAME INTRODUCTION</h2>
            <p style={{ fontSize: '18px', color: '#ffffff' }}>you live as a city resident for a week, making dining choices just like in real life. The game will track the waste and carbon emissions you create along the way.</p>
            <p style={{ fontSize: '18px', color: '#ffffff' }}>Our community is being flooded with food delivery waste. Navigate your life and make choices that shape your community's future!</p>
            {/* 添加更多内容... */}
          </section>
          <a href="https://qjf030126.itch.io/tide-of-takeout-waste" target="_blank" rel="noopener noreferrer">
            <button className="Play">
              Play the Game <i className="bi bi-box-arrow-up-right"></i>
            </button>
          </a>
        </div>

      </div>  

      <div className="scroll-container">
        <button className="scroll-down-arrow">
          <ArrowRightCircle />
        </button>
      </div>
    </section>
  );
}

export default Overview;

