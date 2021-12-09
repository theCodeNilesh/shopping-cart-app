import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

const CartItem = ({ product, addInCart }) => {
  return (
    <Card className="mt-4  mb-5 ms-2 me-1 card ">
      <CardImg top className="img" height="250" src={product.smallImage} />
      <CardBody className="text-center mt-2">
        <CardTitle className="cardtitle">{product.productName}</CardTitle>
        <CardText className="secondary price">
          Price: Rs {product.productPrice}
        </CardText>
        <Button className="buy" onClick={() => addInCart(product)}>
          Buy Now
        </Button>
      </CardBody>
    </Card>
  );
};
export default CartItem;
