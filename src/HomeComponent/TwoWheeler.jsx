import React, { useState } from 'react';
import './Two.css';

function TwoWheeler() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleViewPlans = async (e) => {
    e.preventDefault();

    if (!number.trim()) {
      alert('Please enter the vehicle number!');
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      // Simulate network delay of 1.5 seconds
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock API response
      const data = {
        vehiclenumber: number,
        owner: "Akash",
        model: "Scooter X100",
        registration_date: "2021-05-12",
        status: "Active",
        insurance_expiry: "2024-06-30"
      };

      setResult(data);
    } catch (error) {
      console.error('Error fetching vehicle details:', error);
      alert('Failed to fetch vehicle details!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="for-container">
      <h2 className="h2">2 Wheeler Insurance</h2>

      <div className="input-group">
        <label>Two Wheeler NUMBER (eg. KA-15-EC-1234)</label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <button className="view-plans-btn" onClick={handleViewPlans}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>

      {result && (
        <div className="result-container">
          <h3>Vehicle Details</h3>
          <p><strong>Registration Number:</strong> {result.vehiclenumber}</p>
          <p><strong>Owner:</strong> {result.owner}</p>
          <p><strong>Model:</strong> {result.model}</p>
          <p><strong>Registration Date:</strong> {result.registration_date}</p>
          <p><strong>Status:</strong> {result.status}</p>
          <p><strong>Insurance Expiry:</strong> {result.insurance_expiry}</p>
        </div>
      )}
    </div>
  );
}

export default TwoWheeler;
