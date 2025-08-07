import { useEffect, useRef } from "react";

export const ControlledInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleChange = () => {
    console.log("Value", inputRef.current?.value);
  };
  console.log("Render controlled input");
  useEffect(() => {
    console.log(inputRef);
  });
  return (
    <div className="flex gap-3 flex-col">
      <input
        placeholder="Enter a F... value"
        className="px-4 py-2 rounded border border-gray-200 shadow shadow-gray-100 transition-all duration-300"
        ref={inputRef}
        onChange={handleChange}
      />
    </div>
  );
};
