import { useState } from "react";

export const useToggle = () => {
  const [isCheck, setIsCheck] = useState(false);
  const handleCheck = () => setIsCheck((v) => !v);
  return [isCheck, handleCheck];
};
