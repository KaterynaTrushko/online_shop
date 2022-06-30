import React from "react";
import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { useAppSelector } from "../../store/hooks";
import { selectProducts } from "./index";
import { productsAsync } from "./index";
import { Product } from "./index";
import { Card } from "../../componet/Card";
import style from "./Products.module.scss";
import { selectSearchTyTitle } from "./index";
import { useState } from "react";
import { searchByCategory } from "./index";

export const Products: React.FC = (): JSX.Element => {
  const products = useAppSelector(selectProducts);
  const { status, data } = useAppSelector(selectSearchTyTitle);
  const [category, setCategory] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productsAsync());
  }, [dispatch]);

  let renderList = () => {
    if (data.length == 0) {
      return products;
    } else {
      return data;
    }
  };

  let renderProducts = renderList();
  console.log(renderProducts);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.value === "all") {
      setCategory("");
    } else {
      setCategory(e.currentTarget.value);
    }
    console.log;
  };

  useEffect(() => {
    dispatch(searchByCategory(category));
  }, [category]);

  return (
    <div className={style.products} id="products">
      <h1 className={style.heading}>
        {" "}
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
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleSelect(e)}
      >
        <option className={style.option} value="electronics">
          electronics
        </option>
        <option className={style.option} value="all">
          electronics
        </option>
        <option className={style.option} value="jewellery">
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
        {renderProducts.map((product: Product) => (
          <Card props={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
