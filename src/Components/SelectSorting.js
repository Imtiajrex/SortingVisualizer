import { React, useContext } from "react";
import { ArrayContext } from "../contexts/ArrayContext";

export default function SelectSorting({ sorting }) {
  const { sort_type, setSortType } = useContext(ArrayContext);
  return (
    <div className="select">
      <div
        className="selection"
        style={sorting ? { filter: "brightness(0.4)" } : {}}
      >
        {sort_type === "" ? "Sorting Type..." : sort_type}{" "}
        <i className="fas fa-caret-down"></i>
      </div>
      {!sorting ? (
        <div className="options">
          <div
            className="option"
            onClick={() => {
              setSortType("Bubble Sort");
            }}
          >
            Bubble Sort
          </div>
          <div
            className="option"
            onClick={() => {
              setSortType("Selection Sort");
            }}
          >
            Selection Sort
          </div>
          <div
            className="option"
            onClick={() => {
              setSortType("Insertion Sort");
            }}
          >
            Insertion Sort
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
