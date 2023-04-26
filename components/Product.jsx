"use client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Product({ img, title, price, rating }) {
  return (
    <Card>
      <Card.Img className="imgs" src={img} />
      <Card.Body>
        <Card.Title className="text-primary title">{title}</Card.Title>
        <div className="d-flex justify-content-between">
          <p className="text-primary fs-6">Price - {price}, INR*</p>
          <p className="text-primary fs-6">Ratings - {rating}</p>
        </div>
        <Card.Text>
          {title} - Wireless Earbuds, Sleek. Comfortable. Stylish. Bring alive
          your favourite sounds with {title} by boAt.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
