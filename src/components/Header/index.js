import React from "react";
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
     <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
      <div className="container px-5">
        <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Nav.Link className="nav-item" href="saldo">Saldo</Nav.Link>
            <Nav.Link className="nav-item" href="transfer">Transfer</Nav.Link>
            <Nav.Link className="nav-item" href="topup">Top Up</Nav.Link>
            <Nav.Link className="nav-item" href="history">History</Nav.Link>
            <Nav.Link className="nav-item" href="logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
    );
  };

export default Header;