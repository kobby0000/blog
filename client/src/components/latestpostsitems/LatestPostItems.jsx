import React from 'react';
import "./latestPostItems.css";
import { Link } from 'react-router-dom';
import PostAuthor from "../../components/postauthor/PostAuthor";

function LatestPostItems({ postID, category, title="", thumbnail, description="", authorID, createdAt }) {
    const shortDescription = description.length > 100 ? description.substr(0, 100) + "..." : description;
    const shortTitle = title.length > 30 ? title.substr(0, 30) + "..." : title;

  return (
    <article className='new_posts latests_posts'>
            <a rel="canonical" href={`/posts/${postID}`}>
            <div className="new_posts_img">
                <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`} alt={title}  loading="lazy"/>
            </div>
            </a>
            <div className="new_posts_content_wrapper">
            <div className="new_posts_content">
                <a rel="canonical" href={`/posts/${postID}`} className='post_author'>
                    <h3>{shortTitle}</h3>
                </a>
                {/* <a href={`/posts/${postID}`}>
                <p dangerouslySetInnerHTML= {{__html: shortDescription}}/>
                </a> */}
            </div>
            <div className="new_posts_footer">
                <PostAuthor authorID={authorID} createdAt={createdAt} />
                <a rel="canonical" href={`/posts/categories/${category}`} className='btn_category'>{category}</a>
            </div>
            </div>
        </article>
  )
}

export default LatestPostItems