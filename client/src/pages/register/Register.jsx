import React, {useState} from 'react';
import "./register.css";
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email:"",
    password:"",
    password2:""
  })
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value}
    })
  }

  const registerUser = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`, userData)
      const newUser = await response.data;
      console.log(newUser);
      if(!newUser){
        setError("Coulden't regisster user. Please try again")
      }
      navigate('/login')
    } catch (err) {
      setError(err.response.data.message)
    }
  }

  return (
    <section id="register">
      <div className="container register_wrapper">
        <h2>Sign Up</h2>
        <form  className="form register_form" onSubmit={registerUser}>
           { error && <p className="form_error_message">
            {error}
          </p>}
          <input type="text"  placeholder='Full Name' name="name" value={userData.name} onChange={changeInputHandler} autoFocus/>
          <input type="email"  placeholder='Enter Email' name="email" value={userData.email} onChange={changeInputHandler} />
          <input type="password"  placeholder='Password' name="password" value={userData.password} onChange={changeInputHandler}/>
          <input type="password"  placeholder='Confirm Password' name="password2" value={userData.password2} onChange={changeInputHandler}/>
          <button type='submit' className='btn_category text_center '>Register</button>
          <small>Already have an account? <Link to="/login">Sign In</Link></small>
        </form>
      </div>
    </section>
  )
}

export default Register