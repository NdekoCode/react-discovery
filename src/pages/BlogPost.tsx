import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPost: FunctionComponent = () => {
  const [message, setMessage] = useState<string>("");
  const { title } = useParams();
  useEffect(() => {
    const message: string = title ? `Article ${title}` : "No Title found";

    setMessage(message);
  }, [title]);
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};
export default BlogPost;
