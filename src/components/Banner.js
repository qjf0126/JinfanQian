import { Container } from "react-bootstrap";
import 'animate.css';
import portrait from '../assets/img/portrait2.jpg';

export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container className="bannercontainer">
        <div className="bannertext">
          <h1>Hi, I'm Qian Jinfan.</h1>
          <p style={{fontSize:'18px'}}>I did my undergraduate studies in the Art and Technology program at Zhejiang University. I have a strong passion for UX design and coding.</p>
          <button>more about me</button>
        </div>
        <div>
          <figure>
            <img src={portrait} />
          </figure>
        </div>
      </Container>
    </section>
  )
}