import React, { Component } from "react";
import "./App.css";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import LandingPage from "./components/landingpage/LandingPage";
import Skills from "./components/skills/Skills";

class App extends Component {
  render() {
    return (
      <div className="all-web-holder">
        <LandingPage />
        <Skills />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
