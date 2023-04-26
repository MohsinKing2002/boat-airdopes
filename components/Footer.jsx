"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="justify-content-center py-2">
        <span className="text-light fs-5">
          &copy; Copyrights |
          <em className="mx-2 text-info">Boat Airdopes &reg;</em>| Alrights
          reserved !
        </span>
      </Container>
    </Navbar>
  );
}

export default Footer;
