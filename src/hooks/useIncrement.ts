import { useCallback, useEffect, useReducer } from "react";
import { CounterState, ReducerType } from "../utils/types";
const counterReducer = (state: CounterState, action: ReducerType) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return {
        ...state,
        count: state.count > state.step ? state.count - state.step : 0,
      };
    default:
      throw new Error("L'action " + action.type + " n'est pas reconnus");
  }
};
export function useIncrement(
  initialValue: number = 0,
  step: number = 1
): [counter: number, increment: () => void, decrement: () => void] {
  const [state, dispatch] = useReducer(counterReducer, {
    count: initialValue,
    step,
  });
  const increment = useCallback(() => dispatch({ type: "increment" }), []);
  const decrement = useCallback(() => dispatch({ type: "decrement" }), []);

  return [state.count, increment, decrement];
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
