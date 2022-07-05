import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Cart } from "../../page/Cart/Cart.slice";
import {
  addProductToCart,
  decriseProductFromCart,
  removeItemFromCart,
} from "../../page/Cart/Cart.slice";
import { useAppDispatch } from "../../store/hooks";
// import style from "./ItemCart.module.scss";

interface Props {
  item: Cart;
}

export default function ItemCart({ item }: Props) {
  const dispatch = useAppDispatch();

  const remove = () => {
    dispatch(removeItemFromCart(item.id));
  };

  const moveToWishlist = () => {};

  const decrementCount = () => {
    dispatch(decriseProductFromCart(item.id));
  };

  const incrementCount = () => {
    dispatch(addProductToCart(item));
  };

  const count = () => {
    return (item.amount * Number(item.price)).toFixed(0);
  };

  return (
    <>
      <Row className="py-3 border-bottom">
        <Col xs={12} md={3}>
          <Card.Img src={item.image} />
        </Col>
        <Col xs={12} md={6} className="d-flex flex-column">
          <Card.Title>{item.title}</Card.Title>
          <div className="my-auto">
            <div>id:{item.id}</div>
            <div>
              price:<strong>${Number(item.price).toFixed(0)}</strong>
            </div>
            <div>category: {item.category}</div>
          </div>
          <div className="mt-auto">
            <button onClick={remove} className="btn bg-transparent pl-0">
              <i className="fa fa-trash" />
              Remove Item
            </button>
            <button
              onClick={moveToWishlist}
              className="btn bg-transparent pl-0"
            >
              <i className="fa fa-heart" /> Move To Wishlist
            </button>
          </div>
        </Col>
        <Col xs={12} md={3} className="text-right d-flex flex-md-column">
          <div>
            <button
              className="bincrementCountg-transparent border"
              onClick={decrementCount}
            >
              -
            </button>
            <input
              className="border text-center"
              style={{ width: "50px" }}
              value={item.amount}
            />
            <button className="bg-transparent border" onClick={incrementCount}>
              +
            </button>
          </div>
          <div className="mt-auto ml-auto">
            <strong>${count()}</strong>
          </div>
        </Col>
      </Row>
    </>
  );
}
