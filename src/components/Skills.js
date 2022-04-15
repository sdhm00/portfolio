import React, { Component } from "react";
import ProgressBar from "../features/PBar";
//import * as ReactDOM from "react-dom/client";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }
    var ReactDOM = require("react-dom/client");

    var pbar = <ProgressBar />;
    var pbar = ReactDOM.creatRoot(document.getElementById("pbar"));

    return (
      <section
        id="skills"
        style={{ height: window.innerHeight - 200, display: "block" }}
      >
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon hover:color-violet-600">
              {skills}
            </ul>
          </div>
        </div>
        <div id="pbar"></div>
      </section>
    );
  }
}

export default Skills;
