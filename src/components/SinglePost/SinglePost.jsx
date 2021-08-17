import React from "react";
import { Accordion } from "react-bootstrap";
import logo from "../../assets/avatar.png";
import "../Post/Post.css";

const SinglePost = (props) => {
  const { name, photo, postDetails } = props.allpost;
  return (
    <div>
      <div className="container ">
        <div className="row d-flex flex-column text-center">
          <div className="col">
            <div className="row bg-white p-4">
              <div className="col-md-2">
                <img width="70" src={photo} alt="" />
              </div>
              <div className="col-md-10 text-dark comment">
                <h5 className="pt-2">{name}</h5>
                <p>{postDetails}</p>
                <p>Upvote/Downvote</p>
                <Accordion className="mb-4" defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="font-weight-bold">
                      <p id="acHead">Comments</p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="row">
                        <div className="col-md-10 d-flex">
                          <img width="60" src={logo} alt="" />
                          <input
                            className="form-control comment-box"
                            type="text"
                            name=""
                            id=""
                          />
                          <button className="btn btn-primary comment-btn">
                            Comment
                          </button>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
