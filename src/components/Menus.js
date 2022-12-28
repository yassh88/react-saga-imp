import "../App.css";
import React from "react";
import styled from "styled-components";
import dummyData from "../dummy.js";
import { useState } from "react";

function Menus() {
  const Title = styled.div`
    font-size: 1em;
    text-align: center;
    color: ${(props) =>
      props.inputColor ? props.inputColor : "palevioletred"};
  `;

  const SubItemTitle = styled.div`
    font-size: 1em;
    text-align: center;
    color: ${(props) => (props.isRed ? "red" : "blue")};
  `;
  const [arrayToHide, setArrayToHide] = useState(["component"]);
  //

  const handleOnDivClick = (name) => {
    if (arrayToHide.includes(name)) {
      setArrayToHide(arrayToHide.filter((elem) => elem !== name));
    } else {
      setArrayToHide(arrayToHide.concat([name]));
    }
  };
  const renderJson = (data) => {
    const uiArray = [];
    data.forEach((elem) => {
      if (elem.isFolder) {
        uiArray.push(
          <div key={elem.name} onClick={() => handleOnDivClick(elem.name)}>
            <Title inputColor="green">{elem.name}</Title>
          </div>
        );
        if (!arrayToHide.includes(elem.name)) {
          uiArray.push(renderJson(elem.content));
        }
      } else {
        uiArray.push(
          <div key={elem.name}>
            <SubItemTitle>{elem.name}</SubItemTitle>
          </div>
        );
      }
    });
    return uiArray;
  };
  return <div className="App">{dummyData.length && renderJson(dummyData)}</div>;
}

export default Menus;
