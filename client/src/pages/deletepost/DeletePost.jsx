import React,{useEffect, useContext} from 'react';
import "./deletepost.css";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {UserContext} from '../../context/userContext';
import axios from 'axios';

function DeletePost({postId: id}) {
  const navigate = useNavigate();
  const location = useLocation();

  const {currentUser} = useContext(UserContext)
  const token = currentUser?.token;

  //redirect to login page for any user who isn't logged in
  useEffect(() => {
    if(!token) {
      navigate('/login')
    }
  }, [])

  const removePost = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/posts/${id}`, 
        {
          withCredentials: true, 
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      if (response.status == 200) {
        if (location.pathname == `/myposts/${currentUser.id}`) {
          navigate(0); // Reloads current route
        } else {
          navigate('/'); // Redirect to home page
        }
      }
    } catch (error) {
      console.error("Error deleting post:", error.response?.data || error.message);
      if (error.response) {
        // Log backend error response
        console.error("Backend Response:", error.response.data);
      } 
      else {
        console.error("Network/Other Error:", error.message);
      }
      if (error.response) {
        console.error("Error Response:", error.response.data);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <Link className="btn_one" onClick={() => removePost(id)} >Delete</Link>
  )
}

export default DeletePost