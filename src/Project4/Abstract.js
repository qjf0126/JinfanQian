import finalprototype from "./img/finalprototype.png";
import './Project4.css'
import { useEffect } from 'react';

const Abstract = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // 将页面滚动到顶部
  }, []);

  return (
    <section id="abstract4">
      <header className="Project4-header">
        <img src={finalprototype} alt="" id="Info1"/>
      </header>

      <div className="Project4-header2">
        {/* 左侧区块：项目标题与各项信息 */}
        <aside className="Project4-sidebar">
          <h1>InfoWhisper</h1>
          <p>November 2024 - December 2024</p>
          <button>Tangible Interaction</button>
          <button>Physical Prototyping</button>
          <button>3D Modeling</button>
          <button>Silicone Airbags</button>
          <button>Arduino Development</button>
        </aside>
        {/* 右侧区块：项目背景介绍 */}
        <section className="Project4-abstract">
          <h2>ABSTRACT</h2>
          <p style={{ fontSize: '14px', color: '#707070' }}>Our modern lives are filled with information delivered through smartphones—messages, payments, schedules—all of which share a common trait: they are contactless. While smartphones enhance convenience, they diminish sensory engagement. For example, contactless payments turn cash into numbers on a screen, reduce frequent small expenses to transaction records, and replace human interaction with a simple "Payment Successful" message, weakening our perception of spending.</p>
          <p style={{ fontSize: '14px', color: '#707070' }}>InfoWhisper explores how tangible interaction can give digital information a tactile experience. The inflatable airbag structure transforms the digital data received by the phone into tactile sensations, while different colored LED lights provide visual effects. This enables us to perceive the flow of digital information more intuitively.</p>
        </section>
      </div>

    </section>
  );
}

export default Abstract;