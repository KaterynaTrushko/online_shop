import React from "react";
import { type Product } from "../../page/Products";
import style from "../Card/Card.module.scss";

export const Card: React.FC<{ props: Product }> = ({ props }) => {
  const { id, title, price, category, description, image } = props;

  const cutPrice = (value: number): number => value - 20;
  return (
    <>
      <div className={style.box} data-item="special">
        <div className={style.icons}>
          <a href="#" className="fas fa-shopping-cart"></a>
          <a href="#" className="fas fa-heart"></a>
          <a href="#" className="fas fa-search"></a>
          <a href="#" className="fas fa-eye"></a>
        </div>
        <div className={style.image}>
          <img src={image} alt="" />
        </div>
        <div className={style.content}>
          <h3>{title}</h3>
          <div className={style.price}>
            <div className={style.amount}>${price}</div>
            <div className={style.cut}>${cutPrice(Number(price))}</div>
            <div className={style.offer}>20% off</div>
          </div>
          <div className={style.stars}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <span>({id})</span>
          </div>
        </div>
      </div>
    </>
  );
};
