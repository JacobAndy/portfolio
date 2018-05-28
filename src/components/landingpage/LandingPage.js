import React, { Component } from "react";
import "./LandingPage.css";
import NavBar from "../navbar/NavBar";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <main className="initial-setup">
        <NavBar />
      </main>
    );
  }
}
export default LandingPage;
