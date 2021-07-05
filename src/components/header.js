import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Container fluid>
        <Navbar bg="danger" variant="dark">
          <Link to="/" className="navbar-brand font-weight-bold">
            Product Dashboard
          </Link>
          <Nav className="mr-auto">
            {localStorage.getItem("userData") ? (
              <>
                <NavLink to="/add" className="nav-link ">
                  AddProduct
                </NavLink>
                <NavLink to="/update" className="nav-link">
                  UpdateProduct
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login" className="nav-link">
                  LogIn
                </NavLink>
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar>
      </Container>
    </>
  );
}

export default Header;
