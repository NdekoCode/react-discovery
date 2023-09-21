import { FunctionComponent } from "react";
import TempState from "../components/TempState";
import TempCalculator from "./TempCalculator";

const TemperatureConverter: FunctionComponent = () => {
  return (
    <div>
      <TempState celcius={100} />
      <TempCalculator />
    </div>
  );
};
export default TemperatureConverter;
