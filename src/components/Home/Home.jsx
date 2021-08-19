import React from "react";
import { useHistory } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import NavBar from "../NavBar/NavBar";
import Post from "../Post/Post";
import "./Home.css";

const Home = () => {
  let history = useHistory();
  const handlePosterClick = () => {
    history.push("/posterpage");
  };
  return (
    <div>
      <NavBar></NavBar>
      <div className="posterPageBtn">
        <button onClick={handlePosterClick} className="btn btn-danger">
          To post something Click Here
        </button>
      </div>
      <Post></Post>
    </div>
  );
};

export default Home;
