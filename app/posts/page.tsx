import React from "react";
import PostsList from "./PostsList";

function Posts() {
  return (
    <div className="container mx-auto px-5 md:py-8 py-4 pb-16 cursor-auto">
      <div className="md:w-4/5 mx-auto">
        {/* @ts-ignore */}
        <PostsList />
      </div>
    </div>
  );
}

export default Posts;
