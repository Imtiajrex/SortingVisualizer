import React, { Component, useContext } from "react";
import { ArrayContext } from "../contexts/ArrayContext";

export default class TimeSlider extends Component {
  static contextType = ArrayContext;
  constructor() {
    super();
    this.rangeslider = null;
    this.output = null;
  }
  componentDidMount() {
    this.rangeslider = document.getElementById("timeRange");
    this.output = document.getElementById("timeOut");
    this.output.innerHTML = this.rangeslider.value + "s";
  }
  render() {
    const { time, setTime } = this.context;
    return (
      <>
        <div className="slidecontainer">
          <p>
            Time: <span id="timeOut"></span>
          </p>
          <input
            type="range"
            min="1"
            max="500"
            className="slider"
            id="timeRange"
            value={time}
            onInput={(e) => {
              setTime(e.target.value);
              this.output.innerHTML = e.target.value + "s";
            }}
            disabled={this.props.sorting}
          />
        </div>
      </>
    );
  }
}
