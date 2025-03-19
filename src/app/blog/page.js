"use client"

import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
      setBlogs(res.data);
    };

    fetchBlogs();
  }, []);

  if (blogs.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Danh sách Blog</h1>
      <ul className='flex grid grid-cols-3 gap-4'>
        {blogs.map((blog) => (
          <li key={blog._id} className='border p-4'>
            <Link href={`/blog/${blog._id}`} className='cursor-pointer underline'>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;