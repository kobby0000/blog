import React from 'react';
import "./errorPage.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <section id='errorpage'>
      <div className="errorpage_wrapper">
        <Link className='btn' to="/">Go Back Home</Link>
        <h2 className='text_center'>Page Not Found</h2>
      </div>
    </section>
  )
}

export default ErrorPage