import { MouseEvent, useState } from "react";
type toggleType = (
  value?: null | MouseEvent<HTMLButtonElement> | undefined
) => void;
export function useToggle(): [boolean, (value?: null) => void] {
  const [isActive, setIsToggle] = useState(false);
  const toggle: toggleType = (value = null) => {
    if (value && typeof value === "boolean") {
      setIsToggle(value);
    } else {
      setIsToggle((t) => !t);
    }
  };
  return [isActive, toggle];
}
