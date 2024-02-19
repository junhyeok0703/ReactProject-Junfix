import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet, Link } from "react-router-dom";
import "./AppLayout.style.css";

const AppLayout = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-black">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="https://yt3.googleusercontent.com/nZ2nJdaag42wq-1RfCuvJgay89LffzLBkLXPVGVP-MRqshVNIyvg5jHWJDlyR0SxSl9peRZ0NA=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
              width={300}
              className="circle-to-square"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  HOME
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/movies"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  MOVIES
                </Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex ">
              <Form.Control
                type="search"
                placeholder="Search "
                className="me-2  "
                aria-label="Search"
                data-bs-theme="dark"
              />

              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  );
};

export default AppLayout;
