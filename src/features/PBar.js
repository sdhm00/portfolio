import React, { ReactDOM } from "react";
class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.firstDayOfYear = new Date(new Date().getFullYear(), 0, 1).getTime();
    this.firstDayOfNextYear = new Date(
      new Date().getFullYear() + 1,
      0,
      1
    ).getTime();
  }

  getProgress() {
    const now = new Date().getTime();
    return Math.round(
      ((now - this.firstDayOfYear) /
        (this.firstDayOfNextYear - this.firstDayOfYear)) *
        100
    );
  }

  render() {
    const progress = this.getProgress();
    return (
      <div className="container">
        <h1>Year progress</h1>
        <div className="progressbar-container">
          <div
            className="progressbar-complete"
            style={{ width: `${progress}%` }}
          >
            <div className="progressbar-liquid"></div>
          </div>
          <span className="progress">{progress}%</span>
        </div>
      </div>
    );
  }
}
//ReactDOM.render(<ProgressBar />, document.getElementById("app"));
export default ProgressBar;
