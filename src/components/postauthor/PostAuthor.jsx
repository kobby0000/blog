import React from 'react';
import "./postauthor.css";
import { Link } from 'react-router-dom';
import Avatar from "../../assets/images/music.jpg";

function PostAuthor() {
  return (
    <Link to={`/posts/user/s`} className="post_author">
      <div className="post_author_avater">
        <img src={Avatar} alt="avatar" />
      </div>
      <div className="post_author_details">
        <h5>By: Gaza Money</h5>
        <small>Just Now</small>
      </div>
    </Link>
  )
}

export default PostAuthor