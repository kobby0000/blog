import React from 'react';
import "./randomCategoriesItems.css";
import { Link } from 'react-router-dom';
import PostAuthor from "../../components/postauthor/PostAuthor";

function RandomCategoriesItems({ postID, category, title="", thumbnail, description="", authorID, createdAt }) {
    const shortDescription = description.length > 100 ? description.substr(0, 100) + "..." : description;
    const shortTitle = title.length > 30 ? title.substr(0, 30) + "..." : title;

  return (
    <article className=' random_cartegories_items'>
            <Link rel="canonical" to={`/posts/${postID}`}>
            <div className="image_wrapper new_posts_img">
                <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`} alt={title}  loading="lazy"/>
            </div>
            </Link>
            <div className="new_posts_content_wrapper">
            <div className="new_posts_content">
                <Link rel="canonical" to={`/posts/${postID}`} className='post_author'>
                    <h3>{shortTitle}</h3>
                </Link>
                <Link  to={`/posts/${postID}`}>
                <p dangerouslySetInnerHTML= {{__html: shortDescription}}/>
                {/* <h1 dangerouslySetInnerHTML= {{__html: shortDescription}}/>
                <h2 dangerouslySetInnerHTML= {{__html: shortDescription}}/>
                <h3 dangerouslySetInnerHTML= {{__html: shortDescription}}/> */}
                </Link>
            </div>
            <div className="new_posts_footer">
                <PostAuthor authorID={authorID} createdAt={createdAt} />
                <Link rel="canonical" to={`/posts/categories/${category}`} className='btn_category'>{category}</Link>
            </div>
            </div>
        </article>
  )
}

export default RandomCategoriesItems;