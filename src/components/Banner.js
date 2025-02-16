import { Container } from "react-bootstrap"; 
import 'animate.css';
import portrait from '../assets/img/portrait2.png';
import bubble from '../assets/img/bubble.png';

export const Banner = () => {
  const handleBubbleClick = () => {
    window.open("https://youtu.be/EW_nVTt5MDs", "_blank");
  };

  return (
    <section className="banner" id="home">
      <Container className="bannercontainer">
        <div className="bannertext">
          <h1>Hi, I'm Jinfan Qian</h1>
          <p style={{fontSize:'18px'}}>An Art and Tech undergraduate at <a href="https://www.zju.edu.cn/english/" target="_blank" className="zju-link">ZJU</a>, passionate about UX, communication design and physical prototyping.</p>
          <a href="/about"><button>more about me</button></a>
        </div>
        <div>
          <figure>
            <div className="portrait">
              <img src={portrait} alt="Jinfan Qian" />
            </div>
            <div className="bubble-container" onClick={handleBubbleClick}>
              <img src={bubble} className="bubble" alt="Bubble" />
            </div>
          </figure>
        </div>
      </Container>
    </section>
  );
};
