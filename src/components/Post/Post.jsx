import React, { useEffect, useState } from "react";
import SinglePost from "../SinglePost/SinglePost";

const Post = () => {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    fetch("https://glacial-tundra-84158.herokuapp.com/allPosts")
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
