import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./styles/Contact.css"
import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
const Contact = () => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed (2 seconds in this example)
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <>
       {loading && <LoadingScreen />}
    <div className="contact-page">
      {/* Header Section */}
      <div className="contact-header">
        <h2>Contact</h2>
        <p>Home &gt; Contact</p>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info">
        <div className="contact-details">
          <div className="contact-item">
            <FaMapMarkerAlt />
            <div>
              <h4>Address</h4>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className="contact-item">
            <FaPhone />
            <div>
              <h4>Phone</h4>
              <p>Mobile: (+84) 546-6789</p>
              <p>Hotline: (+84) 456-6789</p>
            </div>
          </div>
          <div className="contact-item">
            <FaClock />
            <div>
              <h4>Working Time</h4>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="contact-form">
          <h3>Get In Touch With Us</h3>
          <p>
            For more information about our products & services, feel free to
            drop us an email. Our staff is always here to help.
          </p>
          <form>
            <div>
              <input type="text" placeholder="Your Name" />
            </div>
            <div>
              <input type="email" placeholder="Email Address" />
            </div>
            <div>
              <input type="text" placeholder="Subject (Optional)" />
            </div>
            <div>
              <textarea placeholder="Message"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

    </div>
    </>
  );
};

export default Contact;
