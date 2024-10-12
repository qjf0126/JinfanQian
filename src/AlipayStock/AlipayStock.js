import React from 'react';
import finalDesignPDF from './img/FinalDesign.pdf';
import './AlipayStock.css';
import TopBar from './TopBar';

class AlipayStock extends React.Component {
  render() {
    return (
      <div className="alipay-stock-container">
        <TopBar />
        <div className="content-section">
          <div className="text-section">
            <h1>Alipay stock mini-program investment education system design</h1>
            <p>
              Alibaba Group & Zhejiang University "Advanced Engineering Psychology" joint teaching project <br />
              Timeline: May 2023 - July 2023 <br />
              Team: Ruqin Li, Enjie Xu, Hongyue Liu, Jinfan Qian, Xuanpei Xu <br />
              My Role: Interview | Prototyping | UI Design <br />
            </p>
            <aside className="Sidebar">
              <button>Research</button>
              <button>UI Design</button>
              <button>Prototyping</button>
              <button>Teamwork</button>
            </aside>
          </div>
          <div className="pdf-section">
            <iframe
              src={finalDesignPDF}
              width="100%"
              height="600px"
              title="PDF Viewer"
            ></iframe>
          </div>
          <div className="footer-section">
            <p>
              <strong>Student Research Training Project (SRTP)</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AlipayStock;

