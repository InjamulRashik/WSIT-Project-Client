import React, { useContext } from "react";
import { Accordion } from "react-bootstrap";
import { UserContext } from "../../App";
import logo from "../../assets/avatar.png";
import Comments from "../Comments/Comments";
import "../Post/Post.css";

const SinglePost = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { _id, name, photo, postDetails } = props.allpost;

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
                <div></div>
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
