import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  const handleLogoClick = () => {
    history.push("/");
  };
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand className="text-light" onClick={handleLogoClick}>
            Budget Reddit
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-light">
              Signed in as:{" "}
              <a href className="text-danger">
                {loggedInUser.name}
              </a>
              <img
                width="65"
                className="rounded-circle ms-3"
                src={loggedInUser.photo}
                alt=""
              />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
