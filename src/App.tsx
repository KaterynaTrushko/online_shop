import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import { Products } from "./page/Products";
import Review from "./page/Review";
import { Contact } from "./page/Contact/index";
import { Detail } from "./page/Detail/index";
import Layout from "./componet/Layout/Layout";
import { Cart } from "./page/Cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="review" element={<Review />} />
          <Route path="contact" element={<Contact />} />
          <Route path="detail/:imdbID" element={<Detail />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
