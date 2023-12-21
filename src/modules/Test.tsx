import { useParams } from "react-router";

const Test = () => {
  const params = useParams();

  console.log("params", params);

  return <div>Test</div>;
};

export default Test;
