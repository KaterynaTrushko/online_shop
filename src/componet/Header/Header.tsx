import React from "react";
import { NavLink, Link } from "react-router-dom";
import style from "../Header/Header.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { useAppSelector } from "../../store/hooks";
import { getTotalAmount } from "../../page/Cart/Cart.slice";
import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { searchByTitle } from "../../page/Products/index";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [searchToggle, setSearchToggle] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const [title, setTitle] = useState("");

  const amount = useAppSelector(getTotalAmount);
  const dispatch = useAppDispatch();

  const handleForm = () => {
    setSearchToggle(!searchToggle);
  };

  const navigate = useNavigate();
  const display = () => {
    navigate("/");
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchByTitle(title));
    setTitle("");
    setSearchToggle(!searchToggle);
    display();
  };

  const onCangeHendler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  return (
    <>
      <header className={style.header}>
        <a href="/" className={style.logo}>
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
          <NavLink className={style.a} to="review">
            Review
          </NavLink>
          <NavLink className={style.a} to="contact">
            Contact
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
        </div>

        <form
          onSubmit={(e) => submitHandler(e)}
          className={searchToggle ? style.search_active : style.search_passive}
        >
          <label>
            <input
              value={title}
              onChange={(e) => onCangeHendler(e)}
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
