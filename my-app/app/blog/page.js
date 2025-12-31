import React from "react";

// dummy database
const blogs = [
  {
    id: 1,
    title: "Blog 1",
    description: "Blog 1 description",
  },
  {
    id: 2,
    title: "Blog 2",
    description: "Blog 2 description",
  },
];

export default function Blog() {
  return (
    <main className="mt-10">
      <ul>
        {blogs.map((blog) => (
          <li className="mb-5" key={blog.id}>
            {blog.title}
          </li>
        ))}
      </ul>

      <div>Blog Page</div>
    </main>
  );
}
