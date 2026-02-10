import React from "react";
import LinkButton from "../components/LinkButton";
import Card from "../components/Card";

const PostList = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Post List</h1>
        <LinkButton label={"+ Add New Post"} url={"/post/create/"} />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {/* Card Start */}
        <Card
          title={"Title"}
          author={"Author"}
          viewer={100}
          description={"DEscription"}
        />
        {/* Card End */}
        {/* Card Start */}
        <Card
          title={"Title"}
          author={"Author"}
          viewer={100}
          description={"DEscription"}
        />
        {/* Card End */}
        {/* Card Start */}
        <Card
          title={"Title"}
          author={"Author"}
          viewer={100}
          description={"DEscription"}
        />
        {/* Card End */}
        {/* Card Start */}
        <Card
          title={"Title"}
          author={"Author"}
          viewer={100}
          description={"DEscription"}
        />
        {/* Card End */}
        {/* Card Start */}
        <Card
          title={"Title"}
          author={"Author"}
          viewer={100}
          description={"DEscription"}
        />
        {/* Card End */}
        {/* Card Start */}
        <Card
          title={"Title"}
          author={"Author"}
          viewer={100}
          description={"DEscription"}
        />
        {/* Card End */}
        {/* Card Start */}
        <Card
          title={"Title"}
          author={"Author"}
          viewer={100}
          description={"DEscription"}
        />
        {/* Card End */}
        {/* Card Start */}
        <Card
          title={"Title"}
          author={"Author"}
          viewer={100}
          description={"DEscription"}
        />
        {/* Card End */}
        {/* Card Start */}
        <Card
          title={"Title"}
          author={"Author"}
          viewer={100}
          description={"DEscription"}
        />
        {/* Card End */}
        {/* Card Start */}
        <Card
          title={"Title"}
          author={"Author"}
          viewer={100}
          description={"DEscription"}
        />
        {/* Card End */}
      </div>
    </div>
  );
};

export default PostList;
