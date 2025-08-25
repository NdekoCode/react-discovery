import React, { FC } from "react";

import { Post } from "@/lib/types/generics/posts";

const PostCard: FC<{ post: Post }> = ({ post }) => {
  return (
    <a
      className="group flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
      href={"#post:" + post.id}
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          className="w-full object-cover rounded-t-xl"
          src={`https://picsum.photos/id/${post.id}/4704/3136`}
          alt={post.title}
        />
      </div>
      <div className="p-4 md:p-5">
        <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
          {post.title}
        </p>
        <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
          {post.body.substring(0, 75)}...
        </h3>
      </div>
    </a>
  );
};

export default PostCard;
