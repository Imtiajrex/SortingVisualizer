import React, { Component } from "react";
import { ArrayContext } from "../contexts/ArrayContext";

export default class TimeSlider extends Component {
  static contextType = ArrayContext;
  constructor() {
    super();
    this.rangeslider = null;
    this.output = null;
  }
  componentDidMount() {
    this.rangeslider = document.getElementById("array_size_range");
    this.output = document.getElementById("array_size");
    this.output.innerHTML = this.rangeslider.value;
  }
  render() {
    const { array_size, setArraySize } = this.context;
    return (
      <>
        <div className="slidecontainer">
          <p>
            Array Size: <span id="array_size"></span>
          </p>
          <input
            type="range"
            min="6"
            max="70"
            className="slider"
            id="array_size_range"
            value={array_size}
            onInput={(e) => {
              setArraySize(e.target.value);
              this.output.innerHTML = e.target.value;
            }}
            disabled={this.props.sorting}
          />
        </div>
      </>
    );
  }
}
