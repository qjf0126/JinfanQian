import React from 'react';
import icon1 from '../assets/img/icon1.png';
import icon2 from '../assets/img/icon2.png';
import icon3 from '../assets/img/icon3.png';
import icon4 from '../assets/img/icon4.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { Container } from 'react-bootstrap';

class ComponentLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this.toggleSentence = this.toggleSentence.bind(this); // 绑定this到toggleSentence方法
  }

  toggleSentence(index) {
    this.setState({ activeIndex: index });
  }

  render() {
    return (
      <div className="docs">
        <div className="docscontainer">
          <div className="docstext-area">
            <div className={`docssentence ${this.state.activeIndex === 0 ? 'active' : 'hidden'}`}>
              <h1 style={{marginTop:'20px'}}>Hi, I'm Qian Jinfan.👋🏼</h1>
              <p>Welcome to Qian Jinfan's personal homepage. I am currently enrolled in the Art and Technology program at Zhejiang University. I have a strong passion for designing products that are user-friendly, convenient, and highly efficient. In my free time, I like watching F1 races and playing badminton.</p>
            </div>
            <div className={`docssentence ${this.state.activeIndex === 1 ? 'active' : 'hidden'}`}>早上好</div>
            <div className={`docssentence ${this.state.activeIndex === 2 ? 'active' : 'hidden'}`}>晚上好</div>
            <div className={`docssentence ${this.state.activeIndex === 3 ? 'active' : 'hidden'}`}>
              <p>新年好</p>
              <div className="social-icon">
                <a href="#"><img src={navIcon1} className="socialicon" /></a>
                <a href="#"><img src={navIcon2} className="socialicon" /></a>
                <a href="#"><img src={navIcon3} className="socialicon" /></a>
              </div>
            </div>
          </div>
          <div className="docsbuttons">
            <div style={{marginBottom:'10px',fontSize:'20px', color:'#454545'}}>Nice to meet you.</div>
            <button className="docsbutton" onClick={this.toggleSentence.bind(this, 0)}>
              <img className="docsbutton-icon" src={icon1} alt="左侧图片" />
              <span>About me</span>
            </button>
            <button className="docsbutton" onClick={this.toggleSentence.bind(this, 1)}>
              <img className="docsbutton-icon" src={icon2} alt="左侧图片" />
              <span>Skills</span>
            </button>
            <button className="docsbutton" onClick={this.toggleSentence.bind(this, 2)}>
              <img className="docsbutton-icon" src={icon3} alt="左侧图片" />
              <span>Play</span>
            </button>
            <button className="docsbutton" onClick={this.toggleSentence.bind(this, 3)}>
              <img className="docsbutton-icon" src={icon4} alt="左侧图片" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentLayout;