import React,{useState, useContext} from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
// import AuthLinks from '../auth_links/AuthLinks';
// import TheameToggle from '../themeToggle/TheameToggle';
// import navLogo from "../../assets/logo1.png";
import facebook from "../../assets/images/facebook.png"
import instagram from "../../assets/images/instagram.png"
import tiktok from "../../assets/images/tiktok.png";
import utube from "../../assets/images/youtube.png" 
import pinterest from '../../assets/images/pinterest.png'
// import { IoClose } from "react-icons/io5";
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
          <a href="http://" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Jinx Sage Facebook account" /></a>
          <a href="http://" target="_blank" rel="noopener noreferrer"><img src={pinterest} alt="Jinx Sage pinterest account" /></a>
          
          <a href="http://" target="_blank" rel="noopener noreferrer"><img src={utube} alt="Jinx Sage utube account" /></a>
          <a href="http://" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Jinx Sage instagram account" /></a>
          <a href="http://" target="_blank" rel="noopener noreferrer"><img src={tiktok} alt="Jinx Sage TikTok account" /></a>
          
          
          
          
        </div>
      </div>
      <nav 
      id="header" 
      className={navbar ? "active" : ""}>
        <div className={toggle ? "header_wrapper container  increase" : "header_wrapper container"}>
          <a href="/" className='nav_logo'  onClick={( ) => setToggle(false)}>
          {/* Whispers of Jinx */}
          <img src={navLogo} alt="jinx the Sage logo"  className="nav_logo" width="10" height="auto" loading="lazy"/>
          </a>
          
          <div className={toggle ? "links toggle" : "links"}>
           {currentUser?.id && <ul className={toggle ? "header_middle toggle" : "header_middle"}>
              <li onClick={( ) => setToggle(false)}>
            {/* <Link to="/"></Link> */}
            <a href={`/profile/${currentUser.id}`}>{currentUser?.name}</a>
              </li>
              <li onClick={( ) => setToggle(false)}>
            {/* <Link to="#home_about"></Link> */}
            <a href="/create">Create Post</a>
              </li>
              <li onClick={( ) => setToggle(false)}>
                <a href="/authors">Authors</a>
            {/* <Link to="/music_videos"></Link> */}
              </li>
              <li onClick={( ) => setToggle(false)}>
            <Link to="/logout">Logout</Link>
              </li>
            </ul>}
            {!currentUser?.id && <ul className={toggle ? "header_middle toggle" : "header_middle"}>
              
              <li onClick={( ) => setToggle(false)}>
                <a href="/authors">Authors</a>
            {/* <Link to="/music_videos"></Link> */}
              </li>
              <li onClick={( ) => setToggle(false)}>
            <Link to="/login">Login</Link>
              </li>
            </ul>}
          {/* <div className="header_right">
              <button className="btn" onClick={( ) => setToggle(false)}>
            <span className="btn_animate"></span>
            <a href="#footer" className="link">Contact Us</a>
                </button>
          </div> */}
          </div>
        <div 
        onClick={() => setToggle(!toggle)}
        className={ toggle ? "humburger animate" : "humburger"}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        </div>
      </nav>
      <div className="nav_show container">
        <ul>
          <li><a href="">Make Money Online </a></li>
          <li><a href="">Spirituality </a></li>
          <li><a href="">Spells </a></li>
          <li><a href="">Product features </a></li>
          <li><a href="">Spirituality </a></li>
        </ul>
      </div>
    </div>
  
  )
}

export default Navbar