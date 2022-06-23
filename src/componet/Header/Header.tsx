import React from "react";
import { NavLink, Link } from "react-router-dom";
import style from "../Header/Header.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { useAppSelector } from "../../store/hooks";
import { getTotalAmount } from "../../page/Cart/Cart.slice";
import { useRef } from "react";
import { useState } from "react";

export default function Header() {
  const [searchToggle, setSearchToggle] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  const amount = useAppSelector(getTotalAmount);

  const ref = useRef<HTMLFormElement>(null);

  const handleForm = () => {
    setSearchToggle(!searchToggle);
  };

  return (
    <>
      <header className={style.header}>
        <a href="#" className={style.logo}>
          <div className={style.wrapper}>
            <FaShoppingCart className={style.logo_icon} />
            <div>shop{""}</div>
          </div>
        </a>
        <nav className={navToggle ? style.active : style.navbar}>
          <NavLink className={style.a} to="/">
            Home
          </NavLink>
          <NavLink className={style.a} to="products">
            Products
          </NavLink>
          <NavLink className={style.a} to="featured">
            Featured
          </NavLink>
          <NavLink className={style.a} to="review">
            Review
          </NavLink>
          <NavLink className={style.a} to="contact">
            Contact
          </NavLink>
          <NavLink className={style.a} to="blogs">
            Blogs
          </NavLink>
        </nav>

        <div className={style.icons}>
          <BiMenu
            className={style.menu_btn}
            onClick={() => setNavToggle(!navToggle)}
          />
          <BiSearch className={style.icons} onClick={handleForm} />
          <Link to="/cart">
            <AiOutlineShoppingCart className={style.iconCart} />
            {amount !== 0 ? (
              <span className={style.cart} style={{ color: "white" }}>
                {amount}
              </span>
            ) : null}
          </Link>
          <Link className={style.a} to={"#"}>
            <AiOutlineHeart className={style.icons} />
          </Link>
        </div>

        <form
          action=""
          className={searchToggle ? style.search_active : style.search_passive}
          ref={ref}
        >
          <label>
            <input
              className={style.input}
              name=""
              placeholder="search here..."
              id="search_box"
            />
          </label>
        </form>
      </header>
    </>
  );
}
