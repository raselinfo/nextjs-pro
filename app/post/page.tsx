import React from "react";
import getAllPost from "@/lib/getAllPost";
import Link from "next/link";
const page = async () => {
  const posts = await getAllPost();

//   console.log(posts);
  return (
    <div>
      <h1>All Posts</h1>

      {posts.map((post: any) => {
        return (
          <Link className="border-green-600 border rounded-sm p-3 -3" href={`/post/${post.id}`} key={post.id}>
            <div>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default page;
