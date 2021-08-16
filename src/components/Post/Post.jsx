import React from "react";
import "./Post.css";
import logo from "../../assets/avatar.png";
import { Accordion } from "react-bootstrap";

const Post = () => {
  return (
    <div>
      <div className="container ">
        <div className="row d-flex flex-column text-center">
          <div className="col">
            <div className="row bg-white">
              <div className="col-md-2">
                <img width="85" src={logo} alt="" />
              </div>
              <div className="col-md-10 text-dark comment">
                <h4 className="pt-2">This is the Post</h4>
                <p>Upvote/Downvote</p>
                <Accordion className="mb-4" defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Comments</Accordion.Header>
                    <Accordion.Body>
                      <div className="row">
                        <div className="col-md-10 d-flex">
                          <img width="50" src={logo} alt="" />
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

export default Post;
