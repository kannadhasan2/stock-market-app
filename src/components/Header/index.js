import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
import "./index.css";
class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Real-Time Stock Market</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
