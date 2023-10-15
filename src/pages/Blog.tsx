import { FunctionComponent, useEffect } from "react";

const Blog: FunctionComponent = () => {
  useEffect(()=>{
    throw new Error(" Error on load");
    
  },[])
  const handleClick = ()=>{
    throw new Error("Error on click-me");
  }
  return (
    <div>
      <h1>Mon blog</h1>
      <button className="button btn" onClick={handleClick}>Click-me</button>
    </div>
  );
};
export default Blog;
