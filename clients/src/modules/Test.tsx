import React from "react";
import { useParams } from "react-router";

type Props = {};

const Test = (props: Props) => {
  const params = useParams();

  console.log("params", params);

  return <div>Test</div>;
};

export default Test;
