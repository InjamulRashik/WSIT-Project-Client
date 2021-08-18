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
    fetch(`http://localhost:5000/updateVote/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        upvote: upVote + 1,
        downvote: `${downvote}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated");
      });
  };
  const handleDownvoteCLick = () => {
    setDownVote((p) => p + 1);
    fetch(`http://localhost:5000/updateVote/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        upvote: `${upvote}`,
        downvote: downvote + 1,
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
                <h5 className="pt-2">{name}</h5>
                <p>{postDetails}</p>
                <div>
                  <div>
                    <h2>{upVote}</h2>
                    <button onClick={(id) => handleUpvoteCLick(id)}>
                      Upvote
                    </button>
                  </div>
                  <div>
                    <h2>{downVote}</h2>
                    <button onClick={(id) => handleDownvoteCLick(id)}>
                      DownVote
                    </button>
                  </div>
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
