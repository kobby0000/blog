import React, { useState, useEffect } from "react";
import "./bulkEmail.css"; 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "../scrollToTop/scrollToTop"

const BulkEmail = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [showAll, setShowAll] = useState(false); 
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch all subscribers
  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/subscribe/list");
        const data = await response.json();
        if (Array.isArray(data)) {
          setSubscribers(data);
        } else {
          setSubscribers([]);
          console.error("Fetched data is not an array:", data);
          setError("Invalid data format received.");
        }
      } catch (err) {
        console.error("Error fetching emails:", err);
        setError("Failed to fetch subscribers.");
      }
    };
    fetchSubscribers();
  }, []);

  // Send bulk email
  const handleSendEmail = async () => {
    if (!subject || !message) {
      setError("Subject and message are required.");
      toast.error("Subject and message are required."); // Show error notification
      return;
    }

    setLoading(true);
    setError("");

    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/subscribe/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, message }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Emails sent successfully!"); // Show success notification
      } else {
        console.error("Error response:", data);
        setError(data.message || "Failed to send emails. Please check the server endpoint.");
        toast.error(data.message || "Failed to send emails."); // Show error notification
      }
    } catch (err) {
      console.error("Network or server error:", err);
      setError("Error sending emails. Please ensure the server is running and the endpoint is correct.");
      toast.error("Error sending emails. Please ensure the server is running."); // Show error notification
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bulk_email container">
      <h2>Send Bulk Emails</h2>
      {error && <p className="error">{error}</p>}

      <label>Subject:</label>
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Enter email subject"
      />

      <label className="message_label">Message:</label>
      <ReactQuill 
      className="react_quill"
        value={message} 
        onChange={(content) => setMessage(content)} 
      />
      <button onClick={handleSendEmail} disabled={loading}>
        {loading ? "Sending..." : "Send Emails"}
      </button>

      <div className="email_list">
        <h3>Subscribers List</h3>
        <ul>
          {(showAll ? subscribers : subscribers.slice(0, 10)).map((sub, index) => (
            <li key={index}>{sub.email}</li>
          ))}
        </ul>
        {!showAll && subscribers.length > 10 && (
          <button onClick={() => setShowAll(true)}>See All</button>
        )}
        {showAll && (
          <button onClick={() => setShowAll(false)}>Show Less</button>
        )}
      </div>
      <ToastContainer />
      <ScrollToTop />
    
      {/* <div
  style={{
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
    color: "#333",
    height: "100vh",
  }}
>
  <h2 style={{ 
    color: "#720740",
    textAlign: "center",
    }}>Thank you for subscribing!</h2>
  <div>
  <p>We're excited to have you on board. Stay tuned for updates and special offers.</p>
  </div>
  <p style={{ marginTop: "20px" }}>Best regards,</p>
  <p style={{ fontWeight: "bold" }}>The Blog Team</p>
</div> */}
    </div>
  );
};

export default BulkEmail;