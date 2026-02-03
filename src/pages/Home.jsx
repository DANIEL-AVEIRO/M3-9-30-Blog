import React from "react";
import { Link } from "react-router-dom";

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
        return (
          <Link
            to={route.url}
            className="inline-block px-6 py-4 bg-black border border-solid border-black
        rounded text-white text-xl hover:bg-transparent hover:text-black
        duration-300 transition-all"
          >
            {route.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
