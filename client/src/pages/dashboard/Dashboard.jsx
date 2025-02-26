import React,{ useState, useContext, useEffect } from 'react';
import "./dashboard.css";
import { Link, useNavigate, useParams } from 'react-router-dom';
import {UserContext} from '../../context/userContext';
// import { DummyPosts } from "../../data";
import axios from 'axios';
import Loader from '../../components/loader/Loader';
import DeletePost from '../deletepost/DeletePost';

function Dashboard() {
const [posts, setPosts] = useState([])
const navigate = useNavigate()
const [isLoading, setIsLoading] = useState(false)
const {id} = useParams();

  const {currentUser} = useContext(UserContext)
  const token = currentUser?.token;

  //redirect to login page for any user who isn't logged in
  useEffect(() => {
    if(!token) {
      navigate('/login')
    }
  }, [])


  useEffect (() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/users/${id}`, {withCredentials: true, headers: {Authorization: `Bearer ${token}`}})
        setPosts(response.data)
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false);
    }
    fetchPosts();
  }, [id])

  if(isLoading) {
    return<Loader/>
  }

  return (
    <section id="dashboard">
      {
        posts.length > 0 ? <div className="container dashboard_container">
          {
            posts.map((post) =>{
              return <article key={ post.id} className='dashboard_post'>
                <div className="dashboard_post_info">
                  <div className="dashboard_post_thumbnail">
                    <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`} alt="" />
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboard_post_actions">
                  <Link to={`/posts/${post._id}`} className='btn'>View</Link>
                  <Link to={`/posts/${post._id}/edit`} className='btn primary_background'>Edit</Link>
                 <DeletePost postId={post._id}/>
                </div>
              </article>
            })
          }
        </div>
        : <h1 className='text_center'>You have no post yet!</h1>
      }
    </section>
  )
}

export default Dashboard