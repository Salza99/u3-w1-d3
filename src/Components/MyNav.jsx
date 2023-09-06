import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

class MyNav extends React.Component {
  render() {
    return (
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Epicbooks</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Broswe</Nav.Link>
          </Nav>
          <div className="input-group justify-content-end">
            <div className="form-outline">
              <input id="search-focus" type="search" className="form-control" />
            </div>
            <button type="button" className="btn btn-primary">
              Find
            </button>
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default MyNav;
