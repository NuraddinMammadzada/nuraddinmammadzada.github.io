import React from 'react';
import "./styles/About.css"

const About = () => {
    return (
        <div className="about-page">
            <header className="about-header">
                <h1>About Us</h1>
                <p>We are dedicated to providing the best service for our customers.</p>
            </header>
            <section className="about-content">
                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>Our mission is to simplify your shopping experience by providing top-quality products at competitive prices.</p>
                </div>
                <div className="about-section">
                    <h2>Our Story</h2>
                    <p>Founded in 2021, we started as a small business with a big vision. Today, we serve thousands of happy customers worldwide.</p>
                </div>
                <div className="about-section">
                    <h2>Our Team</h2>
                    <p>We are a diverse team of professionals who are passionate about what we do. Our commitment to excellence drives us to deliver the best to our customers.</p>
                </div>
            </section>
            <section className="about-values">
                <div className="value">
                    <h3>Integrity</h3>
                    <p>We value honesty and transparency in all our dealings.</p>
                </div>
                <div className="value">
                    <h3>Quality</h3>
                    <p>We strive to maintain the highest standards in our products and services.</p>
                </div>
                <div className="value">
                    <h3>Innovation</h3>
                    <p>We embrace creativity and constantly seek new ways to improve.</p>
                </div>
            </section>
        </div>
    );
};

export default About;
