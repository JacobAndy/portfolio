import React, { Component } from "react";
import "./Skills.css";

//tech skills
import CSss from "./css3-original.svg";
import HTML1 from "./html5-original.svg";
import EXPRESS from "./express-original.svg";
import GITHUB from "./github-original.svg";
import GIT from "./git-plain.svg";
import HEROKU from "./heroku-plain.svg";
import JS from "./javascript-original.svg";
import NODE from "./nodejs.png";
import NPM from "./npm-original-wordmark.svg";
import PSQL from "./postgresql-plain.svg";
import RECTA from "./react-original.svg";
import SLACK from "./slack-original.svg";
import VSCODE from "./visualstudio-plain.svg";
import yarnu from "./yarn-original.svg";
import Redux from './reduxLogo.svg';

import PostMan from './postman.png';
import Cypress from './cypresstest.png';
import Puppeteer from './puppeteer.png';

//Current Studies
import GraphQL from'./GraphQL_Logo.svg.png';
import AWS from './aws-logo.svg'
import FireBase from './firebase-1.svg'
import NextJS from './next-js-logo-.png'
import ReactNative from './react-native-svg.png'

class Skills extends Component {
  state = {};
  render() {
    return (
      <main className="initial-setup testbackground" id="skills">
      
        <section className="skills-holder">
          <h4>Technical Skills</h4>
          <div className="underline" />
          <div className="icon-holder">
          <img onClick={()=>window.location.href = "https://www.getpostman.com/"}
              className="skills-icon"
              src={PostMan}
              width="90px"
              height="90px"
/>
<img onClick={()=>window.location.href = "https://www.cypress.io/"}
              className="skills-icon"
              src={Cypress}
              width="90px"
              height="90px"
/>
<img onClick={()=>window.location.href = "https://github.com/GoogleChrome/puppeteer"}
              className="skills-icon"
              src={Puppeteer}
              width="90px"
              height="90px"
/>



            <img onClick={()=>window.location.href = "https://www.npmjs.com/"} className="skills-icon" src={NPM} width="90px" height="90px" />
            <img onClick={()=>window.location.href = "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3"}
              className="skills-icon"
              src={CSss}
              width="90px"
              height="90px"

            />
            <img onClick={()=>window.location.href = "https://redux.js.org/"}
              className="skills-icon"
              src={Redux}
              width="90px"
              height="90px"
            />
            <img onClick={()=>window.location.href = "https://developer.mozilla.org/en-US/docs/Web/HTML"}
              className="skills-icon"
              src={HTML1}
              width="90px"
              height="90px"
            />
            <img onClick={()=>window.location.href = "https://expressjs.com/"}
              className="skills-icon"
              src={EXPRESS}
              width="90px"
              height="90px"
            />
            <img onClick={()=>window.location.href = "https://github.com/"}
              className="skills-icon"
              src={GITHUB}
              width="90px"
              height="90px"
            />
            <img onClick={()=>window.location.href = "https://git-scm.com/"} className="skills-icon" src={GIT} width="90px" height="90px" />
            <img onClick={()=>window.location.href = "https://www.heroku.com/platform"}
              className="skills-icon"
              src={HEROKU}
              width="90px"
              height="90px"
            />
            <img onClick={()=>window.location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript"} className="skills-icon" src={JS} width="90px" height="90px" />
            <img onClick={()=>window.location.href = "https://nodejs.org/en/"}
              className="skills-icon"
              src={NODE}
              width="90px"
              height="90px"
            />
            <img onClick={()=>window.location.href = "https://www.postgresql.org/"}
              className="skills-icon"
              src={PSQL}
              width="90px"
              height="90px"
            />
            <img onClick={()=>window.location.href = "https://reactjs.org/"}
              className="skills-icon"
              src={RECTA}
              width="90px"
              height="90px"
            />
            <img onClick={()=>window.location.href = "https://slack.com/"}
              className="skills-icon"
              src={SLACK}
              width="90px"
              height="90px"
            />
            <img onClick={()=>window.location.href = "https://code.visualstudio.com/"}
              className="skills-icon"
              src={VSCODE}
              width="90px"
              height="90px"
            />
            <img onClick={()=>window.location.href = "https://yarnpkg.com/en/"}
              className="skills-icon"
              src={yarnu}
              width="90px"
              height="90px"
            />
          </div>
        </section>
        
        <section className="current-studies">
        <h4>Current Studies</h4>
          <div className="underline" id="underline-current-studies" />
          <div className="studies-icon-holder">
          <img onClick={()=>window.location.href = ""}
              className="skills-icon"
              src={GraphQL}
              width="90px"
              height="90px"
/>
<img onClick={()=>window.location.href = "https://facebook.github.io/react-native/"}
              className="skills-icon"
              src={ReactNative}
              width="90px"
              height="90px"
/>
<img onClick={()=>window.location.href = "https://aws.amazon.com/"}
              className="skills-icon"
              src={AWS}
              width="90px"
              height="90px"
/>
<img onClick={()=>window.location.href = "https://firebase.google.com/"}
              className="skills-icon"
              src={FireBase}
              width="90px"
              height="90px"
/>
<img onClick={()=>window.location.href = "https://nextjs.org/"}
              className="skills-icon"
              src={NextJS}
              width="140px"
              height="90px"
/>
</div>
      </section>
      </main>
    );
  }
}
export default Skills;
