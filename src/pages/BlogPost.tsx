import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UsersList from "./UsersList";

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

      <UsersList/>
    </div>
  );
};
export default BlogPost;
