import { ChangeEvent, FunctionComponent } from "react";
import { scaleName } from "../utils/constants";
import { ScaleType } from "../utils/types";
type InputTempProsp = {
  name?: string;
  scale: ScaleType;
  onChange: (e: ChangeEvent<HTMLInputElement>, scale: ScaleType) => void;
  temp: number;
};
const TempInput: FunctionComponent<InputTempProsp> = ({
  scale,
  temp,
  onChange,
}) => {
  const name = scaleName[scale].toLowerCase();
  const scaleValue = scaleName[scale];
  return (
    <div className="mb-1">
      <label
        htmlFor={`input-label-${name}`}
        className="block mb-2 text-sm font-medium "
      >
        Température (en {scaleValue})
      </label>
      <input
        type="number"
        id={`input-label-${name}`}
        className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow outline-none shadow-gray-50 focus:border-blue-500 focus:ring-blue-500 "
        placeholder={`Entrer la température en ${scaleValue}`}
        name={`${name}Temp`}
        value={temp}
        onChange={(e) => onChange(e, scale)}
      />
    </div>
  );
};
export default TempInput;
