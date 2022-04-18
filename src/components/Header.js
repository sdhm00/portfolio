import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import profilepic from "../assets/images/mypic4.JPG";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return (
          <Typical className="title-styles" steps={this.titles} loop={50} />
        );
      },
      (props, prevProp) => true
    );

    return (
      <header
        id="home"
        style={{ height: window.innerHeight, display: "block" }}
      >
        <div className="row aligner" style={{ height: "100%" }}>
          <div className="col-md-12">
            <div>
              {/* laptop icon */}
              {/* <span
                className="iconify header-icon"
                data-icon="logos:codersrank"
                data-inline="false"
              ></span> */}
              <div className="profile-pic-container">
                <img
                  className="profile-img"
                  //width="350px"
                  src={profilepic}
                  alt="Avatar placeholder"
                />
              </div>
              <h3 className="mb-0" style={{ height: "50px" }}>
                <Typical
                  className="title-sub-intro"
                  steps={["Welcome!", 1500, "my name is"]}
                  wrapper="p"
                />
              </h3>
              <h1 className="mb-0">
                <Typical className="title-name" steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#656c7e"
                onColor="#f8e479"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="emojione-v1:first-quarter-moon-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 28,
                      textAlign: "end",
                      marginLeft: "16px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:sun"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
