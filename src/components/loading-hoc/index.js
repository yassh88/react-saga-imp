import React from "react";

const LoadingHOC = (WrapperComponent, isLoading) => {
  return class extends React.Component {
    render() {
      if (isLoading) {
        return <div> Loading ....</div>;
      } else {
        return <WrapperComponent />;
      }
    }
  };
};

export default LoadingHOC;
