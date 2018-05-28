import React, { Component } from "react";
import "./App.css";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

class App extends Component {
  render() {
    return (
      <div className="all-web-holder">
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
