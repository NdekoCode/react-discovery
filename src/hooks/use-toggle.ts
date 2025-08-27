import { useState } from "react";

export const useToggle = (): [boolean, () => void] => {
  const [isCheck, setIsCheck] = useState(false);
  const handleCheck = () => setIsCheck((v) => !v);
  return [isCheck, handleCheck];
};
