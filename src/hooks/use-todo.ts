import { useCallback, useReducer } from "react";

import { TTodo, TTodoAction } from "@/lib/types/generics/todos";

export const todoReducer = (
  state: TTodo[],
  action: { payload: Partial<TTodo> | TTodo; type: TTodoAction }
): TTodo[] => {
  switch (action.type) {
    case "ADD_TODO":
      // Ensure action.payload is a full TTodo object
      return [...state, action.payload as TTodo];
    case "REMOVE_TODO":
      return state.filter(
        (d) => d.id !== (action.payload as Partial<TTodo>).id
      );
    case "UPDATE_TODO":
      return state.map((d) => {
        if (d.id === action.payload.id) {
          return { ...d, ...action.payload };
        }
        return d;
      });
    default:
      throw new Error("Action " + action.type + " est inconnus");
  }
};

export const useTodo = (initialTodos: TTodo[] = []) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const addTodo = useCallback(
    (todo: TTodo) => dispatch({ type: "ADD_TODO", payload: todo }),
    []
  );
  const removeTodo = useCallback(
    (id: number) => dispatch({ type: "REMOVE_TODO", payload: { id } }),
    []
  );
  const updateTodo = useCallback(
    (todo: Partial<TTodo>) => dispatch({ type: "UPDATE_TODO", payload: todo }),
    []
  );
  return { todos, addTodo, removeTodo, updateTodo };
};
