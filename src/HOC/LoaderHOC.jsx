import React from "react";
import Spinner from "../components/Spinner";

const LoaderHOC = Component => {
  return function LoaderHOC(props) {
    const { isLoading } = props;
    return isLoading ? <Spinner /> : <Component {...props} />;
  };
};

export default LoaderHOC;
