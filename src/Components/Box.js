import React from "react";

export default function Box(props) {
  return (
    <div
      className={`box ${props.array.current ? "current" : ""} ${
        props.array.sorted ? "sorted" : "unsorted"
      } `}
      style={{ height: props.array.height + "px" }}
    ></div>
  );
}
