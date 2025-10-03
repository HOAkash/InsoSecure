import React from 'react';
import './History.css';

function Account({ userData }) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      // Call API to delete account
      alert("Your account has been deleted.");
    }
  };

  if (!userData) {
    return <div className="account-container">No user data available.</div>;
  }

  return (
    <div className="account-container">
      <h2>Account Information</h2>
      <div className="info-grid">
        <div className="info-item">
          <span className="label">Name of Life Insured:</span>
          <span className="value">{userData.name}</span>
        </div>
        <div className="info-item">
          <span className="label">Gender of Insured:</span>
          <span className="value">{userData.gender}</span>
        </div>
        <div className="info-item">
          <span className="label">Civil Status:</span>
          <span className="value">{userData.status}</span>
        </div>
        <div className="info-item">
          <span className="label">Residence Address:</span>
          <span className="value">{userData.address}</span>
        </div>
        <div className="info-item">
          <span className="label">Birthday:</span>
          <span className="value">{userData.dob}</span>
        </div>
        <div className="info-item">
          <span className="label">Birthplace:</span>
          <span className="value">{userData.birthplace}</span>
        </div>
        <div className="info-item">
          <span className="label">Age at Issuance:</span>
          <span className="value">{userData.age}</span>
        </div>
        <div className="info-item">
          <span className="label">Email Address:</span>
          <span className="value">{userData.email}</span>
        </div>
      </div>

      <button className="delete-btn" onClick={handleDelete}>
        Delete Account
      </button>
    </div>
  );
}

export default Account;
