import React from 'react';
import "./postitem.css";
import { Link } from 'react-router-dom';
import PostAuthor from "../../components/postauthor/PostAuthor";

function PostItem({ postID, category, title="", image, description="", authorId }) {
    const shortDescription = description.length > 100 ? description.substr(0, 100) + "..." : description;
    const shortTitle = title.length > 30 ? title.substr(0, 30) + "..." : title;

    return (
        <article className='post'>
            <div className="post_img">
                <img src={image} alt={shortTitle} />
            </div>
            <div className="post_content">
                <Link to={`/posts/${postID}`} className='post_author'>
                    <h3>{shortTitle}</h3>
                </Link>
                <p>{shortDescription}</p>
            </div>
            <div className="post_footer">
                <PostAuthor authorId={authorId} />
                <Link to={`/post/categories/${category}`} className='btn_category'>{category}</Link>
            </div>
        </article>
    );
}

export default PostItem;