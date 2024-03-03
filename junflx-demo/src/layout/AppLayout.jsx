import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./AppLayout.style.css";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchByKeyword = (e) => {
    e.preventDefault();
    //url바꾸기
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };
  return (
    <div>
      <Navbar expand="lg" className="bg-black">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="https://yt3.googleusercontent.com/nZ2nJdaag42wq-1RfCuvJgay89LffzLBkLXPVGVP-MRqshVNIyvg5jHWJDlyR0SxSl9peRZ0NA=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
              width={300}
              className="circle-to-square"
              onClick={() => navigate("/")}
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
            <Form className="d-flex " onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search "
                className="me-2  "
                aria-label="Search"
                data-bs-theme="dark"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
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
