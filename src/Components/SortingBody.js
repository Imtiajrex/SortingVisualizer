import React, { useContext } from "react";
import { ArrayContext } from "../contexts/ArrayContext";
import Box from "./Box";

export default function SortingBody() {
  const { array, setArrayVal } = useContext(ArrayContext);
  let arr = array.slice(0);
  for (let i = 1; i <= 30; i++) {
    arr = [
      ...arr,
      {
        height: Math.floor(Math.random() * 500 + 100),
        sorted: false,
        current: false,
      },
    ];
  }
  // eslint-disable-next-line
  React.useEffect(() => setArrayVal(arr), []);
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
