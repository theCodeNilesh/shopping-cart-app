import React, { useState, useEffect } from "react";
import Axios from "axios";
import { random, commerce } from "faker";
import { Container, Col, Row } from "reactstrap";
import CartItem from "./CartItem";

const apikey = "563492ad6f91700001000001390e49e277274c5f8fb1f6b58900f36e";

const url =
  "https://api.pexels.com/v1/search?query=monitor++&per_page=20&page=1"; // official URL
const localurl = "https://myjson.dit.upm.es/api/bins/17ul";

const BuyPage = ({ addInCart }) => {
  //This method work only if we have the Official API of pexels with the API key

  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    const { data } = await Axios.get(url, {
      headers: {
        Authorization: apikey,
      },
    });
    const { photos } = data;
    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid(),
    }));

    setProduct(allProduct);
  };
  // const fetchPhotos = async () => {
  //   const { data } = await Axios.get(localurl);

  //   const { photos } = data;

  //   const allProduct = photos.map((photo) => ({
  //     smallImage: photo.src.medium,
  //     tinyImage: photo.src.tiny,
  //     productName: random.word(),
  //     productPrice: commerce.price(),
  //     id: random.uuid(),
  //   }));

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className=" text-center pagetitle">Buy Page</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
