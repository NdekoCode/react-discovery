import { useFetch } from "@/hooks/use-fetch";
import { PostData } from "@/lib/types/generics/posts";

const GetData = () => {
  const { data, loading, errors } = useFetch<PostData>(
    "https://dummyjson.com/posts"
  );
  return (
    <div>
      {loading && <div>Loading...</div>}
      {data && (
        <div>
          <ul className="list-disc pl-5">
            {data.posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      )}
      {errors && <div className="text-red-500">{JSON.stringify(errors)}</div>}
    </div>
  );
};

export default GetData;
