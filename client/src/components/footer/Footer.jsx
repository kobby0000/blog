import React from 'react';
import "./footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <ul className='footer_wrapper'>
        <li><Link rel="canonical" to="posts/categories/Agriculture">Agriculture</Link></li>
        <li><Link rel="canonical" to="posts/categories/Education">Education</Link></li>
        <li><Link rel="canonical" to="posts/categories/Tourism">Tourism</Link></li>
        <li><Link rel="canonical" to="/posts/categories/Daily Dive">Quote Dive</Link></li>
        <li><Link rel="canonical" to="/posts/categories/Entertainment">Entertainment</Link></li>
        <li><Link rel="canonical" to="/posts/categories/Art">Art</Link></li>
        <li><Link rel="canonical" to="/posts/categories/Projects">Projects</Link></li>
      </ul>
      <div className="footer_copyright">
        <small>All Rights Reserved &copy; Copyright, KeyCode</small>
      </div>
    </footer>
  )
}

export default Footer