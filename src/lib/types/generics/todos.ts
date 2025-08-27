export type TTodo = {
  id?: number;
  title: string;
  description?: string;
  isDone?: boolean;
};
export type TTodoAction = "ADD_TODO" | "REMOVE_TODO" | "UPDATE_TODO";
