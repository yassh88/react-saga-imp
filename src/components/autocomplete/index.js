import { useCallback, useState } from "react";
import React from "react";

const AutoComplete = (init) => {
  const arrayValues = [
    "Yashwant",
    "Yash",
    "Annu",
    "Sakashi",
    "Krishna",
    "Mina",
    "Madhuri",
    "Sarita",
    "Puja",
  ];
  const [value, setValues] = useState("");

  const onChangeHandler = (e) => setValues(e.target.value);
  const getFilteredArray = () =>
    arrayValues.filter((str) => value && str.includes(value));

  const renderSuggestions = useCallback(() => {
    const filteredData = getFilteredArray();
    return filteredData.map((val) => (
      <div onClick={() => setValues(val)}>{val}</div>
    ));
  }, [value]);

  return (
    <>
      <input value={value} onChange={onChangeHandler}></input>
      {renderSuggestions()}
    </>
  );
};

export default AutoComplete;
