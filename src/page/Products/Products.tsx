import React from "react";
import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { useAppSelector } from "../../store/hooks";
import { selectCount } from "./Products.slice";
import { productsAsync } from "./Products.slice";
import { Product } from "./index";
import { Card } from "../../componet/Card";
import style from "./Products.module.scss";

export const Products: React.FC = (): JSX.Element => {
  const products: Product[] = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  type props = {
    children?: React.ReactNode;
  };

  useEffect(() => {
    dispatch(productsAsync(12));
  }, [dispatch]);

  return (
    <div className={style.products} id="products">
      <h1 className={style.heading}>
        {" "}
        exclusive <span>products</span>{" "}
      </h1>
      <div className={style.filter_buttons}>
        <div className={style.buttons || style.actives} data-filter="all">
          all
        </div>
        <div className={style.buttons} data-filter="arrivals">
          new arrivals
        </div>
        <div className={style.buttons} data-filter="featured">
          featured
        </div>
        <div className={style.buttons} data-filter="special">
          special offer
        </div>
        <div className={style.buttons} data-filter="seller">
          best seller
        </div>
      </div>
      <div className={style.box_container}>
        {products.map((product: Product) => (
          <Card props={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
