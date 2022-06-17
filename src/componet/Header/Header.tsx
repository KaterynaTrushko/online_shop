import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../../page/Home";
import Products from "../../page/Products";
import Featured from "../../page/Featured";
import Review from "../../page/Review";
import Contact from "../../page/Contact";
import Blogs from "../../page/Blogs";
import style from "../Header/Header.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

export default function Header(): JSX.Element {
  return (
    <>
      <header className={style.header}>
        <a href="#" className={style.logo}>
          <div className={style.wrapper}>
            <FaShoppingCart className={style.logo_icon} />
            <div>shop{""} </div>
          </div>
        </a>

        <nav>
          <NavLink className={style.navbar} to="/">
            Home
          </NavLink>
          <NavLink className={style.navbar} to="products">
            Products
          </NavLink>
          <NavLink className={style.navbar} to="featured">
            Featured
          </NavLink>
          <NavLink className={style.navbar} to="review">
            Review
          </NavLink>
          <NavLink className={style.navbar} to="contact">
            Contact
          </NavLink>
          <NavLink className={style.navbar} to="blogs">
            Blogs
          </NavLink>
        </nav>

        <div>
          <BiSearch className={style.icons} />
          <AiOutlineShoppingCart className={style.icons} />
          <AiOutlineHeart className={style.icons} />
        </div>

        <form action="" className={style.search_form}>
          <label className="fas fa-search">
            <input
              type="search"
              name=""
              placeholder="search here..."
              id="search-box"
            />
          </label>
        </form>
      </header>
    </>
  );
}
