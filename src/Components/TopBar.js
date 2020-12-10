import { React, useContext, useState } from "react";
import { ArrayContext } from "../contexts/ArrayContext";
import SelectSorting from "./SelectSorting";
import BubbleSort from "./sorting/BubbleSort";
import TimeSlider from "./TimeSlider";
import ArraySizeSlider from "./ArraySizeSlider";
import SelectionSort from "./sorting/SelectionSort";
import InsertionSort from "./sorting/InsertionSort";

export default function TopBar() {
  const { array, setArrayVal, time, sort_type } = useContext(ArrayContext);
  const [sorting, setSorting] = useState(false);
  const [sorted, setSorted] = useState(false);
  let Sort = () => {
    setSorting(true);
    if (!sorted) {
      switch (sort_type) {
        case "":
          alert("Select A Sorting Algorithm");
          setSorting(false);
          break;
        case "Bubble Sort":
          BubbleSort(array, setArrayVal, time).then(() => {
            setSorting(false);
            setSorted(true);
          });
          break;
        case "Selection Sort":
          SelectionSort(array, setArrayVal, time).then(() => {
            setSorting(false);
            setSorted(true);
          });
          break;
        case "Insertion Sort":
          InsertionSort(array, setArrayVal, time).then(() => {
            setSorting(false);
            setSorted(true);
          });
          break;
      }
    }
  };
  return (
    <div className="top-bar">
      <SelectSorting sorting={sorting} />
      <TimeSlider sorting={sorting} />
      <ArraySizeSlider sorting={sorting} />
      <button
        className="sort-button"
        onClick={() => {
          Sort();
        }}
        disabled={sorting}
      >
        Sort
      </button>
    </div>
  );
}
