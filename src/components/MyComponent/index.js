import { render } from "@testing-library/react";
import React from "react";

class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = { name: "Yashenat" };
  }
  render() {
    return (
      <>
        <div>
          <h1>{this.state.name}</h1>
        </div>
      </>
    );
  }
}
export default MyComponent;
