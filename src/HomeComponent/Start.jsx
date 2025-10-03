import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import { useState } from "react";

function Start() {
  const products = [
    { title: '', path: '/term', icon: '', bg: 'term2.jpeg' },
    { title: '', path: '/health', icon: '', bg: 'health.jpeg' },
    { title: '', path: '/family-health', icon: '', bg: 'family2.jpeg' },
    { title: '', path: '/car', icon: '', bg: 'car.jpeg' },
    { title: '', path: '/two-wheeler', icon: '', bg: 'bike2.jpg' },
    { title: '', path: '/home', icon: '', bg: 'home1.jpeg' },
    { title: '', path: '/investment', icon: '', bg: 'invest.jpeg' },
    
    
  ];

  return (
    <div className="app-container">
      <Header />
      <Home products={products} />
      <Features />
      
      <Sponsors />
      <About />
      <Footer />
    </div>
  );
}

function Header() {
  const [showPolicies, setShowPolicies] = useState(false);

  const togglePolicies = () => setShowPolicies(!showPolicies);

  return (
    <header className="header">
      <div className="logo-container">
      <div className="shield">
        <div className="lock-icon">🔒</div>
      </div>
      <div className="logo-text">
        <span className="primary-text">Inso</span>
        <span className="highlight-text">Secure</span>
      </div>
      <div className="tagline">--TO SECURE YOUR LIFE--</div>
    </div>

      <nav className="nav">
        <ul className="nav-links">
         
          
          <li className="dropdown">
            <button onClick={togglePolicies} className="dropdown-btn">
              Policies
            </button>
            {showPolicies && (
              <ul className="dropdown-list">
                <li><a href="#">Term Insurance</a></li>
                <li><a href="#">Health Insurance</a></li>
                <li><a href="#">Family Health</a></li>
                 <li><a href="#">Two-Wheeler Insurance</a></li>
                <li><a href="#">Home Insurance</a></li>
                <li><a href="#">Investment Plans</a></li>
              </ul>
            )}
          </li>

         
          
        </ul>

        <div className="header-buttons">
          <a href="https://wa.me/7892562154" target="_blank" rel="noopener noreferrer">
            <button className="expert-btn">
              <img src="whatsapp.png" alt="WhatsApp" className="social-icon" />
              Chat With Expert
            </button>
          </a>
          <Link to="/login">
                   <button className="signin-btn">Log Out</button>
                 </Link>
        </div>
      </nav>
    </header>
  );
}

function Home({ products }) {
  return (
    <div>
      <Banner />
      
      <div className="product-slider">
        <div className="product-grid">
          {products.map((product, index) => (
            <Link
              key={index}
              to={product.path}
              className="product-card"
              style={{
                backgroundImage: `url(${product.bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="product-icon">{product.icon}</div>
              <h3 className="title">{product.title}</h3>
            </Link>
            
          ))}

        
          
        </div>
        
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="banner" style={{ backgroundColor: 'rgb(3, 14, 28)' }}>
      <div className="banner-content">
        <h2 style={{ color: "white" }}>Your Future, Our Priority</h2>
        <p style={{ color: "white", fontSize: "1.2rem", marginTop: "0.5rem" }}>
          Comprehensive coverage with up to <strong>25% off*</strong>
        </p>
        <p style={{ color: "white", fontSize: "1rem", marginTop: "0.5rem" }}>
          Flexible plans, quick approvals, and expert guidance for all your insurance needs.
        </p>
       
      </div>

      <div className="banner-discount">
        <span style={{ fontWeight: "bold" }}>0% GST Included</span>
        <span style={{ display: "block", fontSize: "0.85rem", marginTop: "0.2rem" }}>
          Limited time offer – secure your plan today!
        </span>
      </div>

      
    </div>
  );
}


function Features() {
  return (
    <div className="features-section">
      <h2>Why Choose InsoSecure?</h2>
      <div className="why-choose-us">
        <div className="feature-card">
          <img src="https://img.icons8.com/ios-filled/50/000000/customer-support.png" alt="Claims Assistance" className="feature-icon" />
          <div className="feature-content">
            <h3>Our claims assistance <span className="highlight">24x7*</span></h3>
            <p>Experts available round the clock for Health & Motor insurance claims.</p>
          </div>
        </div>

        <div className="feature-card">
          <img src="https://img.icons8.com/ios-filled/50/000000/help.png" alt="Ask Questions" className="feature-icon" />
          <div className="feature-content">
            <h3>Got a question about insurance?</h3>
            <p>Drop a message and we’ll help you quickly.</p>
          </div>
        </div>

        <div className="feature-card">
          <img src="https://img.icons8.com/ios-filled/50/000000/hacker.png" alt="Fraud Alert" className="feature-icon" />
          <div className="feature-content">
            <h3>Beware of Insurance <span style={{color:"red"}}>Fraudsters</span></h3>
            <p>Stay informed and protect yourself from fraudulent schemes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}



function Sponsors() {
  return (
    <div className="sponsors-section">
      <h2>Our Partners</h2>
      <div className="sponsors-list">
        <img src="stem.png" alt="Sponsor 1" />
        <img src="ICICI_logo.webp" alt="Sponsor 2" />
        <img src="HDFC_Life_logo.avif" alt="Sponsor 3" />
        <img src="axis.avif" alt="Sponsor 4" />
        <img src="TATA.png" alt="Sponsor 5" />
        <img src="HSBC.avif" alt="Sponsor 6" />
        <img src="BAJAJ.png" alt="Sponsor 7" />
        <img src="SBI.webp" alt="Sponsor 8" />
        <img src="kotak.avif" alt="Sponsor 9" />
      </div>
    </div>
  );
}
function About() {
  return (
    <div className="about-section">
      <h2>About Us</h2>
      <p>
        At InsoSecure, we are dedicated to helping you secure your future with a variety of insurance plans tailored to meet your needs.
        Our mission is to offer affordable, reliable, and comprehensive coverage while providing expert guidance and seamless customer support.
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>© 2025 InsoSecure. All rights reserved.</div>
      <div className="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <div>Contact us: info@insosecure.com | +91 7892562154</div>
    </footer>
  );
}

export default Start;
