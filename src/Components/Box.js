import React from "react";

export default function Box(props) {
  return (
    <div
      className={`box${props.array.sorted ? " sorted" : " unsorted"}${
        props.array.current ? " current" : ""
      }${props.array.notsure ? " notsure" : ""} `}
      style={{ height: props.array.height + "px" }}
    ></div>
  );
}
