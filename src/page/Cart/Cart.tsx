import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import ItemCart from "../../componet/ItemCart";
import style from "./Cart.module.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCartTotal } from "./Cart.slice";

export function Cart() {
  const { totalAmount, totalPrice, items } = useAppSelector(
    (state) => state.cart
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, items]);

  return (
    <Container className={style.container}>
      <div className="text-center m-5">
        <h2>
          <strong>Shopping Cart</strong>
        </h2>
      </div>
      <Row>
        <Col xs={12} md={8}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>
                Cart{" "}
                {items.length === 0 ? "is Empty" : `( Items ${items.length})`}
              </Card.Title>
              {items.map((item) => (
                <ItemCart key={item.id} item={item} />
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>The total amount of</Card.Title>
              <Row>
                <Col xs={8} md={8}>
                  <strong>Total Price</strong>
                </Col>
                <Col xs={4} md={4} className="text-right">
                  <strong>{totalPrice}</strong>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col xs={8} md={8}>
                  <strong>Total amount </strong>
                </Col>
                <Col xs={4} md={4} className="text-right">
                  <strong>{totalAmount}</strong>
                </Col>
              </Row>
              <div className="text-center pt-3">
                <Button variant="primary" className="w-100">
                  Go To Checkout
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="mt-2 shadow">
            <Card.Body>
              <Row>
                <Col xs={8} md={8}>
                  Add a discount code (optional)
                </Col>
                <Col xs={4} md={4} className="text-right">
                  <i className="fa fa-chevron-down"></i>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
