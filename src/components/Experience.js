import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: "#d0bdf4",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fas fa-briefcase experience-icon"></i>}
            key={i}
          >

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {work.company}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {work.title}
            </h4>
            <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
            <br/>
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {mainTech}
            </div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#8458B3",
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

export default Experience;
// import React, { Component } from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import Badge from "react-bootstrap/Badge";

// class Experience extends Component {
//   render() {
//     if (this.props.resumeExperience && this.props.resumeBasicInfo) {
//       var sectionName = this.props.resumeBasicInfo.section_name.experience;
//       var work = this.props.resumeExperience.map(function (work, i) {
//         const mainTechnologies = work.mainTech;
//         const technologies = work.technologies;

//         var mainTech = mainTechnologies.map((technology, i) => {
//           return (
//             <Badge pill className="main-badge mr-2 mb-2" key={i}>
//               {technology}
//             </Badge>
//           );
//         });
//         var tech = technologies.map((experience, i) => {
//           return (
//             <Badge pill className="experience-badge mr-2 mb-2" key={i}>
//               {experience}
//             </Badge>
//             // <div className="bullet-point">
//             //   <h4>{experience}</h4>
//             // </div>
//           );
//         });
//         return (
//           <VerticalTimelineElement
//             className="vertical-timeline-element--education"
//             iconStyle={{
//               background: "#584b53",
//               color: "#fff",
//               textAlign: "center",
//             }}
//             icon={<i className="fas fa-briefcase experience-icon"></i>}
//             key={i}
//             contentStyle={{
//               height: "30vh",
//               //marginBlock: "0px",
//             }}
//             //intersectionObserverProps={{ rootMargin: "20px 0px 0px 0px" }}
//           >
//             <h3
//               className="vertical-timeline-element-title"
//               style={{
//                 textAlign: "left",
//                 fontFamily: "Georgia, Raleway, sans-serif",
//                 fontWeight: "bolder",
//               }}
//             >
//               {work.title}
//             </h3>
//             <h4
//               className="vertical-timeline-element-subtitle"
//               style={{
//                 textAlign: "left",
//                 fontFamily: "Georgia",
//                 fontWeight: "medium",
//               }}
//             >
//               @{work.company}
//             </h4>
//             <br />
//             <h2
//               className="common-text"
//               style={{ textAlign: "left", margin: "auto" }}
//             >
//               {work.years}
//             </h2>

//             {tech}
//           </VerticalTimelineElement>
//         );
//       });
//     }

//     return (
//       <section
//         id="resume"
//         className="pb-5"
//         style={{
//           height: window.innerHeight * 3,
//           display: "block",
//         }}
//       >
//         <div className="col-md-12 mx-auto">
//           <div className="col-md-12">
//             <h1 className="section-title" style={{ color: "#000" }}>
//               <span style={{ textAlign: "center" }}>{sectionName}</span>
//             </h1>
//           </div>
//         </div>
//         <div
//           className="col-md-8 mx-auto"
//           //style={{ marginTop: "2%", marginBottom: "5%" }}
//         >
//           <VerticalTimeline layout={"1-column-left"} lineColor={"#584b53"}>
//             {work}
//             <VerticalTimelineElement
//               iconStyle={{
//                 //background: "#949398FF",
//                 // color: "#fff",
//                 textAlign: "center",
//               }}
//               icon={
//                 <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
//               }
//             />
//           </VerticalTimeline>
//         </div>
//       </section>
//     );
//   }
// }

// export default Experience;
