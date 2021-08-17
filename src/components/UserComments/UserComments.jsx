import React from "react";

const UserComments = (props) => {
  const { name, comment } = props.usercomment;
  return (
    <div>
      <div className="row d-flex justify-content-start">
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
