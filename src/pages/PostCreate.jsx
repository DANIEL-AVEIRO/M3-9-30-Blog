import React from "react";
import FormGroup from "../components/FormGroup";

const PostCreate = () => {
  return (
    <div>
      <h1 className="text-center text-4xl mb-5">Post Create Form</h1>
      <form className="max-w-3xl mx-auto flex flex-col gap-2">
        {/* Title */}
        <FormGroup
          label={"Title"}
          type={"text"}
          id={"title"}
          placeholder={"Enter post title"}
          htmlFor={"title"}
        />

        {/* Author */}
        <FormGroup
          label={"Author"}
          type={"text"}
          id={"author"}
          placeholder={"Enter author name"}
          htmlFor={"author"}
        />

        {/* Viewer */}
        <FormGroup
          label={"Viewer"}
          type={"number"}
          id={"viewer"}
          placeholder={"Enter viewer count"}
          htmlFor={"viewer"}
        />

        {/* Description */}
        <FormGroup
          label={"Description"}
          type={"text"}
          id={"description"}
          placeholder={"Enter description"}
          htmlFor={"description"}
        />

        <button
          type="submit"
          className="inline-block px-6 py-4 bg-black border border-solid border-black
        rounded text-white text-xl hover:bg-transparent hover:text-black
        duration-300 transition-all"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
