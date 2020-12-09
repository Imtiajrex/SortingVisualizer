import { React, useState } from "react";

export default function SelectSorting() {
  const [sorting_type, setSortingType] = useState("");
  return (
    <div className="select">
      <div className="selection">
        {sorting_type === "" ? "Sorting Type..." : sorting_type}{" "}
        <i className="fas fa-caret-down"></i>
      </div>
      <div className="options">
        <div
          className="option"
          onClick={() => {
            setSortingType("Bubble Sort");
          }}
        >
          Bubble Sort
        </div>
        <div
          className="option"
          onClick={() => {
            setSortingType("Selection Sort");
          }}
        >
          Selection Sort
        </div>
        <div
          className="option"
          onClick={() => {
            setSortingType("NoJani Sort");
          }}
        >
          NoJani Sort
        </div>
      </div>
    </div>
  );
}
