import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import Aboutcomponent from "./components/About";
import { Footer } from "./components/Footer";
import Project1Component from "./Project1/Project1";
import Project2Component from "./Project2/Project2";
import Project3Component from "./Project3/Project3";
import AlipayStock from "./AlipayStock/AlipayStock";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/alipaystock" element={<AlipayStock />} />
        </Routes>
      </div>
    </Router>
  );
}

function Homepage() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Projects />
      <Footer />
    </div>
  )
}

function About() {
  return (
    <div>
      <Aboutcomponent />
    </div>
  )
}

function Project1() {
  return (
    <div>
      <Project1Component />
    </div>
  )
  }

function Project2() {
  return (
    <div>
      <Project2Component />
    </div>
  )
  }

  function Project3() {
    return (
      <div>
        <Project3Component />
      </div>
    )
  }

export default App;