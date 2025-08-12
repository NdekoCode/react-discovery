import {
  FC,
  memo,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";

import { wait } from "@/utils/helpers";

const encodeNumber = (value: number) => {
  wait(3000);
  const timestamp = Date.now().toString(36);
  const random = Math.floor(Math.random() * value).toString(36); // base-36 random

  return (timestamp + random).substring(0, 16); // trim to desired length
};
export const Button: FC<
  PropsWithChildren<{
    handleClick: () => void;
  }>
> = memo(function ({ handleClick, children }) {
  console.log("Button render");
  return (
    <div className="my-1">
      <button
        className="px-4 py-2 rounded bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600"
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
});
export function Encode() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);
  const handleChange = () => {
    setValue((v) => v + 1);
  };
  //   Dès que le number dans [number] change on reéxecute la fonction
  const encoded = useMemo(() => encodeNumber(value), [value]);
  const handleClick = useCallback(() => {
    handleChange();
    console.log("Bonjour");
  }, []);
  console.log("Encoded render", encoded);
  return (
    <div>
      <Button handleClick={handleClick}>Encode</Button>
      <div>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-4 py-2 rounded bg-green-500 text-white transition-all duration-300 hover:bg-green-600"
        >
          Incrementer {count}
        </button>
      </div>
      {encoded}
      <br />
      {value}
    </div>
  );
}
