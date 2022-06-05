import React from "react";

const Post = ({ post }) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <div class="card-body">
        <h5 class="card-title">{post.title}</h5>
        <p class="card-text">{post.author}</p>
      </div>
    </div>
  );
};

export default Post;
