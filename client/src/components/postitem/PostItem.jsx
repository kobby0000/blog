import React from 'react';
import "./postitem.css";
import { Link } from 'react-router-dom';
import PostAuthor from "../../components/postauthor/PostAuthor";

function PostItem({ postID, category, title="", thumbnail, description="", authorID, createdAt }) {
    const shortDescription = description.length > 100 ? description.substr(0, 100) + "..." : description;
    const shortTitle = title.length > 30 ? title.substr(0, 30) + "..." : title;

    return (
        <article className='post'>
            <Link rel="canonical" to={`/posts/${postID}`}>
            <div className="post_img">
                <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`} alt={title} />
            </div>
            </Link>
            <div className="post_content_wrapper">
            <div className="post_content">
                <Link rel="canonical" to={`/posts/${postID}`} className='post_author'>
                    <h3>{shortTitle}</h3>
                </Link>
                <Link rel="canonical" to={`/posts/${postID}`}>
                <p dangerouslySetInnerHTML= {{__html: shortDescription}}/>
                </Link>
            </div>
            {/* <div className="post_footer">
                <PostAuthor authorID={authorID} createdAt={createdAt} />
                <Link to={`/posts/categories/${category}`} className='btn_category'>{category}</Link>
            </div> */}
            </div>
        </article>
    );
}

export default PostItem;