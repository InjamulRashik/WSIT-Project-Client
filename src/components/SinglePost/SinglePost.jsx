import React, { useContext } from "react";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { UserContext } from "../../App";
import logo from "../../assets/avatar.png";
import Comments from "../Comments/Comments";
import "../Post/Post.css";

const SinglePost = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { _id, name, photo, postDetails, upvote, downvote } = props.allpost;
  const [upVote, setUpVote] = useState(() => parseInt(upvote));
  const [downVote, setDownVote] = useState(() => parseInt(downvote));

  const handleUpvoteCLick = () => {
    setUpVote((p) => p + 1);
    if (downVote === 0) {
      setDownVote(downVote);
    } else {
      setDownVote((p) => p - 1);
    }
    fetch(`http://localhost:5000/updateVote/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        upvote: upVote + 1,
        downvote: downVote - 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated");
      });
  };
  const handleDownvoteCLick = () => {
    setDownVote((p) => p + 1);
    if (upVote === 0) {
      setUpVote(upVote);
    } else {
      setUpVote((p) => p - 1);
    }
    fetch(`http://localhost:5000/updateVote/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        upvote: upVote - 1,
        downvote: downVote + 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated");
      });
  };

  return (
    <div>
      <div className="container ">
        <div className="row d-flex flex-column text-center">
          <div className="col">
            <div className="row bg-white p-4">
              <div className="col-md-2">
                <img className="rounded-circle" width="70" src={photo} alt="" />
              </div>
              <div className="col-md-10 text-dark comment">
                <h6 style={{ color: "red" }} className="pt-2 text-danger">
                  {name}
                </h6>
                <p style={{ fontSize: "40px" }}>"{postDetails}"</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <b>
                    {" "}
                    <p style={{ fontSize: "22px", paddingTop: "15px" }}>
                      {upVote}
                    </p>
                  </b>
                  <svg
                    onClick={(id) => handleUpvoteCLick(id)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="25"
                    fill="green"
                    class="bi bi-arrow-up-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                  </svg>
                  <svg
                    onClick={(id) => handleDownvoteCLick(id)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="25"
                    fill="red"
                    class="bi bi-arrow-down-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                  </svg>

                  <b>
                    {" "}
                    <p style={{ fontSize: "22px", paddingTop: "15px" }}>
                      {downVote}
                    </p>
                  </b>
                </div>
                <Comments id={_id}></Comments>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
