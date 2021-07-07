import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("userData"));

  function logout() {
    localStorage.clear();
    history.push("/login");
  }
  return (
    <>
        <Navbar bg="danger" variant="dark">
          <Link to="/" className="navbar-brand font-weight-bold">
            Admin Dashboard
          </Link>
          <Nav className="mr-auto">
            {localStorage.getItem("userData") ? (
              <>
                <NavLink to="/" className="nav-link ">
                  ProductListing
                </NavLink>
                <NavLink to="/add" className="nav-link ">
                  AddProduct
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
          {localStorage.getItem("userData") ? (
            <Nav>
              <NavDropdown title={user.data.name} id="collasible-nav-dropdown">
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : null}
        </Navbar>
    </>
  );
}

export default Header;
