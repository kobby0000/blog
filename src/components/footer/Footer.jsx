import React from 'react';
import "./footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <ul className=' container footer_wrapper'>
        <li><Link to="/post/categories/:Agriculture">Agriculture</Link></li>
        <li><Link to="/post/categories/:Education">Education</Link></li>
        <li><Link to="/post/categories/:Politics">Politics</Link></li>
        <li><Link to="/post/categories/:Festival">Festival</Link></li>
        <li><Link to="/post/categories/:Entertainment">Entertainment</Link></li>
        <li><Link to="/post/categories/:Art">Art</Link></li>
        <li><Link to="/post/categories/:Projects">Projects</Link></li>
      </ul>
      <div className="footer_copyright">
        <small>All Rights Reserved &copy; Copyright, KeyCode</small>
      </div>
    </footer>
  )
}

export default Footer