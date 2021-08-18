import React from "react";

const UserComments = (props) => {
  const { name, photo, comment } = props.usercomment;
  return (
    <div>
      <div className="row d-flex justify-content-start">
        <img src={photo} alt="" />
        <div className="col-md-4">
          <b>
            <p>{name}</p>
          </b>
        </div>
        <div className="col-md-6">
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default UserComments;
