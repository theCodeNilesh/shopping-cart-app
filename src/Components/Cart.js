import React from "react";

import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

import ghost from "../ghost.png";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;

  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });

  return (
    <Container fluid>
      <h1 className="pagetitle"> Your Cart</h1>
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem className="cartitemcard" key={item.id}>
            <Row className="mt-2 ms-2 me-2">
              <Col className="col-md-5">
                <img className="cartimg" height={80} src={item.tinyImage} />
              </Col>
              <Col className="text-left col-md-7">
                <div
                  className="carditemtxt mt-2 mb-2"
                  style={{ paddingRight: 100, fontSize: 20 }}
                >
                  {item.productName}
                </div>
                <span className="carditemtprc">
                  Price:
                  <span style={{ fontWeight: "500" }}>{item.productPrice}</span>
                </span>
              </Col>
            </Row>
            <Row className="mt-2">
              <Button
                onClick={() => removeItem(item)}
                className="mt-3 removebtn"
              >
                Remove
              </Button>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/* IF everything is empty no item added in cart */}
      {cartItem.length >= 1 ? (
        <Card className="text-center mt-5 cartitemcard">
          <CardHeader
            className="carditemtxt mt-2 mb-2"
            style={{
              fontWeight: "500",
              fontSize: "22px",
              letterSpacing: "2px",
            }}
          >
            Grand Total
          </CardHeader>
          <CardBody
            className="carditemtxt mt-2 mb-2"
            style={{
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            Your amount for {cartItem.length} product is{" "}
            <span style={{ fontWeight: "500" }}> {amount}</span>
          </CardBody>
          <CardFooter>
            <Button className="mt-3 mb-3 paybtn" onClick={buyNow}>
              Pay here
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Container className="h-100 " fluid>
          <Row>
            <img className="ghost" src={ghost} alt="" />
          </Row>
          <Row>
            <h2 className="secondary-text mt-4">Cart is Empty</h2>
          </Row>
        </Container>
      )}
    </Container>
  );
};

export default Cart;
