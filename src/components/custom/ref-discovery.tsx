import React, { useEffect, useRef, useState } from "react";

const RefDiscovery = () => {
  const prefixRef = useRef("");
  const [prefix, setPrefix] = useState("");
  console.log("Render");
  prefixRef.current = prefix;
  //   prefixRef.current = prefix;
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(prefixRef.current);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <input
        className="border border-gray-200 px-3 py-2 rounded"
        value={prefix}
        onChange={(e) => setPrefix(e.target.value)}
      />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quia,
        ducimus consectetur fuga ipsum recusandae reprehenderit minus nisi
        voluptates consequatur facilis sint tempora expedita labore non
        inventore aliquam numquam cupiditate.
      </p>
    </div>
  );
};

export default RefDiscovery;
