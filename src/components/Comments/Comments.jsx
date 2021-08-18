import React, { useContext, useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import UserComments from "../UserComments/UserComments";

const Comments = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [commentText, setCommentText] = useState();
  const { id } = props;

  const { handleSubmit, reset, register } = useForm();

  const handleBlur = (e) => {
    setCommentText(e.target.value);
  };

  const fetchComments = () => {
    fetch(`http://localhost:5000/comments/${id}`)
      .then((response) => response.json())
      .then((data) => setUserCommnets(data));
  };

  const onSubmit = (data) => {
    const comments = {
      name: loggedInUser.name,
      photo: loggedInUser.photo,
      comment: data.Comment,
    };

    fetch(`http://localhost:5000/addComment/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(comments),
    })
      .then((data) => {
        reset();
        fetchComments();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [userComments, setUserCommnets] = useState([]);
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      <Accordion className="mb-4" defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header className="font-weight-bold">
            <p id="acHead">Comments</p>
          </Accordion.Header>
          <Accordion.Body>
            {userComments.map((usercomment) => (
              <UserComments
                key={usercomment.id}
                usercomment={usercomment}
              ></UserComments>
            ))}
            <div className="row">
              <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-12 d-flex">
                  <img width="100" src={loggedInUser.photo} alt="" />
                  <div className="col-md-6">
                    <input
                      {...register("Comment")}
                      className="ms-4 form-control comment-box mb-2"
                      type="text"
                      placeholder={`Comment As ${loggedInUser.name}`}
                      required
                    />
                    <input
                      type="submit"
                      // onClick={postComment(id)}
                      className="btn btn-danger comment-btn ms-4"
                      value="Comment"
                    />
                  </div>
                </div>
              </form>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Comments;
