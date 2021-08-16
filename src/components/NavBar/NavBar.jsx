import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { UserContext } from "../../App";
import "./NavBar.css";

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
              Signed in as: {loggedInUser.name}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
