import React from 'react';
import "./navbar.css";
// import AuthLinks from '../auth_links/AuthLinks';
import TheameToggle from '../themeToggle/TheameToggle';
import facebook from "../../assets/images/facebook.png"
import instagram from "../../assets/images/instagram.png"
import tiktok from "../../assets/images/tiktok.png";
import utube from "../../assets/images/youtube.png" 
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";


function Navbar() {
  return (
    <div id="header">
        <nav className="container header_wrapper">
            <div className="logo">
              <a href="/">
              Blog<span>post</span>.
              </a>
              </div>
            <ul className='nav_links'>
             {/* <TheameToggle /> */}
                <li><a href="/">Home</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">About</a></li>
            </ul>
            <div className="social">
                <a href=""><img className='social_icon' src={facebook} alt="" /></a>
                <a href=""><img className='social_icon' src={instagram} alt="" /></a>
                <a href=""><img className='social_icon' src={utube} alt="" /></a>
                <a href=""><img className='social_icon' src={tiktok} alt="" /></a>
            </div>
            {/* <AuthLinks/> */}
            <div>
              <FaBars />
              <IoClose />
            </div>
        </nav>
    </div>
  )
}

export default Navbar