import { ChangeEvent, FunctionComponent, useState } from "react";
type InputTempProsp = {
  name?: string;
};
const TempInput: FunctionComponent<InputTempProsp> = ({ name = "celcius" }) => {
  const [temp, setTemp] = useState<number>(0);
  const handleTempChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    setTemp(+value);
  };
  return (
    <div className="mb-1">
      <label
        htmlFor={`input-label-${name}"`}
        className="block mb-2 text-sm font-medium "
      >
        Température en {name}
      </label>
      <input
        type="number"
        id={`input-label-${name}`}
        className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow outline-none shadow-gray-50 focus:border-blue-500 focus:ring-blue-500 "
        placeholder={`Entrer la température en ${name}`}
        name={`${name}Temp`}
        value={temp}
        onChange={handleTempChange}
      />
    </div>
  );
};
export default TempInput;
