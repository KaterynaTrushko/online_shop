import React, { ChangeEvent } from "react";
import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { useAppSelector } from "../../store/hooks";
import { selectProducts } from "./index";
import { productsAsync } from "./index";
import { Product } from "./index";
import { Card } from "../../componet/Card";
import style from "./Products.module.scss";
import { filterByCategory } from "./index";
import Skeleton from "../../componet/Skeleton";
import { priceLow } from "./index";
import { priceHigh } from "./index";

export const Products = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productsAsync());
  }, [dispatch]);

  const products = useAppSelector(selectProducts);

  const handlerCategor = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // dispatch(productsAsync());
    dispatch(filterByCategory(e.currentTarget.innerText.toLowerCase()));
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value === "priceLow") {
      dispatch(priceLow());
    } else if (e.currentTarget.value === "priceHigh") {
      dispatch(priceHigh());
    } else {
      dispatch(productsAsync());
    }
  };

  let productsDisp = products.data.map((product: Product) => (
    <Card props={product} key={product.id} />
  ));
  return (
    <div className={style.products} id="products">
      <>
        <h1 className={style.heading}>
          exclusive <span>products</span>{" "}
        </h1>

        <div className={style.filter_buttons}>
          <div
            onClick={() => dispatch(productsAsync())}
            className={style.buttons}
          >
            all
          </div>
          <div onClick={handlerCategor} className={style.buttons}>
            electronics
          </div>
          <div onClick={handlerCategor} className={style.buttons}>
            jewelery
          </div>
          <div onClick={handlerCategor} className={style.buttons}>
            men's clothing
          </div>
          <div onClick={handlerCategor} className={style.buttons}>
            women's clothing
          </div>
        </div>

        <select
          className={style.select}
          name="sortBy"
          onChange={(e) => handleSelect(e)}
        >
          <option className={style.option} value="sort by">
            sort by
          </option>
          <option className={style.option} value="priceLow">
            price Low
          </option>
          <option className={style.option} value="priceHigh">
            prie high
          </option>
        </select>

        <div className={style.box_container}>
          {products.status !== "succeeded"
            ? [...new Array(16)].map((product: Product, ind) => (
                <Skeleton key={ind} />
              ))
            : productsDisp}
        </div>
      </>
    </div>
  );
};
