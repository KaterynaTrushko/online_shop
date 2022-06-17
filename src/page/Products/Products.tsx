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
    dispatch(productsAsync(9));
  }, [dispatch]);

  return (
    <div className="products" id="products">
      <h1 className="heading">
        {" "}
        exclusive <span>products</span>{" "}
      </h1>
      <div className="filter-buttons">
        <div className="buttons active" data-filter="all">
          all
        </div>
        <div className="buttons" data-filter="arrivals">
          new arrivals
        </div>
        <div className="buttons" data-filter="featured">
          featured
        </div>
        <div className="buttons" data-filter="special">
          special offer
        </div>
        <div className="buttons" data-filter="seller">
          best seller
        </div>
      </div>
      <div>Products</div>
      <div className={style.container}>
        {products.map((product: Product) => (
          <div className={style.box} key={product.id}>
            {product.title}
            <div>
              <Card props={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
