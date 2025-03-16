import React,{useState,useEffect} from 'react';
// import PostItem from '../../components/postitem/PostItem';
import { useParams } from 'react-router-dom';
// import Loader from '../../components/loader/Loader';
import axios from 'axios';
const PostItem = React.lazy(() => import('../../components/postitem/PostItem'))


function PostsCategories() {
  const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const {category} = useParams();

    useEffect(() => {
      const fetchPost = async () => {
        setIsLoading(true)
        try {
          const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/categories/${category}`)
          setPosts(response?.data)
        } catch (err) {
          console.log(err)
        }

        setIsLoading(false)
      }

      fetchPost();
    }, [category])

    // if(isLoading) {
    //   return<Loader/>
    // }

  return (
    <section id="posts">
           {posts.length > 0 ? <div className="post_wrapper categories_wrapper container">
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

export default PostsCategories