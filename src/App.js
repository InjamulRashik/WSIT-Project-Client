import React, { useState } from "react";
import { createContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import LoginPage from "./components/LoginPage/LoginPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Home></Home>
          </PrivateRoute>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
