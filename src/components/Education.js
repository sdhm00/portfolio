import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Education extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const mainTechnologies = work.mainTech;
        const technologies = work.technologies;

        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        var tech = technologies.map((experience, i) => {
          return (
            // <Badge pill className="experience-badge mr-2 mb-2" key={i}>
            //   {technology}
            // </Badge>
            <div className="bullet-point">{experience}</div>
          );
        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            contentStyle={{ backgroundColor: "#FEF5EF" }}
            iconStyle={{
              background: "#584b53",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fab fa-angular experience-icon"></i>}
            key={i}
          >
            {/* <div
              style={{
                textAlign: "left",
                marginBottom: "4px",
                fontFamily: "Georgia",
              }}
            >
              {mainTech}
            </div> */}

            <h3
              className="vertical-timeline-element-title"
              style={{
                textAlign: "left",
                fontFamily: "Raleway, sans-serif",
                fontWeight: "bolder",
              }}
            >
              {work.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{
                textAlign: "left",
                fontFamily: "Georgia",
                fontWeight: "bold",
              }}
            >
              @{work.company}
            </h4>
            <div
              style={{
                textAlign: "left",
                marginTop: "15px",
                marginBottom: "5px",
              }}
            >
              {tech}
            </div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section
        id="resume"
        className="pb-5"
        style={{
          height: window.innerHeight * 1.8,
          display: "block",
          backgroundColor: "#D6E3F8",
        }}
      >
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "#000" }}>
              <span style={{ textAlign: "center" }}>{sectionName}</span>
            </h1>
          </div>
        </div>
        <div
          className="col-md-8 mx-auto"
          style={{ marginTop: "2%", marginBottom: "5%" }}
        >
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#949398FF",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Education;
