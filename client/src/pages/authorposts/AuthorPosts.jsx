import React,{useState,useEffect} from 'react';
import "./authorposts.css";
import PostItem from '../../components/postitem/PostItem';
import { useParams } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import axios from 'axios';


function AuthorPosts() {
  const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const {id} = useParams();

    useEffect(() => {
      const fetchPost = async () => {
        setIsLoading(true)
        try {
          const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/users/${id}`)
          setPosts(response?.data)
        } catch (err) {
          console.log(err)
        }

        setIsLoading(false)
      }

      fetchPost();
    }, [id])

    if(isLoading) {
      return<Loader/>
    }

  return (
    <section id="posts">
           {posts.length > 0 ? <div className="post_wrapper author_posts container">
            {posts.map(({_id:id,thumbnail,category,title,description,creator,createdAt}) => 
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

export default AuthorPosts