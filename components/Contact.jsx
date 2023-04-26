"use client";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState();

  return (
    <div className="flex justify-content-around py-2">
      <div className="contact">
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/1_3.png?v=1653385091"
          alt="imgs"
        />
      </div>
      <div className="contact">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Thank you, ${name}`);
          }}
        >
          <Form.Label className="text-success">Your Name</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Mr/Mrs</InputGroup.Text>
            <Form.Control
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="name"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Form.Label className="text-success">Email address</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              required
              aria-label="email"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
          </InputGroup>

          <Form.Label className="text-success">Message / Query</Form.Label>
          <InputGroup>
            <InputGroup.Text>Your Message</InputGroup.Text>
            <Form.Control required as="textarea" aria-label="With textarea" />
          </InputGroup>
          <Button type="submit" className="mt-3" variant="primary">
            Send Message
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
