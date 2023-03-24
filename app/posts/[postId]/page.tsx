import React from "react";
import { Post } from "../../../typings";

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchPost = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );

  const post: Post = await res.json();
  return post;
};

async function PostPage({ params: { postId } }: PageProps) {
  const post = await fetchPost(postId);

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{post.id}: {post.title}
      </p>
      <p>Completed: {post.completed ? "Yes" : "No"}</p>
      <p className="border-t border-black mt-5 text-right">
        By User: {post.userId}
      </p>
    </div>
  );
}

export default PostPage;
