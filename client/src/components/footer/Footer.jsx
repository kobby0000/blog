import React from 'react';
import "./footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <ul className='footer_wrapper'>
        <li><Link to="posts/categories/Agriculture">Agriculture</Link></li>
        <li><Link to="/posts/categories/Education">Education</Link></li>
        <li><Link to="/posts/categories/Politics">Politics</Link></li>
        <li><Link to="/posts/categories/Festival">Festival</Link></li>
        <li><Link to="/posts/categories/Entertainment">Entertainment</Link></li>
        <li><Link to="/posts/categories/Art">Art</Link></li>
        <li><Link to="/posts/categories/Projects">Projects</Link></li>
      </ul>
      <div className="footer_copyright">
        <small>All Rights Reserved &copy; Copyright, KeyCode</small>
      </div>
    </footer>
  )
}

export default Footer