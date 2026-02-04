import React from "react";
import LinkButton from "../components/LinkButton";

const PostList = () => {
  return (
    <div>
      This is post list page <LinkButton url={"/"} label={"Go Home"} />
    </div>
  );
};

export default PostList;
