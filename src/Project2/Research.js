// components/Research.js
import React from 'react';


const Research = () => {
  return (
    <section id="research2">
      <div className="research2-container">
        <h2 className='research2-h2'>RESEARCH</h2>
        <p className="research2-paragraph">With the research, I want to understand existing problems with Steam mobile app and discover the potential values of a mobile experience for gamers. On the other hand, as views and purchases are 2 important metrics for game developers, I want to zoom into gamers' game discovery and purchasing behaviors. </p>
        <ul className="research2-list">
          <li className="research2-list-item">Do they use Steam mobile? What do they use Steam Mobile for?</li>
          <li className="research2-list-item">Do they use the app to discover and purchase games? Why or why not?</li>
          <li className="research2-list-item">What do they do before buying a game or Downloadable content (DLC) on Steam? How do they make the purchase decision?</li>
          <li className="research2-list-item">What do they use to consume gaming information and learn about a game?</li>
        </ul>
        <p className="research2-paragraph">In order to get the answers to these questions, I distributed surveys to over 50 Steam users and interviewed 4 of them. Later, based on interview findings, I conducted competitive analyses on existing competitors they mention in the pinpointed opportunity area.</p>
        <button class="btn collapse-btn" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-controls="collapseExample">
          Click here to view the detailed research process and results
        </button>
        <div className="collapse" id="collapseExample">
          <div className="card card-body" style={{marginBottom: '20px', borderRadius:'12px'}}>
            <h2 className="research2-header">📊 Survey results</h2>
            <p className="research2-paragraph" style={{marginLeft:'30px'}}>Q1: Have you ever used Steam Mobile?</p>
            <div class="bar" style={{height: '30px'}}>
              <div className="bar-1">No: 35.3%</div>
              <div className="bar-2">Yes: 64.7%</div>
            </div>
            <p className="research2-paragraph" style={{marginLeft:'30px'}}>Q2: Which features of Steam Mobile do you use frequently?</p>
            <div className="bar-container">
              <div className="bar">
                  <div className="bar-text">Purchase games
                    <div className="tip">22.9%</div>
                  </div>
                  <div className="bar-fill" style={{width: '22.9%'}}></div>
              </div>
              <div className="bar">
                  <div className="bar-text">Steam Guard
                    <div className="tip">45.8%</div>
                  </div>
                  <div className="bar-fill" style={{width: '45.8%'}}></div>
              </div>
              <div className="bar">
                  <div className="bar-text">Game community
                    <div className="tip">54.2%</div>
                  </div>
                  <div className="bar-fill" style={{width: '54.2%'}}></div>
              </div>
              <div className="bar">
                  <div className="bar-text">Notifications
                    <div className="tip">34.4%</div>
                  </div>
                  <div className="bar-fill" style={{width: '34.4%'}}></div>
              </div>
              <div className="bar">
                  <div className="bar-text">Game library
                    <div className="tip">23.9%</div>
                  </div>
                  <div className="bar-fill" style={{width: '23.9%'}}></div>
              </div>
            </div>
            <p className="research2-paragraph" style={{marginLeft:'30px'}}>Q3: How do you learn about a game before buying it?</p>
            <div className="bar-container">
              <div className="bar">
                  <div className="bar-text">Steam Srore
                    <div className="tip">33.7%</div>
                  </div>
                  <div className="bar-fill" style={{width: '33.7%'}}></div>
              </div>
              <div className="bar">
                  <div className="bar-text">Steam Community
                    <div className="tip">25.7%</div>
                  </div>
                  <div className="bar-fill" style={{width: '25.7%'}}></div>
              </div>
              <div className="bar">
                  <div className="bar-text">Youtube
                    <div className="tip">21.8%</div>
                  </div>
                  <div className="bar-fill" style={{width: '21.8%'}}></div>
              </div>
              <div className="bar">
                  <div className="bar-text">Xiaohongshu & Bilibli
                    <div className="tip">76.2%</div>
                  </div>
                  <div className="bar-fill" style={{width: '76.2%'}}></div>
              </div>
              <div className="bar">
                  <div className="bar-text">Game official site
                    <div className="tip">13.9%</div>
                  </div>
                  <div className="bar-fill" style={{width: '13.9%'}}></div>
              </div>
              <div className="bar">
                  <div className="bar-text">Friends
                    <div className="tip">33.7%</div>
                  </div>
                  <div className="bar-fill" style={{width: '33.7%'}}></div>
              </div>
            </div>
            <p className="research2-paragraph" style={{marginLeft:'30px'}}>Q4: After buying or downloading a game on Steam, how do you stay updated on it?</p>
            <div className="bar-container">
              <div className="bar">
                  <div className="bar-text">Steam Srore
                    <div className="tip">43.6%</div>
                  </div>
                  <div className="bar-fill" style={{width: '43.6%'}}></div>
              </div>
              <div className="bar">
                  <div className="bar-text">Steam Community
                    <div className="tip">53.5%</div>
                  </div>
                  <div className="bar-fill" style={{width: '53.5%'}}></div>
              </div>
              <div className="bar">
                  <div className="bar-text">Youtube
                    <div className="tip">33.7%</div>
                  </div>
                  <div className="bar-fill" style={{width: '33.7%'}}></div>
              </div>
              <div className="bar">
                  <div className="bar-text">Xiaohongshu & Bilibli
                    <div className="tip">42.6%</div>
                  </div>
                  <div className="bar-fill" style={{width: '42.6%'}}></div>
              </div>
              <div className="bar">
                  <div className="bar-text">Game official site
                    <div className="tip">23.8%</div>
                  </div>
                  <div className="bar-fill" style={{width: '23.8%'}}></div>
              </div>
              <div className="bar">
                  <div className="bar-text">Friends
                    <div className="tip">24.8%</div>
                  </div>
                  <div className="bar-fill" style={{width: '24.8%'}}></div>
              </div>
            </div>
          </div>
          <div className="card card-body" style={{marginBottom: '20px', borderRadius:'12px'}}>
            <h2 className="research2-header">🎙️ Interview</h2>
            <p className="research2-paragraph" style={{marginLeft:'30px'}}>I conducted interviews with four Steam users, and here is what they said.</p>
          </div>
          <div className="card card-body" style={{marginBottom: '20px', borderRadius:'12px'}}>
            <h2 className="research2-header">⚖️ Competitive analyses</h2>
            <p className="research2-paragraph" style={{marginLeft:'30px'}}>based on interview takeaways, I conducted competitive analyses with the platforms users use to discover and purchase games.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;