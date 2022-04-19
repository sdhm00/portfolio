import React, { Component, useState } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col, Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const AccordionM = ({}) => {
  const [isActive, setIsActive] = useState(false);

  return <div></div>;
};

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "+",
    };
  }

  render() {
    if (this.props.resumeEducation && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.education;
      var school = this.props.resumeEducation.map(function (edu, i) {
        return (
          <Fade bottom cascade>
            <div
              //className={activeId == "0" ? "servie-active" : "service_ py-4"}
              className="servie_ py-4"
              key={i}
            >
              <Accordion defaultActiveKey="0">
                <div className="panel-header">
                  <Accordion.Toggle
                    //onClick={this.toggleActive("0")}
                    eventKey="0"
                    className="panel-toggle"
                    variant="link"
                  >
                    <h2 className="service__title">{edu.school}</h2>
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey={edu.eventKey}>
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <h4 className="service_desc">{edu.degree}</h4>
                      </div>
                      <div className="col-8">
                        <h3 className="common-text">{edu.coursework}</h3>
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </Accordion>
            </div>
          </Fade>
          // <li className="list-inline-item mx-3" key={i}>
          //   <p
          //     className="text-center"
          //     style={{ fontSize: "30%", marginTop: "4px" }}
          //   >
          //     {edu.school}
          //   </p>
          // </li>
        );
      });
    }

    return (
      <section
        id="edu"
        style={{ height: window.innerHeight, display: "block" }}
      >
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              {sectionName}
            </h1>
          </div>
          <div
            style={{
              //justifySelf: "center",
              width: "60%",
              height: "auto",
              display: "block",
              //backgroundColor: "red",
              margin: "auto",
            }}
          >
            <h3
              style={{
                font: "Raleway, sans-serif",
                fontWeight: "200",
                textAlign: "center",
                color: "black",
              }}
            >
              With Bachelor Science of Chemisty, Jeffrey pocess strong research
              mindset and analytical skillsets. He also enriched his computer
              skills by taking school courses, internship and self-learning.
              During his master study, Jeffrey put mosts effort in financial
              data science and algorithms-related fields, such as algo trading
              and quant research.
            </h3>
          </div>
          <br />
          <div>
            <Container className="About-header">
              {/* <Helmet>
                <meta charSet="utf-8" />
                <title> About | me</title>
                <meta name="description" content={"asdf"} />
              </Helmet> */}

              <Row className="sec_sp">
                <Col lg="12">
                  {school}
                  {/* {this.props.resumeEducation.map((data, i) => {
                    return (
                      <div className="service_ py-4" key={i}>
                        <h5 className="service__title">{data.school}</h5>
                        <p className="service_desc">{"data.description"}</p>
                      </div>
                    );
                  })} */}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
