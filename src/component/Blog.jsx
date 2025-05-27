import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPost(res.data);
    });
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <div className="mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6 text-center">قائمة المقالات</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {post.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition"
            >
              <div className="flex justify-between items-center ">
                <p className="text-gray-600 text-sm mb-4 ">
                  اسم المستخدم : @{post.userId}
                </p>
                <img
                  className="h-9 rounded-2xl object-cover w-9 "
                  src="https://media.istockphoto.com/id/511321329/vector/angry-manager.jpg?s=2048x2048&w=is&k=20&c=7saBTGcqbbfkFZlP97w-NDc5KFK3Kyx_i04V4xt09aU="
                  alt=""
                  srcset=""
                />
              </div>

              <h4 className="text-lg font-bold mb-2">{post.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{post.body}</p>
              <Link
                to={`/details/${post.id}`}
                className="bg-violet-600 text-white p-2 hover:bg-violet-700 rounded-[10px] text-sm font-medium"
              >
                قراءة المزيد
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
