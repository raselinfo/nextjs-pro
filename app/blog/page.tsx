import Link from "next/link";
import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      content: "This is blog 1",
    },
    {
      id: 2,
      title: "Blog 2",
      content: "This is blog 2",
    },
    {
      id: 3,
      title: "Blog 3",
      content: "This is blog 3",
    },
  ];
  return (
    <div>
      {blogs.map((blog) => {
        return (
          <Link href={`/blog/${blog.id}`} key={blog.id}>
            <div
              className="border-green-500 rounded-md m-5 py-4 px-10 w-48 border"
              key={blog.id}
            >
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
