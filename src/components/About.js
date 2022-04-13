import React, { Component } from "react";
import { Icon } from "@iconify/react";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";

import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";
import profilepic from "../assets/images/myProfile.jpg";
import Badge from "react-bootstrap/Badge";
import { BiTrendingUp } from "react-icons/bi";

class About extends Component {
  render() {
    // if (this.props.sharedBasicInfo) {
    //   // var profilepic = "images/" + this.props.sharedBasicInfo.image;
    //   var profilepic = "/images/myProfile.jpg";
    // }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }
    const characteristic = ["finance", "science", "coding"];
    const mainChar = characteristic.map((charc, i) => {
      return (
        <div>
          <Badge circle className="main-badge mr-2 mb-2" key={i}>
            {charc}
          </Badge>
          <BiTrendingUp />
        </div>
      );
    });

    return (
      <section
        id="about"
        style={{ height: window.innerHeight - 150, display: "block" }}
      >
        <div className="col-md-12">
          <h1 style={{ color: "black", marginBottom: "50px" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-1" style={{ backgroundColor: "red" }}>
              {mainChar}
              {/* <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="350px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={angularIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={vueIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div> */}
            </div>

            <div className="col-md-7">
              <div className="col-md-10">
                <div className="card">
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
                      height: "30vh",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} </span>
                    <br />
                    <br />
                    {about}
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
