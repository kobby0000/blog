import React, { useState } from 'react';
import './newsletter.css'; 
import { IoCloseOutline } from "react-icons/io5";

const Newsletter = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Remove emailjs import and update handleSubmit
const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError("Please enter a valid email address");
    return;
  }

  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    // Check if response is JSON before parsing
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Server did not return JSON');
    }

    const data = await response.json();

    if (response.ok) {
      setIsSuccess(true);
      setEmail("");
    } else {
      throw new Error(data.message || 'Subscription failed');
    }
  } catch (err) {
    setError(err.message);
  }
};

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="popup_overlay text_center">
      <div className="popup_content">
        <button onClick={handleClose} className="close_button">
          <IoCloseOutline />
        </button>
        
        {!isSuccess ? (
          <>
            <h2>Subscribe to our newsletter</h2>
            <p>We're live now. Enjoy your experience!</p>
            
            <form onSubmit={handleSubmit} className='newsletter_form'>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && <p className="error_message">{error}</p>}
              
              <button type="submit"  className="subscribe_button">
                {/* {isLoading ? (
                  <div className="spinner"></div>
                ) : (  */}
                Subscribe
                {/* )} */}
              </button>
            </form>
          </>
        ) : (
          <div className="success_message text_center">
            <h2>Thank you!</h2>
            <p>You've successfully subscribed to our newsletter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;