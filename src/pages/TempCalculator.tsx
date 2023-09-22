import { ChangeEvent, FunctionComponent, useState } from "react";
import TempState from "../components/TempState";
import { tempConverter } from "../utils/constants";
import { ScaleType } from "../utils/types";
import TempInput from "./TempInput";

const TempCalculator: FunctionComponent = () => {
  const [state, setState] = useState<{ temp: number; scale: ScaleType }>({
    temp: 0,
    scale: "c",
  });
  const { temp, scale } = state;
  // Si l'echelle est en celcius alors renvois moi juste la température sinon convertis la temperature de fahrenheit en celcius
  const celcius = scale === "c" ? temp : tempConverter(temp, "c");
  //   Si l'echelle est en farhenheit alors renvois moi juste la temperature sinon convertis la temperature de celcius en fahrenheit
  const fahrenheit = scale === "f" ? temp : tempConverter(temp, "f");
  const handleTempChange = (
    e: ChangeEvent<HTMLInputElement>,
    scale: ScaleType
  ) => {
    const value = +e.target.value;
    console.log(value, scale);
    setState((state) => ({ ...state, scale, temp: value }));
  };
  return (
    <>
      <TempState celcius={temp} />
      <form className="my-3">
        <TempInput scale="c" onChange={handleTempChange} temp={celcius} />
        <TempInput scale="f" onChange={handleTempChange} temp={fahrenheit} />
      </form>
    </>
  );
};
export default TempCalculator;
