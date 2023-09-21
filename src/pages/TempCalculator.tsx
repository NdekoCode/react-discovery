import { FunctionComponent, useState } from "react";
import TempInput from "./TempInput";

const TempCalculator: FunctionComponent = () => {
  const [temp, setTemp] = useState<number>(0);
  return (
    <form className="my-3">
      <TempInput name="celcius" />
      <TempInput name="fahrenheit" />
    </form>
  );
};
export default TempCalculator;
