import { FunctionComponent } from "react";
import TempState from "../components/TempState";

const TemperatureConverter: FunctionComponent = () => {
  return (
    <div>
      <TempState celcius={100} />
    </div>
  );
};
export default TemperatureConverter;
