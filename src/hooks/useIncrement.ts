import { useCallback, useEffect, useState } from "react";

export function useIncrement(
  initialValue: number = 0,
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
export function useAutoIncrement(
  initialValue: number = 0,
  step: number = 1
): [counter: number, increment: () => void, decrement: () => void] {
  const [count, increment, decrement] = useIncrement(initialValue, step);
  useEffect(() => {
    console.log("increment");
    const timer = window.setInterval(increment, 1000);
    return () => window.clearInterval(timer);
  }, [increment]);
  return [count, increment, decrement];
}
