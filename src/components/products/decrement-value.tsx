import React, { ChangeEvent, useEffect, useState } from "react";

const DecrementValue = () => {
  const [count, setCount] = useState(10);
  const valueToShow = count >= 0 ? count : 0; // Valeur deriver, qui changera a chaque fois que `count` change
  const decrement = (timer: NodeJS.Timeout) => {
    console.log("Decrement");
    if (count > 0) {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }

        return prev - 1;
      });
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
  };
  useEffect(() => {
    const timer = setInterval(() => decrement(timer), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <p>
        Count:
        <span className="font-bold">{count}</span>
      </p>
      <div className="w-full">
        <input
          type="text"
          name="searchForm"
          className="bg-gray-50 border py-2 px-3 rounded w-full border-gray-200 shadow shadow-gray-100"
          placeholder="Enter a value"
          value={valueToShow}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default DecrementValue;
