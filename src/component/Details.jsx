import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data));
  }, [id]);

  return (
    <div
      className="bg-gray-100 min-h-screen py-10 px-4 flex justify-center items-center
    "
    >
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h3 className="p-3 text-center text-2xl">تفاصيل البوست</h3>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{post.title}</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">{post.body}</p>

        <Link
          to="/"
          className="bg-violet-600 text-white p-2 hover:bg-violet-700 rounded-[10px] text-sm font-medium"
        >
          ← الرجوع إلى قائمة المقالات
        </Link>
      </div>
    </div>
  );
};

export default Details;
