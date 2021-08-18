import React, { useContext, useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { UserContext } from "../../App";
import UserComments from "../UserComments/UserComments";

const Comments = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [commentText, setCommentText] = useState("");
  const { id } = props;
  console.log(id);
  const handleBlur = (e) => {
    setCommentText(e.target.value);
  };
  const postComment = (id) => {
    const comments = {
      name: loggedInUser.name,
      comment: commentText,
    };
    fetch(`http://localhost:5000/addComment/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(comments),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated");
      });
  };
  const [userComments, setUserCommnets] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/comments/${id}`)
      .then((response) => response.json())
      .then((data) => setUserCommnets(data));
  }, [id]);

  return (
    <div>
      <Accordion className="mb-4" defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header className="font-weight-bold">
            <p id="acHead">Comments</p>
          </Accordion.Header>
          <Accordion.Body>
            {userComments.map((usercomment) => (
              <UserComments usercomment={usercomment}></UserComments>
            ))}
            <div className="row">
              <div className="col-md-10 d-flex">
                <img width="60" src={loggedInUser.photo} alt="" />
                <input
                  onBlur={handleBlur}
                  className="form-control comment-box"
                  type="text"
                  name=""
                  placeholder={`Comment As ${loggedInUser.name}`}
                  required
                />
                <button
                  onClick={postComment(id)}
                  className="btn btn-danger comment-btn"
                >
                  Comment
                </button>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Comments;
