import { useArray } from "./custom-hook/useArray";
import React from "react";
const CoustomHookArray = () => {
  const arrObj = useArray(["a", "b", "c"]);

  console.log(arrObj);

  return (
    <>
      <br />
      <div style={{ display: "flex", "justify-content": "space-around" }}>
        {arrObj.value.map((a) => (
          <div>{a}</div>
        ))}
      </div>
      <div style={{ display: "flex", "justify-content": "space-around" }}>
        <button onClick={() => arrObj.addValue("d")}> Add Value </button>
        <button onClick={() => arrObj.removeByIndex(0)}>
          {" "}
          Delete By Index 1{" "}
        </button>
        <button onClick={() => arrObj.removeValue("d")}> delete value d</button>
      </div>
    </>
  );
};

export default CoustomHookArray;
