import { ChangeEvent } from "react";

import { useTodo } from "@/hooks/use-todo";
import { todos as todosData } from "@/lib/data/todos";
import { TTodo } from "@/lib/types/generics/todos";

const Todos = () => {
  const { todos, updateTodo, removeTodo } = useTodo(todosData);
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>, todo: TTodo) => {
    const value =
      e.target instanceof HTMLInputElement &&
      e.target.type === "checkbox" &&
      e.target.checked;
    updateTodo({ ...todo, isDone: !!value });
  };
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      {JSON.stringify(todos, null, 2)}
      <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase">
          To-Do List
        </h1>
      </div>
      <form className="w-full max-w-sm mx-auto px-4 py-2">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Add a task"
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Add
          </button>
        </div>
      </form>
      {todos.length > 0 && (
        <ul className="divide-y divide-gray-200 px-4">
          {todos.map((todo) => (
            <li className="py-4" key={todo.id}>
              <div className="flex items-center gap-2 w-full">
                <input
                  id={"todo-" + todo.id}
                  name={"todo-" + todo.id}
                  type="checkbox"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  onChange={(e) => handleClick(e, todo)}
                />
                <label
                  htmlFor={"todo-" + todo.id}
                  className="ml-3 block text-gray-900"
                >
                  <span className="text-lg font-medium">{todo.title}</span>
                </label>
                <div className="ml-auto flex items-center gap-2">
                  <button
                    className="cursor-pointer ml-auto"
                    onClick={() => removeTodo(todo.id!)}
                  >
                    x
                  </button>

                  <button
                    className="cursor-pointer ml-auto"
                    onClick={() => removeTodo(todo.id!)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
