import React from "react";

import { useFetch } from "@/hooks/use-fetch";
import { useHashNavigation } from "@/hooks/use-navigation-page";
import { Post } from "@/lib/types/generics/posts";

const PostPage = () => {
  const { param } = useHashNavigation();
  console.log("PARAM", param);
  const { loading, data: post } = useFetch<Post>(
    `https://dummyjson.com/posts/${param}`
  );

  if (loading)
    return (
      <div className="fixed inset-0 bg-black/10 flex items-center justify-center">
        <div className="flex justify-center items-center size-11 text-sm font-medium rounded-lg border border-transparent bg-transparent text-white focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none">
          <span
            className="animate-spin inline-block size-4 border-3 border-blue-700 border-t-transparent text-white rounded-full"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </span>
        </div>
      </div>
    );
  if (!loading && !post) {
    return (
      <div className="min-h-60 flex flex-col">
        <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
          <svg
            className="size-10 text-gray-500 dark:text-neutral-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" x2="2" y1="12" y2="12"></line>
            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
            <line x1="6" x2="6.01" y1="16" y2="16"></line>
            <line x1="10" x2="10.01" y1="16" y2="16"></line>
          </svg>
          <p className="mt-2 text-sm text-gray-800 dark:text-neutral-300">
            No data to show
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="container max-w-7xl mx-auto px-4 mt-5">
      <div className="aspect-w-16 aspect-h-9">
        <img
          className="w-full rounded-2xl max-w-7xl max-h-96 mx-auto object-cover rounded-t-xl"
          src={`https://picsum.photos/id/${post?.id}/4704/3136`}
          alt={post?.title}
        />
      </div>
      <div className="p-4 md:p-5">
        <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
          {post?.title}
        </p>
        <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
          {post?.body}
        </h3>
      </div>
    </div>
  );
};

export default PostPage;
