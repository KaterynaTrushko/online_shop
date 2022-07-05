import React from "react";
import { type Product } from "../../page/Products/Products.slice";
import style from "../Card/Card.module.scss";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsEye } from "react-icons/bs";
import { addProductToCart, getCartTotal } from "../../page/Cart/Cart.slice";
import { useAppDispatch } from "../../store/hooks";
import { getDetails } from "../../page/Detail/index";

export const Card: React.FC<{ props: Product }> = ({ props }) => {
  const { id, title, price, category, description, image } = props;

  function getRandomInt() {
    return Math.floor(Math.random() * (6 - 4) + 4); //The maximum is exclusive and the minimum is inclusive
  }

  let arrStarts = Array(getRandomInt()).fill(1);

  const cutPrice = (value: number) => {
    const num: number = Number((value * 1.2).toFixed(0));
    return num;
  };

  const dispatch = useAppDispatch();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(
      addProductToCart({ id, title, price, category, description, image })
    );
    dispatch(getCartTotal());
  };

  return (
    <>
      <div className={style.box} data-item="special">
        <div className={style.icons}>
          <Link to={"#"} className={style.a} onClick={handleClick}>
            <AiOutlineShoppingCart className="style.active" />
          </Link>
          <Link to={"#"} className={style.a}>
            <FiSearch className="style.active" />
          </Link>
          <Link
            to={`/detail/${id}`}
            onClick={() => dispatch(getDetails(id))}
            className={style.a}
          >
            <BsEye className="style.active" />
          </Link>
        </div>
        <div className={style.image}>
          <img src={image} alt="" />
        </div>
        <div className={style.content}>
          <h3 className={style.h3}>
            {title}
            <span>(id:{id})</span>
          </h3>
          <div className={style.price}>
            <div className={style.amount}>${price}</div>
            <div className={style.cut}>${cutPrice(Number(price))}</div>
            <div className={style.offer}>20% off</div>
          </div>
          <div className={style.stars}>
            {arrStarts.map((elem, i) => (
              <div key={i}>
                <AiFillStar />
              </div>
            ))}
            {arrStarts.length === 4 ? <AiOutlineStar /> : null}
          </div>
        </div>
      </div>
    </>
  );
};
