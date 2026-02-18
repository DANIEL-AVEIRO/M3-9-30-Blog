import React, { useState } from "react";
import FormGroup from "../components/FormGroup";
import LinkButton from "../components/LinkButton";
import { toast } from "react-toastify";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [viewer, setViewer] = useState(0);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !viewer || !description) {
      toast.warning("All fields are required");
      return;
    }
    localStorage.setItem("title", title);
    speechSynthesis.speak(new SpeechSynthesisUtterance(title));
    toast.success("Post create successfully");
    setTitle("");
    setAuthor("");
    setViewer(0);
    setDescription("");
    return;
  };

  return (
    <div>
      <h1 className="text-center text-4xl mb-5">Post Create Form</h1>
      <form
        className="max-w-3xl mx-auto flex flex-col gap-2 p-8 rounded-lg shadow shadow-black"
        onSubmit={handleSubmit}
      >
        {/* Title */}
        <FormGroup
          label={"Title"}
          type={"text"}
          id={"title"}
          value={title}
          placeholder={"Enter post title"}
          htmlFor={"title"}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Author */}
        <FormGroup
          label={"Author"}
          type={"text"}
          id={"author"}
          value={author}
          placeholder={"Enter author name"}
          htmlFor={"author"}
          onChange={(e) => setAuthor(e.target.value)}
        />

        {/* Viewer */}
        <FormGroup
          label={"Viewer"}
          type={"number"}
          id={"viewer"}
          value={viewer}
          placeholder={"Enter viewer count"}
          htmlFor={"viewer"}
          onChange={(e) => setViewer(e.target.value)}
        />

        {/* Description */}
        <FormGroup
          label={"Description"}
          type={"text"}
          id={"description"}
          placeholder={"Enter description"}
          htmlFor={"description"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex justify-between items-center">
          <LinkButton url={"/post/list/"} label={"Go Back"} />
          <button
            type="submit"
            disabled={loading}
            className="inline-block px-6 py-4 bg-black border border-solid border-black
        rounded text-white text-xl hover:bg-transparent hover:text-black
        duration-300 transition-all"
          >
            {loading ? "Loading....." : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostCreate;
