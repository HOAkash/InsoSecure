import React from 'react';
import './History.css';

function History({ userData, selectedPlan }) {
  if (!selectedPlan || !userData) {
    return <div className="history-container">No history data available.</div>;
  }

  return (
    <div className="history-container">
      <h3>Information of the person's life insured</h3>
      <div className="history-grid">
        <div className="grid-item">
          <span className="label">Name of Life Insured</span>
          <span className="value">{userData.name}</span>
        </div>
        <div className="grid-item">
          <span className="label">Gender of Insured</span>
          <span className="value">{userData.gender}</span>
        </div>
        <div className="grid-item">
          <span className="label">Civil Status of Insured</span>
          <span className="value">Married</span>
        </div>
        <div className="grid-item">
          <span className="label">Residence Address of Insured</span>
          <span className="value">{userData.country}</span>
        </div>
        <div className="grid-item">
          <span className="label">Birthday of Insured</span>
          <span className="value">{userData.dob}</span>
        </div>
        <div className="grid-item">
          <span className="label">Birthplace of Insured</span>
          <span className="value">San Antonio</span>
        </div>
        <div className="grid-item">
          <span className="label"> Monthly Premium</span>
          <span className="value">{selectedPlan.monthlyPremium}</span>
        </div>
        <div className="grid-item">
          <span className="label">Plan Name</span>
          <span className="value">{selectedPlan.planName}</span>
        </div>
        <button>Claim Policy</button>
      </div>
    </div>
  );
}

export default History;
