import React, { useEffect, useState } from "react";
import LinkButton from "../components/LinkButton";
import Card from "../components/Card";
import { toast } from "react-toastify";
import { postList } from "../api/service/post";
import { useNavigate } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate()

  const fetchPosts = async () => {
    const response = await postList();
    setPosts(response.data);
  };


  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Post List</h1>
        <LinkButton label={"+ Add New Post"} url={"/post/create/"} />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {posts.map((post) => {
          return (
            <div key={post._id} className="shadow-md shadow-black rounded-md p-4">
              <h1 className="text-xl mb-2 font-bold text-black">{post.title}</h1>
              <p className="text-lg mb-2 text-gray-700">{post.author}</p>
              <span className="text-sm bg-green-500 text-white p-1 rounded-md">
                Viewer : {post.viewer}
              </span>
              <p className="text-lg mt-2 text-gray-700">{post.description}</p>
              <div className="flex gap-2 mt-3">
                <button
                  className="inline-block px-4 py-2 text-sm 
        rounded-md bg-green-700 text-white 
        border border-solid border-green-700 hover:bg-transparent
         hover:text-green-700 transition-all duration-300 cursor-pointer"
                  onClick={()=>navigate(`/post/update/${post._id}`)}
                >
                  Update
                </button>
                <button
                  className="inline-block px-4 py-2 text-sm 
        rounded-md bg-red-700 text-white 
        border border-solid border-red-700 hover:bg-transparent
         hover:text-red-700 transition-all duration-300 cursor-pointer"
                  
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
