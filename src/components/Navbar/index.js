import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../images/Logo.PNG";
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function  NavbarBootstrap() {
  return (
    <Navbar expand="lg" variant="dark" className="navProps">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img 
            alt="party planner logo"
            src= {logo}
            height= "80vmin"
            className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/saved-ideas">Saved Items</Nav.Link>
            <Nav.Link as={NavLink} to="/todo-list">To Do</Nav.Link>
            <Nav.Link as={NavLink} to="/guestlist">Guestlist</Nav.Link>
            <Nav.Link as={NavLink} to="/invitations">Invitations</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}

export default NavbarBootstrap;
