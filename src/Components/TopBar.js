import { React, useContext, useState } from "react";
import { ArrayContext } from "../contexts/ArrayContext";
import SelectSorting from "./SelectSorting";
import BubbleSort from "./sorting/BubbleSort";
import TimeSlider from "./TimeSlider";

export default function TopBar() {
  const { array, setArrayVal, time } = useContext(ArrayContext);
  const [sorting, setSorting] = useState(false);
  let Sort = () => {
    setSorting(true);
    BubbleSort(array, setArrayVal, time).then(() => {
      setSorting(false);
    });
  };
  return (
    <div className="top-bar">
      <SelectSorting />
      <TimeSlider sorting={sorting} />
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
