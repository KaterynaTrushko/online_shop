import React, { ChangeEvent, useCallback } from "react";
import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { useAppSelector } from "../../store/hooks";
import { selectProducts } from "./index";
import { productsAsync } from "./index";
import { Product } from "./index";
import { Card } from "../../componet/Card";
import style from "./Products.module.scss";
import { selectSearchByTitle } from "./index";
import { searchByCategory } from "./index";
import { selectByCategory } from "./index";
import Skeleton from "../../componet/Skeleton";
import { useState } from "react";
import { useMemo } from "react";
import { RootState } from "../../store/store";

export const Products = () => {
  const dispatch = useAppDispatch();
  const [isSelected, setIsSlected] = useState("all");

  useEffect(() => {
    dispatch(productsAsync());
  }, [dispatch]);

  const titleProducts = useAppSelector(selectSearchByTitle);

  useEffect(() => {
    dispatch(searchByCategory(isSelected));
  }, [dispatch, isSelected]);

  const products = useAppSelector(selectProducts);
  const categoryProducts = useAppSelector(selectByCategory);

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) =>
    setIsSlected(e.currentTarget.value);

  let productsDisp = products.data.map((product: Product) => (
    <Card props={product} key={product.id} />
  ));
  let categDisp = categoryProducts.data.map((product: Product) => (
    <Card props={product} key={product.id} />
  ));
  let titleDisp = titleProducts.data.map((product: Product) => (
    <Card props={product} key={product.id} />
  ));

  return (
    <div className={style.products} id="products">
      <>
        <h1 className={style.heading}>
          exclusive <span>products</span>{" "}
        </h1>

        <div className={style.filter_buttons} onClick={() => {}}>
          <div className={style.buttons}>all</div>
          <div className={style.buttons}>electronics</div>
          <div className={style.buttons}>jewellery</div>
          <div className={style.buttons}>men's clothing</div>
          <div className={style.buttons}>women's clothing</div>
        </div>
        <select
          className={style.select}
          name="categories"
          onChange={handleSelect}
        >
          <option className={style.option} value="all">
            all
          </option>
          <option className={style.option} value="electronics">
            electronics
          </option>
          <option className={style.option} value="jewelery">
            jewellery
          </option>
          <option className={style.option} value="men's clothing">
            men's clothing
          </option>
          <option className={style.option} value="women's clothing">
            women's clothing
          </option>
        </select>
        <div className={style.box_container}>
          {categoryProducts.data.length > 1 && categDisp}

          {titleProducts.data.length || categoryProducts.data.length
            ? titleDisp || categDisp
            : products.status !== "succeeded"
            ? [...new Array(8)].map((product: Product, ind) => (
                <Skeleton key={ind} />
              ))
            : productsDisp}
        </div>
      </>
    </div>
  );
};
