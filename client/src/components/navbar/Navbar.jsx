import React,{useState, useContext} from 'react';
import "./navbar.css";
import { NavLink,Link } from 'react-router-dom';
// import AuthLinks from '../auth_links/AuthLinks';
// import TheameToggle from '../themeToggle/TheameToggle';
// import navLogo from "../../assets/logo1.png";
import facebook from "../../assets/images/facebook.png"
import instagram from "../../assets/images/instagram.png"
import tiktok from "../../assets/images/tiktok.png";
import utube from "../../assets/images/youtube.png" 
import pinterest from '../../assets/images/pinterest.png'
// import { IoClose } from "react-icons/io5";/
import { IoClose } from "react-icons/io5";
import navLogo from "../../assets/images/logo2.png"

import { UserContext } from '../../context/userContext';


function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const {currentUser} = useContext(UserContext)
  

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);
  return (
    <div>
      <div className="nav_socials ">
        <div className="nav_socials_wrapper container">
          <a href="http://" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Jinx Sage Facebook Account" /></a>
          <a href="http://" target="_blank" rel="noopener noreferrer"><img src={pinterest} alt="Jinx Sage Pinterest Account" /></a>
          
          <a href="http://" target="_blank" rel="noopener noreferrer"><img src={utube} alt="Jinx Sage Youtube Account" /></a>
          <a href="http://" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Jinx Sage Instagram Account" /></a>
          <a href="http://" target="_blank" rel="noopener noreferrer"><img src={tiktok} alt="Jinx Sage TikTok Account" /></a>
          
          
          
          
        </div>
      </div>
      <nav 
      id="header" 
      className={navbar ? "active" : ""}>
        <div className={toggle ? "header_wrapper container  increase" : "header_wrapper container"}>
          <Link rel="canonical" to="/"   onClick={( ) => setToggle(false)}>
          {/* Whispers of Jinx */}
          <img src={navLogo} alt="jinx the Sage logo"  className="nav_logo" width="10" height="auto" loading="lazy"/>
          </Link>
          
          <div className={toggle ? "links toggle" : "links"}>
           {currentUser?.id && <ul className={toggle ? "header_middle toggle" : "header_middle"}>
              <li onClick={( ) => setToggle(false)}>
            {/* <Link to="/"></Link> */}
            <Link rel="canonical" to={`/profile/${currentUser.id}`}>{currentUser?.name}</Link>
              </li>
              <li onClick={( ) => setToggle(false)}>
            {/* <Link to="#home_about"></Link> */}
            <Link rel="canonical" to="/create">Create Post</Link>
              </li>
              <li onClick={( ) => setToggle(false)}>
                <Link to="/authors">Authors</Link>
            {/* <Link to="/music_videos"></Link> */}
              </li>
              <li onClick={( ) => setToggle(false)}>
            <Link to="/logout">Logout</Link>
              </li>
            </ul>}
            {!currentUser?.id && <ul className={toggle ? "header_middle toggle" : "header_middle"}>
              
              <li onClick={( ) => setToggle(false)}>
                <Link href="/authors">Authors</Link>
            {/* <Link to="/music_videos"></Link> */}
              </li>
              <li onClick={( ) => setToggle(false)}>
            <Link to="/login">Login</Link>
              </li>
              <li>
              <Link to="/" className="btn" onClick={( ) => setToggle(false)}>
            Contact Us
                </Link>
              </li>
            </ul>}
          
          </div>
        <div 
        onClick={() => setToggle(!toggle)}
        className={ toggle ? "humburger animate" : "humburger"}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          {/* <IoClose className='close'/> */}
        </div>
        </div>
      </nav>
      <div className="catchy container">
        <div className="left">
        <h1>Your Destination for Creative Knowlage and Growth </h1>
        <p>Please contact us for more info.</p>
        </div>
      </div>
      <div className="nav_show">
        <ul>
        <li><NavLink rel="canonical" to="/"  className={({ isActive }) => (isActive ? "active" : "")}>All posts </NavLink></li>
          <li><NavLink rel="canonical" to="/posts/categories/Tourism"  className={({ isActive }) => (isActive ? "active" : "")}>Tourism/Hospitality </NavLink></li>
          <li><NavLink rel="canonical" to="/posts/categories/How-to"  className={({ isActive }) => (isActive ? "active" : "")}>Make Money Online </NavLink></li>
          <li><NavLink rel="canonical" to="/posts/categories/Health&Fitness"  className={({ isActive }) => (isActive ? "active" : "")}>Health&Fitness </NavLink></li>
          <li><NavLink rel="canonical" to="/posts/categories/Product-Features"  className={({ isActive }) => (isActive ? "active" : "")}>Product features </NavLink></li>
          <li><NavLink rel="canonical" to="/posts/categories/Spirituality"  className={({ isActive }) => (isActive ? "active" : "")}>Spirituality </NavLink></li>
          <li><NavLink rel="canonical" to="/posts/categories/Art"  className={({ isActive }) => (isActive ? "active" : "")}>Design/Art </NavLink></li>
        </ul>
      </div>
    </div>
  
  )
}

export default Navbar