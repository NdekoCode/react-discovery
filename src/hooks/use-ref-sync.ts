import { RefObject, useRef } from "react";

export const useRefSync = <T>(initialValue: T): RefObject<T> => {
  const valueRef = useRef(initialValue);
  valueRef.current = initialValue;
  return valueRef;
};
