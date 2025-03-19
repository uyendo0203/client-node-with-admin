"use client"
import React, { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = React.useState([]);

  useEffect(() => {
    console.log(11);
    console.log(process.env.NEXT_PUBLIC_API_URL,22);
    
    axios.get(process.env.NEXT_PUBLIC_API_URL + '/api/blogs')
      .then(response => {
        console.log(response.data);
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      }); 
  },[]);

  if(blogs.length === 0){
    return <div>Loading...</div>
  }

    return (
      <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold text-center mb-6">Danh sách Blog</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogs.map((blog) => (
                  <div key={blog._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                      <div className="p-4">
                          <h2 className="text-xl font-semibold">{blog.title}</h2>
                          <p className="text-gray-700">{blog.content}</p>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    );
};


export default Home;