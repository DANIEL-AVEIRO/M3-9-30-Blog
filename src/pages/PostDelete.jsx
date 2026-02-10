import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PostDelete = () => {
  const navigate = useNavigate();
  const yesButton = () => {
    toast.success("Post delete successfully");
    navigate("/post/list/");
    return;
  };
  const noButton = () => {
    navigate("/post/list/");
  };
  //  onClick={() => yesButton()}
  //  onClick={noButton}
  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-2 p-8 rounded-lg shadow shadow-black">
      <p className="text-xl text-center text-black font-bold mb-4">
        Are you sure to want to delete?
      </p>
      <div className="flex gap-2 mt-3 justify-center items-center">
        <button
          className="inline-block px-6 py-2 text-lg 
        rounded-md bg-green-700 text-white 
        border border-solid border-green-700 hover:bg-transparent
         hover:text-green-700 transition-all duration-300 cursor-pointer"
          onClick={() => yesButton()}
        >
          Yes
        </button>
        <button
          className="inline-block px-6 py-2 text-lg 
        rounded-md bg-red-700 text-white 
        border border-solid border-red-700 hover:bg-transparent
         hover:text-red-700 transition-all duration-300 cursor-pointer"
          onClick={noButton}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default PostDelete;
