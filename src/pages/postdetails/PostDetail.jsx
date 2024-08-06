import React from 'react';
import "./postDetail.css";
import PostAuthor from "../../components/postauthor/PostAuthor";

function PostDetail() {
  return (
    <section id="post_details">
      <div className="container post_details_wrapper">
        <PostAuthor />
      </div>
    </section>
  )
}

export default PostDetail