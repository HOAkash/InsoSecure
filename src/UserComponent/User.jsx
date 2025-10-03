import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NewPolicy from "./NewPolicy";
import History from "./History";
import ClaimPolicy from "./ClaimPolicy";
import DeleteAccount from "./DeleteAccount";
import Feedback from "./Feedback";
import "./New.css";

function User() {
  const userData = {
    name: "John Doe",
    gender: "Male",
    dob: "1990-01-01",
    mobile: "1234567890",
    country: "India"
  };

  const selectedPlan = {
    planName: "Health Plus",
    companyName: "ABC Insurance",
    monthlyPremium: "₹1200",
    discount: "10%"
  };

  return (
    <div className="dashboard-wrapper">
      <Header />
      <div className="dashboard-container">
        <h2>User Dashboard</h2>
        <div className="nav-buttons">
          <Link to="/user"><button>New Policy</button></Link>
          <Link to="/user/history"><button>History</button></Link>
          <Link to="/user/claim-policy"><button>Claim Policy</button></Link>
          <Link to="/user/delete-account"><button>Account</button></Link>
          <Link to="/user/feedback"><button>Feedback</button></Link>
        </div>

        <div className="dashboard-content">
          <Routes>
            <Route path="/" element={<NewPolicy />} />
           <Route path="history" element={<History userData={userData} selectedPlan={selectedPlan} />} />
            <Route path="claim-policy" element={<ClaimPolicy userData={userData} selectedPlan={selectedPlan}/>} />
            <Route path="delete-account" element={ <DeleteAccount userData={userData} />} />
            <Route path="feedback" element={<Feedback />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="logo">InsoSecure</div>
      <div className="header-buttons">
        <a
          href="https://wa.me/6363550532"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="expert-btn">
            <img src="whatsapp.png" alt="whatsapp" className="social-icon"/>
            Chat With Expert
          </button>
        </a>
        <Link to="/login">
          <button className="signin-btn">Log Out</button>
        </Link>
      </div>
    </header>
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
      <div>Contact us: info@insosecure.com | +91 6363550532</div>
    </footer>
  );
}

export default User;
