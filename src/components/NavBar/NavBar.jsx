import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand className="text-white" href="#home">
            Budget Reddit For WSIT
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-white">
              Signed in as: InjamulRashik
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
