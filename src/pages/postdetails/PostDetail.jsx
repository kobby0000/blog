import React from 'react';
import { Link } from 'react-router-dom';
import "./postDetail.css";
import PostAuthor from "../../components/postauthor/PostAuthor";


function PostDetail() {
  return (
    <section id="post_details">
      <div className="container post_details_wrapper">
        <PostAuthor />
        <div className="post_details_buttons">
          <Link to={`/post/werwer/edit`} className="btn_one">Edit</Link>
          <Link to={`/post/werwer/delete`} className="btn_one">Delete</Link>
        </div>
      </div>
    </section>
  )
}

export default PostDetail