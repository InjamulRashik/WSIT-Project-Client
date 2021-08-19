import React, { useEffect, useState } from "react";
import SinglePost from "../SinglePost/SinglePost";

const Post = () => {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allPosts")
      .then((response) => response.json())
      .then((data) => setAllPosts(data.reverse()));
  }, []);

  return (
    <div>
      {allPosts.map((allpost, i) => (
        <SinglePost key={i} allpost={allpost}></SinglePost>
      ))}
    </div>
  );
};

export default Post;
