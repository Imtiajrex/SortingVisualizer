import React, { useContext, useEffect } from "react";
import { ArrayContext } from "../contexts/ArrayContext";
import Box from "./Box";

export default function SortingBody() {
  const { array, setArrayVal, array_size } = useContext(ArrayContext);
  function createArray() {
    let arr = [];
    for (let i = 1; i <= array_size; i++) {
      arr = [
        ...arr,
        {
          height: Math.floor(Math.random() * 500 + 100),
          sorted: false,
          current: false,
          notsure: false,
        },
      ];
    }
    return arr;
  }
  // eslint-disable-next-line
  useEffect(() => {
    // eslint-disable-next-line
    setArrayVal(createArray());
  }, [array_size]);
  return (
    <div className="sorting-body">
      <div className="boxes">
        {array.map((element, index) => {
          return <Box array={element} key={index} />;
        })}
      </div>
    </div>
  );
}
