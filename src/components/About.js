import React, { Component } from "react";
import { Icon } from "@iconify/react";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";

import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";
import profilepic from "../assets/images/mypic4.JPG";
// import profilepic from './src/assets/images/mypic4.JPG';
// /src/assets/images/mypic3.JPG

import Badge from "react-bootstrap/Badge";
import { Balance, Molecule, Window } from "pebble-icons";

class About extends Component {
  getMyIcon(icon) {
    switch (icon) {
      case "finance":
        return <Balance className="character-icon" />;
      case "science":
        return <Molecule className="character-icon" />;
      case "coding":
        return <Window className="character-icon" />;
    }
  }

  render() {
    // if (this.props.sharedBasicInfo) {
    //   // var profilepic = "images/" + this.props.sharedBasicInfo.image;
    //   var profilepic = "/images/myProfile.jpg";
    // }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var intro = this.props.resumeBasicInfo.description_header;
      var passion = this.props.resumeBasicInfo.passions;
      var about = this.props.resumeBasicInfo.description;
    }
    const characteristic = ["coding", "science", "finance"];
    const mainChar = characteristic.map((charc, i) => {
      return (
        <div className="character-container">
          {this.getMyIcon(charc)}
          {/* <div className="characters" key={i}> */}
          {/* <h2
              className="m-auto"
              style={{ display: "inline-flex", height: "10px" }}
            > */}
          <h2 className="characters" key={i}>
            {charc}
          </h2>
          {/* </h2> */}
          {/* </div> */}
        </div>
      );
    });

    return (
      <section
        className="mx-auto"
        id="about"
        style={{
          height: window.innerHeight + 100,
          //width: "90%",
          display: "block",
        }}
      >
        <div style={{ width: "100%" }}>
          <div className="col-md-12">
            <h1 style={{ color: "black", marginBottom: "70px" }}>
              <span>{sectionName}</span>
            </h1>
            <div className="row mx-auto mb-5">
              <div className="col-md-3">
                <div className="pic-container">
                  <img src={profilepic} alt="J. C" />
                  {/* <h3>Missing</h3> */}
                  <div class="overlay">
                    <h2>
                      Welcome <span>!</span>
                    </h2>
                    <p>this is my website</p>
                  </div>
                </div>
                <br />
              </div>
              <div className="col-md-7">
                <div className="col-md-12">
                  <div className="shadow-lg card" style={{ height: "auto" }}>
                    <div className="card-header">
                      <span
                        className="iconify"
                        data-icon="emojione:red-circle"
                        data-inline="false"
                      ></span>{" "}
                      &nbsp;{" "}
                      <span
                        className="iconify"
                        data-icon="twemoji:yellow-circle"
                        data-inline="false"
                      ></span>{" "}
                      &nbsp;{" "}
                      <span
                        className="iconify"
                        data-icon="twemoji:green-circle"
                        data-inline="false"
                      ></span>
                    </div>
                    <div
                      className="card-body font-trebuchet text-justify ml-5 mr-5"
                      style={{
                        height: "auto",
                        fontSize: "100%",
                        lineHeight: "2em",
                        // width: "100%",
                        textAlign: "center",
                        // display: "block",
                      }}
                    >
                      <br />
                      <span className="wave">{intro}, </span>
                      <br />
                      <br />
                      <div className="common-text">{about}</div>
                      <br />
                      <div className="common-text">{passion}</div>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
