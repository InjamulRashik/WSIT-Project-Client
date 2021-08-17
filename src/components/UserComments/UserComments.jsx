import React from "react";

const UserComments = (props) => {
  const { name, comment } = props.usercomment;
  return (
    <div>
      <div className="row d-flex justify-content-between">
        <div>
          <p>{name}</p>
        </div>
        <div>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default UserComments;
