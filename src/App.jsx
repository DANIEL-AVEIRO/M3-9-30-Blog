import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostList from "./pages/PostList";
import Home from "./pages/Home";
import PostCreate from "./pages/PostCreate";
import PostUpdate from "./pages/PostUpdate";
import PostDelete from "./pages/PostDelete";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="max-w-6xl mx-auto py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/list/" element={<PostList />} />
          <Route path="/post/create/" element={<PostCreate />} />
          <Route path="/post/update/" element={<PostUpdate />} />
          <Route path="/post/delete/" element={<PostDelete />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
