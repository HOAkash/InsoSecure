import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';
import { DataContext } from "../DataContext"; // adjust path

function Payment({ userData, selectedPlan }) {
  const navigate = useNavigate();
  const { requests, setRequests } = useContext(DataContext); // ✅ use context here

  if (!selectedPlan || !userData) {
    return <div>No plan selected or user data missing.</div>;
  }

  const handlePayment = () => {
    // Check if request already exists
    const existingRequest = requests.find(
      (req) =>
        req.user.name === userData.name &&
        req.plan.planName === selectedPlan.planName
    );

    if (existingRequest) {
      // Update existing request
      const updatedRequests = requests.map((req) =>
        req.user.name === userData.name &&
        req.plan.planName === selectedPlan.planName
          ? { ...req, status: "Paid" }
          : req
      );
      setRequests(updatedRequests);
    } else {
      // Create new request if not exists
      setRequests((prev) => [
        ...prev,
        { user: userData, plan: selectedPlan, status: "Paid" },
      ]);
    }

    alert("Payment successful!");
    navigate("/receipt"); // ✅ will work now
  };

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Selected Plan:</strong> {selectedPlan.planName}</p>
      <p><strong>Monthly Premium:</strong> {selectedPlan.monthlyPremium}</p>
      <p><strong>Company:</strong> {selectedPlan.companyName}</p>
      <p><strong>Discount:</strong> {selectedPlan.discount}</p>

      <button className="pay-btn" onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default Payment;
