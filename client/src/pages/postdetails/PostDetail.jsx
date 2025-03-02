import React, {useContext, useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import "./postDetail.css";
import PostAuthor from "../../components/postauthor/PostAuthor";
import Loader from '../../components/loader/Loader';
import DeletePost from '../../pages/deletepost/DeletePost';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import LatestPosts from '../../components/latestPosts/LatestsPosts';
import { UserContext } from '../../context/userContext';
import axios from 'axios';


function PostDetail() {
  const {id} = useParams()
  const [post, setPost] = useState(null)
  const [creatorID, setCreatorID] = useState(null);
  const [error, setError]= useState(null)
  const [isLoading, setIsLoading]= useState(false)

  const {currentUser} = useContext(UserContext);


  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`)
        setPost(response.data)
        setCreatorID(response.data.creator)

        // console.log('currentUser:', currentUser);
        // console.log('post.creator:', response.data.creator);
      } catch (error) {
        setError(error)
      }
      setIsLoading(false)
    }
    
    getPost()

  }, [])

  if(isLoading) {
    return<Loader/>
  }

  return (
    <section id="post_details">
      {error && <p className='error'>{error}</p>}
      {post && <div className="container post_details_wrapper">
      <div className='left'>
        <div className="post_details_header">
        <PostAuthor authorID={post.creator} createdAt={post.createdAt}/>
          {currentUser?.id === String(post?.creator) && 
          <div className="post_details_buttons">
        <Link to={`/posts/${post?._id}/edit`} className="btn_one">Edit</Link>
        <DeletePost postId={id}/> 
        </div>
        }
        
        </div>
        <div className="title">
        <h1>{post.title}</h1>
        <div className="share">
          <Link to='/'><FaSquareXTwitter className='icon'/></Link>
          <Link to='/'><FaFacebookSquare className='icon'/></Link>
          <Link to='/'><FaLinkedin className='icon'/></Link>
        </div>
        </div>
        <div className="post_details_img">
          <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`} alt="" />
        </div>
        <p dangerouslySetInnerHTML={{__html: post.description}}></p>
        </div>
        <div className="right">
          <p>Latests Posts</p>
          <LatestPosts />
        </div>
      </div>}
        
    </section>
  )
}

export default PostDetail