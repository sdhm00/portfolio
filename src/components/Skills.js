import React, { Component } from "react";
import ProgressBar from "../features/PBar";
import * as ReactDOM from "react-dom";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="potion-body">
                <div className={skills.level}></div>
              </div>
              <br />
              <i className={skills.class} style={{ fontSize: "220%" }}>
                <p
                  className="text-center"
                  style={{ fontSize: "30%", marginTop: "4px" }}
                >
                  {skills.name}
                </p>
              </i>
            </span>
          </li>
        );
      });
    }

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
          {/* <div
            style={{
              // marginBottom: "2.2%",
              width: "60%",
              alignItems: "center",
              //backgroundColor: "red",
              margin: "auto auto 50px auto",
            }}
          >
            <h2>
              With Bachelor Science of Chemisty, Jeffrey pocess strong research
              mindset and analytical skillsets. He also enriched his computer
              skills by taking school courses, internship and self-learning.
              During his master study, Jeffrey put mosts effort in financial
              data science and algorithms-related fields, such as algo trading
              and quant research.
            </h2>
          </div> */}
          <div className="col-md-12 text-center">
            {/* <div
              style={{
                position: "absolute",
                left: "100px",
                top: "50px",
                width: "auto",
                height: "auto",
                display: "block",
              }}
            >
              <h1
                style={{
                  font: "Open Sans",
                  fontWeight: "800",
                  textAlign: "center",
                  letterSpacing: "",
                  color: "white",
                }}
              >
                PROFICIENCY
              </h1>
            </div> */}
            <ul className="list-inline mx-auto skill-icon ">{skills}</ul>
          </div>
          <div
            style={{
              width: "60%",
              height: "auto",
              display: "block",
              margin: "auto",
              marginTop: "10px",
            }}
          >
            <h3
              style={{
                font: "Raleway, sans-serif",
                fontWeight: "200",
                textAlign: "center",
                letterSpacing: "",
                color: "white",
              }}
            >
              Others: Linux, Shell Script, Smart Contract, Solidiy, React, App
              Development
              {/* With Bachelor Science of Chemisty, Jeffrey pocess strong research
              mindset and analytical skillsets. He also enriched his computer
              skills by taking school courses, internship and self-learning.
              During his master study, Jeffrey put mosts effort in financial
              data science and algorithms-related fields, such as algo trading
              and quant research. */}
            </h3>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
