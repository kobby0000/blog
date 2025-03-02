import React, {useState, useContext} from 'react';
import "./login.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {UserContext} from '../../context/userContext.js';

function Login() {
  const [userData, setUserData] = useState({
    email:"",
    password:""
  })

  const [error, setError] = useState();
  const navigate = useNavigate();

  const {setCurrentUser} = useContext(UserContext);

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value}
    })
  }

  const loginUser = async (e) => {
    e.preventDefault();
    setError('')

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`, userData)
      const user = await response.data;
      setCurrentUser(user)
      navigate('/')
    } catch (err) {
      setError(err.response.data.message)
    }
  }

  return (
    <section id="register">
      <div className="container register_wrapper">
        <h2>Sign In</h2>
        <form  className="form register_form" onSubmit={loginUser}>
         {error && <p className="form_error_message">
            {error}
          </p>}
          <input type="email"  placeholder='Enter Email' name="email" value={userData.email} onChange={changeInputHandler} autoFocus />
          <input type="password"  placeholder='Password' name="password" value={userData.password} onChange={changeInputHandler}/>
          <button type='submit' className='btn_category text_center '>Sign In</button>
          {/* <small>Dont have an account? <Link to="/register">Sign up</Link></small> */}
        </form>
      </div>
    </section>
  )
}

export default Login