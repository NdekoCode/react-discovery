import { useEffect, useState } from "react";

import { useCounter } from "@/hooks/use-counter";

export const Increment = () => {
  const { count, increment } = useCounter(0);
  const { count: counter, decrement } = useCounter(5);
  console.log("Render");
  const handleClick = () => {
    increment();
  };
  useEffect(() => {
    window.document.title = "Counter number " + count;
    console.log("Render on loading");
  }, [count]);
  return (
    <div className="flex gap-3">
      <button
        onClick={handleClick}
        className="px-4 py-2 rounded bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600"
      >
        {count}
      </button>

      <button
        onClick={() => decrement(2)}
        className="px-4 py-2 rounded bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600"
      >
        {counter}
      </button>
    </div>
  );
};
