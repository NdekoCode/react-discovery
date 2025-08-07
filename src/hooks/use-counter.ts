import { useReducer } from "react";

const compterReducer = (
  state: number,
  action: { type: string; step: number } = { type: "", step: 1 }
) => {
  switch (action.type) {
    case "increment":
      return state + action.step;
    case "decrement":
      if (state <= 0) {
        return state;
      }
      if (state - action.step >= 0) {
        return state - action.step;
      }
      return state - 1;
    default:
      throw new Error("Action " + action.type + " est inconnus");
  }
};
export const useCounter = (initialValue: number) => {
  const [count, dispatcher] = useReducer(compterReducer, initialValue);
  const increment = (step: number = 1) => {
    dispatcher({ type: "increment", step });
  };
  const decrement = (step: number = -1) => {
    dispatcher({ type: "decrement", step });
  };
  return {
    count,
    increment,
    decrement,
  };
};
