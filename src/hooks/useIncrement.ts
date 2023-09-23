import { useCallback, useState } from "react";

export function useIncrement(
  initialValue: number,
  step: number = 1
): [counter: number, increment: () => void, decrement: () => void] {
  const [count, setCount] = useState(initialValue);
  const increment = useCallback(() => setCount((c) => c + step), [step]);
  const decrement = useCallback(
    () => setCount((c) => (c > step ? c - step : 0)),
    [step]
  );

  return [count, increment, decrement];
}
