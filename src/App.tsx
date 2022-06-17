import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./componet/Header/Header";
import Home from "./page/Home";
import { Products } from "./page/Products";
import Featured from "./page/Featured";
import Review from "./page/Review";
import Contact from "./page/Contact";
import Blogs from "./page/Blogs";
import Layout from "./componet/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="featured" element={<Featured />} />
          <Route path="review" element={<Review />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
