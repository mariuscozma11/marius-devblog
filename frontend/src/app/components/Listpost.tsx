"use client";

import { useState } from "react";

import type { Post, Posts } from "@/types"; // Post types

const Listpost = () => {
  const [posts, setPosts] = useState<Posts>([
    // vvv For example only, setPosts is for a fetch on the server.
    {
      id: 1,
      title: "Test Titlu",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maiores ullam temporibus, assumenda repellendus eum autem libero voluptate ex, dictare dolorem obcaecati laboriosam facere hic tempore veniam, odit nemo incidunt.",
      created_at: "2025-08-05",
      updated_at: "",
    },
    {
      id: 2,
      title: "Test Titlu",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maiores ullam temporibus, assumenda repellendus eum autem libero voluptate ex, dictare dolorem obcaecati laboriosam facere hic tempore veniam, odit nemo incidunt.",
      created_at: "2025-08-05",
      updated_at: "",
    },
    {
      id: 3,
      title: "Test Titlu",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maiores ullam temporibus, assumenda repellendus eum autem libero voluptate ex, dictare dolorem obcaecati laboriosam facere hic tempore veniam, odit nemo incidunt.  veniam, odit nemo incidunt. veniam, odit nemo incidunt. veniam, odit nemo incidunt.",
      created_at: "2025-08-05",
      updated_at: "",
    },
    {
      id: 4,
      title: "Test Titlu",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maiores ullam temporibus, assumenda repellendus eum autem libero voluptate ex, dictare dolorem obcaecati laboriosam facere hic tempore veniam, odit nemo incidunt.  veniam, odit nemo incidunt. veniam, odit nemo incidunt. veniam, odit nemo incidunt.",
      created_at: "2025-08-05",
      updated_at: "",
    },
    {
      id: 5,
      title: "Test Titlu",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maiores ullam temporibus, assumenda repellendus eum autem libero voluptate ex, dictare dolorem obcaecati laboriosam facere hic tempore veniam, odit nemo incidunt.  veniam, odit nemo incidunt. veniam, odit nemo incidunt. veniam, odit nemo incidunt.",
      created_at: "2025-08-05",
      updated_at: "",
    },
    {
      id: 6,
      title: "Test Titlu",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maiores ullam temporibus, assumenda repellendus eum autem libero voluptate ex, dictare dolorem obcaecati laboriosam facere hic tempore veniam, odit nemo incidunt.  veniam, odit nemo incidunt. veniam, odit nemo incidunt. veniam, odit nemo incidunt.",
      created_at: "2025-08-05",
      updated_at: "",
    },
    {
      id: 7,
      title: "Test Titlu",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maiores ullam temporibus, assumenda repellendus eum autem libero voluptate ex, dictare dolorem obcaecati laboriosam facere hic tempore veniam, odit nemo incidunt.  veniam, odit nemo incidunt. veniam, odit nemo incidunt. veniam, odit nemo incidunt.",
      created_at: "2025-08-05",
      updated_at: "",
    },
    // ^^^
  ]);
  
  // Truncated words for text content
  function truncateWords(text: string, maxWords: number): string {
    const words = text.split(/\s+/);
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "…";
  }

  return (
    <div className="mt-10">
      {posts.map((post: Post) => (
        <div key={post.id} className="px-2 pb-5 pt-2 border-2 my-2 rounded-sm ">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          {/* The truncated paragraph */}
           <p className="text-gray-300">{truncateWords(post.content, 20)}</p>
          <ul>
            <li className="text-gray-500">Created: {new Date(post.created_at).toLocaleDateString()}</li>
            <li className="text-gray-500">
              Updated:{" "}
              {post.updated_at
                ? new Date(post.updated_at).toLocaleDateString()
                : "-"}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Listpost;
