import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "../components/LinkButton";

const routes = [
  {
    id: 1,
    url: "/post/list/",
    label: "Post List",
  },
  {
    id: 2,
    url: "/post/create/",
    label: "Post Create",
  },
  {
    id: 3,
    url: "/post/update/",
    label: "Post Update",
  },
  {
    id: 4,
    url: "/post/delete/",
    label: "Post Delete",
  },
];

const Home = () => {
  return (
    <div className="flex gap-4">
      {routes.map((route) => {
        return <LinkButton url={route.url} label={route.label} />;
      })}
    </div>
  );
};

export default Home;
