import React, { createContext, useState } from "react";
export const ArrayContext = createContext();

function ArrayContextProvider(props) {
  const [array, setArray] = useState([]);
  const [time, setTime] = useState(10);
  const [array_size, setArraySize] = useState(50);
  const [sort_type, setSortType] = useState("");
  let setArrayVal = (val) => {
    setArray([...val]);
  };
  return (
    <ArrayContext.Provider
      value={{
        array,
        setArrayVal,
        time,
        setTime,
        array_size,
        setArraySize,
        sort_type,
        setSortType,
      }}
    >
      {props.children}
    </ArrayContext.Provider>
  );
}
export default ArrayContextProvider;
