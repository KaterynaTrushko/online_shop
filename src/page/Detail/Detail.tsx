import React from "react";
import style from "./Detail.module.scss";
import { useAppDispatch } from "../../store/hooks";
import { useAppSelector } from "../../store/hooks";
import { selectDetails } from "../../page/Detail/index";
import { getDetails } from "../../page/Detail/index";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Product } from "../../page/Products/Products.slice";
import { addProductToCart } from "../Cart/Cart.slice";
import { getCartTotal } from "../Cart/Cart.slice";

export function Detail() {
  const { imdbID } = useParams();
  const ID = Number(imdbID);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const promis = dispatch(getDetails(ID));
    return () => {
      // dispatch(getDetails(0));
      // promis.abort();
    };
  }, [dispatch, ID]);

  const detail = useAppSelector((state) => state.detail.detail) as Product;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(addProductToCart(detail));
    dispatch(getCartTotal());
  };

  return (
    <>
      {detail ? (
        <div className={style.container}>
          <div className={style.div}>
            <img className={style.img} src={detail.image} alt="img" />
          </div>

          <div className={style.div}>
            <h3>
              <strong>title:</strong> {detail.title}
            </h3>
            <div>
              <strong>id:</strong> {detail.id}
            </div>
            <div>
              <strong>price:</strong> {detail.price}$
            </div>
            <div>
              <strong>category:</strong> {detail.category};
            </div>
            {/* <div>
              <strong>category:</strong> {detail.rating.rate};
            </div> */}
            <div>
              <strong>description:</strong> {detail.description};
            </div>
            <button className={style.but} onClick={handleClick}>
              Edd to cart
            </button>
          </div>
        </div>
      ) : (
        "Product not found"
      )}
    </>
  );
}
