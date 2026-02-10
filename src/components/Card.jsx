import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, author, viewer, description }) => {
  const navigate = useNavigate();
  const updateButton = () => {
    navigate("/post/update/");
  };
  const deleteButton = () => {
    navigate("/post/delete/");
  };

  return (
    <div className="shadow-md shadow-black rounded-md p-4">
      <h1 className="text-xl mb-2 font-bold text-black">{title}</h1>
      <p className="text-lg mb-2 text-gray-700">{author}</p>
      <span className="text-sm bg-green-500 text-white p-1 rounded-md">
        Viewer : {viewer}
      </span>
      <p className="text-lg mt-2 text-gray-700">{description}</p>
      <div className="flex gap-2 mt-3">
        <button
          className="inline-block px-4 py-2 text-sm 
        rounded-md bg-green-700 text-white 
        border border-solid border-green-700 hover:bg-transparent
         hover:text-green-700 transition-all duration-300 cursor-pointer"
          onClick={() => updateButton()}
        >
          Update
        </button>
        <button
          className="inline-block px-4 py-2 text-sm 
        rounded-md bg-red-700 text-white 
        border border-solid border-red-700 hover:bg-transparent
         hover:text-red-700 transition-all duration-300 cursor-pointer"
          onClick={() => deleteButton()}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
