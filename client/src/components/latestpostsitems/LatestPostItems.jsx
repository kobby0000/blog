import React from 'react';
import "./latestPostItems.css";
import { Link } from 'react-router-dom';
import PostAuthor from "../../components/postauthor/PostAuthor";

function LatestPostItems({ postID, category, title="", thumbnail, description="", authorID, createdAt }) {
    const shortDescription = description.length > 100 ? description.substr(0, 100) + "..." : description;
    const shortTitle = title.length > 30 ? title.substr(0, 30) + "..." : title;

  return (
    <article className='new_posts'>
            <Link to={`/posts/${postID}`}>
            <div className="new_posts_img">
                <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`} alt={title} />
            </div>
            </Link>
            <div className="new_posts_content_wrapper">
            <div className="new_posts_content">
                <Link to={`/posts/${postID}`} className='post_author'>
                    <h3>{shortTitle}</h3>
                </Link>
                <Link to={`/posts/${postID}`}>
                <p dangerouslySetInnerHTML= {{__html: shortDescription}}/>
                </Link>
            </div>
            <div className="new_posts_footer">
                <PostAuthor authorID={authorID} createdAt={createdAt} />
                <Link to={`/posts/categories/${category}`} className='btn_category'>{category}</Link>
            </div>
            </div>
        </article>
  )
}

export default LatestPostItems