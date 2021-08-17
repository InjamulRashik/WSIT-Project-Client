import React, { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { UserContext } from "../../App";

const PosterPage = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  const [postBody, setPostBody] = useState("");

  const { handleSubmit } = useForm();

  const handleChange = (e) => {
    setPostBody(e.target.value);
  };

  const onSubmit = () => {
    const posts = {
      name: loggedInUser.name,
      photo: loggedInUser.photo,
      postDetails: postBody,
    };
    fetch("http://localhost:5000/addPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(posts),
    }).then((res) => res.json());
    window.confirm("Order Placed Successfully!");
  };

  return (
    <div>
      <div className="container mt-4 d-flex justify-content-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card
            style={{
              width: "50%",
              textAlign: "center",
              color: "black",
              borderRadius: "20px",
              boxShadow: "0px 3px 14px 5px rgba(134, 134, 134, 0.73)",
            }}
          >
            <Card.Header>
              {" "}
              <b>What is not inside your mind?</b>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <textarea
                  onChange={handleChange}
                  value={postBody}
                  type="text"
                  name=""
                  id=""
                  className="text-area w-100 border-2 border-danger"
                  placeholder="Write your post here"
                />
              </Card.Text>
              <Card.Title
                style={{
                  fontSize: "medium",
                }}
              >
                <img
                  width="50"
                  className="rounded-circle me-2"
                  src={loggedInUser.photo}
                  alt=""
                />{" "}
                Posting as {loggedInUser.name}
              </Card.Title>
              <Button variant="danger">Post Status</Button>
            </Card.Body>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default PosterPage;
