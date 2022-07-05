import React from "react";
import style from "./Footer.module.scss";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";
import { useAppDispatch } from "../../store/hooks";
import { filterByCategory } from "../../page/Products/index";
import { productsAsync } from "../../page/Products/index";

export default function Footer(): JSX.Element {
  const dispatch = useAppDispatch();

  const handlerCategor = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.innerText.toLowerCase());
    dispatch(filterByCategory(e.currentTarget.innerText.toLowerCase()));
  };

  return (
    <>
      <section className={style.footer}>
        <div className={style.box_container}>
          <div className={style.box}>
            <h3>about us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              nesciunt!
            </p>
          </div>

          <div className={style.box}>
            <h3>quick links</h3>
            <a href="/#">
              {" "}
              <FaArrowRight className={style.icon} /> home{" "}
            </a>
            <a href="/#">
              {" "}
              <FaArrowRight className={style.icon} /> products{" "}
            </a>
            <a href="/#">
              <FaArrowRight className={style.icon} /> featured{" "}
            </a>
            <a href="/#">
              <FaArrowRight className={style.icon} /> review{" "}
            </a>
            <a href="/#">
              <FaArrowRight className={style.icon} /> contact{" "}
            </a>
          </div>

          <div className={style.box}>
            <h3>extra links</h3>
            <a href="/#">
              <FaArrowRight className={style.icon} />
              my order{" "}
            </a>
            <a href="/#">
              {" "}
              <FaArrowRight className={style.icon} /> my account{" "}
            </a>
            <a href="/#">
              <FaArrowRight className={style.icon} /> my listing{" "}
            </a>
            <a href="/#">
              <FaArrowRight className={style.icon} /> sell now{" "}
            </a>
            <a href="/#">
              <FaArrowRight className={style.icon} /> new offers{" "}
            </a>
          </div>

          <div className={style.box}>
            <h3>category</h3>
            <a href="/#" onClick={() => dispatch(productsAsync())}>
              <FaArrowRight className={style.icon} />
              all
            </a>
            <a
              href="/#"
              onClick={() => dispatch(filterByCategory("men's clothing"))}
            >
              <FaArrowRight className={style.icon} />
              men
            </a>
            <a href="/#" onClick={(e) => handlerCategor(e)}>
              <FaArrowRight className={style.icon} /> women{" "}
            </a>
            <a
              href="/#"
              onClick={() => dispatch(filterByCategory("electronics"))}
            >
              <FaArrowRight className={style.icon} /> electronics
            </a>
            <a href="/#" onClick={() => dispatch(filterByCategory("jewelery"))}>
              <FaArrowRight className={style.icon} /> jewelery
            </a>
          </div>
        </div>

        <div className={style.share}>
          <TiSocialFacebook className={style.icon} />
          <TiSocialTwitter className={style.icon} />
          <TiSocialPinterest className={style.icon} />
          <TiSocialLinkedin className={style.icon} />
          <TiSocialInstagram className={style.icon} />
        </div>

        <div className={style.credit}>
          {" "}
          &copy; copyright @ 2022 by <span>Kateryna Trushko</span>{" "}
        </div>
      </section>
    </>
  );
}
