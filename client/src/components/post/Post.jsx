import React, { useState, useEffect } from 'react';
import "./post.css";
import PostItem from '../postitem/PostItem';
import Loader from '../loader/Loader';
import axios from 'axios';



function Post() {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      const fetchPost = async () => {
        setIsLoading(true)
        try {
          const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`)
          setPosts(response?.data)
        } catch (err) {
          console.log(err)
        }

        setIsLoading(false)
      }

      fetchPost();
    }, [])

    if(isLoading) {
      return<Loader/>
    }

  return (
    <section id="posts">
           {posts.length > 0 ? <div className="post_wrapper">
            {posts.slice(0, 12).map(({_id:id,thumbnail,category,title,description,creator,createdAt}) => 
        <PostItem
          key={id}
          postID={id}
          thumbnail={thumbnail}
          category={category}
          title={title}
          description={description}
          authorID={creator}
          createdAt={createdAt}
        />
      )}
            </div> : 
            <h2 className='center'>No Posts Found</h2> 
            }
       
    </section>
  )
}

export default Post