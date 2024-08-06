import React from 'react';
import { Link } from 'react-router-dom';
import "./postDetail.css";
import PostAuthor from "../../components/postauthor/PostAuthor";
import image1 from "../../assets/images/travel.png";


function PostDetail() {
  return (
    <section id="post_details">
      <div className="container post_details_wrapper">
        <PostAuthor />
        <div className="post_details_buttons">
          <Link to={`/post/werwer/edit`} className="btn_one">Edit</Link>
          <Link to={`/post/werwer/delete`} className="btn_one">Delete</Link>
        </div>
        <h1>The post title goes here</h1>
        <div className="post_details_img">
          <img src={image1} alt="" />
        </div>
      </div>
    </section>
  )
}

export default PostDetail