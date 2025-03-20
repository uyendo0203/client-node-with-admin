"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  if (blogs.length === 0) {
    return <div className="text-center text-gray-600 mt-10 text-lg">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#F5F5DC] p-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-7 text-center">📚 Danh sách Blog</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <li
            key={blog._id}
            className="bg-white p-6 rounded-xl shadow-md transition transform hover:scale-105 hover:shadow-lg"
          >
            <Link href={`/blogs/${blog._id}`} className="block text-xl font-semibold text-blue-600 hover:underline">
              {blog.title}
            </Link>
            <p className="text-gray-600 mt-2 line-clamp-2">{blog.content}</p>
            <div className="mt-4">
              <Link
                href={`/blogs/${blog._id}`}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Xem chi tiết →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
