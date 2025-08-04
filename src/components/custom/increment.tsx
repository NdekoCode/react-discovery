import { useState } from "react";

export const Increment = () => {
  const [count, setCount] = useState(0);
  console.log("Render");
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="px-4 py-2 rounded bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600"
      >
        {count}
      </button>
    </div>
  );
};
