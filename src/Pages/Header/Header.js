import Button from "@restart/ui/esm/Button"; 
import userEvent from "@testing-library/user-event";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";




const Header = () => {
  const {user,logOut}=useAuth()
  
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">User Data</Navbar.Brand>
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/home#footer">Black</Nav.Link>
          <Nav.Link as={Link} to="/servoces#services">All Service</Nav.Link>
          {user.email?
            <Button>Log Out</Button>:
            <Nav.Link as={Link} to="/login">LogIn</Nav.Link>}
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default Header;
