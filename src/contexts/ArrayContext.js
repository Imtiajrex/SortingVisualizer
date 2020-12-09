import React, { createContext, useState } from "react";
export const ArrayContext = createContext();

function ArrayContextProvider(props) {
  const [array, setArray] = useState([]);
  const [time, setTime] = useState(50);
  let setArrayVal = (val) => {
    setArray([...val]);
  };
  return (
    <ArrayContext.Provider value={{ array, setArrayVal, time, setTime }}>
      {props.children}
    </ArrayContext.Provider>
  );
}
export default ArrayContextProvider;
