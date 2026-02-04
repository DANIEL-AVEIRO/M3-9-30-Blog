import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ url, label }) => {
  return (
    <Link
      to={url}
      className="inline-block px-6 py-4 bg-black border border-solid border-black
        rounded text-white text-xl hover:bg-transparent hover:text-black
        duration-300 transition-all"
    >
      {label}
    </Link>
  );
};

export default LinkButton;
