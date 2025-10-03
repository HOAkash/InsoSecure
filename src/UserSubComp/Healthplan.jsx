import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Termplan.css';

function Healthplan({ userData, setSelectedPlan }) {
  const navigate = useNavigate();

  const plans = [
    {
      companyLogo: "ICICI_logo.webp",
      companyName: "ICICI Prudential",
      planName: "iProtect Smart Plus",
      lifeCover: "₹1 Cr",
      coverTillAge: "60 Yrs",
      claimSettled: "99.3 %",
      refundType: "Full refund of premium",
      addOns: "3 Free Add-ons",
      discount: "17.8% discount included",
      discountSave: "₹19.3 K",
      monthlyPremium: "₹832/month",
    },
    {
      companyLogo: "HDFC_Life_logo.avif",
      companyName: "HDFC Life",
      planName: "Click 2 Protect Supreme",
      lifeCover: "₹1 Cr",
      coverTillAge: "60 Yrs",
      claimSettled: "99.7 %",
      refundType: "Full refund of premium",
      addOns: "5 Free Add-ons",
      extraInfo: "You get min ₹3L back during 51-55 yrs on plan exit",
      discount: "15% discount included",
      discountSave: "₹660",
      monthlyPremium: "₹955/month",
    },
    {
      companyLogo: "axis.avif",
      companyName: "HDFC Life",
      planName: "Smart Term Plan Plus",
      lifeCover: "₹1 Cr",
      coverTillAge: "60 Yrs",
      claimSettled: "99.7 %",
      refundType: "Full refund of premium",
      addOns: "5 Free Add-ons",
      extraInfo: "You get min ₹3L back during 51-55 yrs on plan exit",
      discount: "15% discount included",
      discountSave: "₹660",
      monthlyPremium: "₹825/month",
    },
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    navigate('/payment');
  };

  return (
    <div className="plan-container">
      <h3 className='welcome'>Welcome, {userData ? userData.name : 'User'}</h3>
      {plans.map((plan, index) => (
        <div key={index} className="plan-card">
          <div className="plan-header">
            <img src={plan.companyLogo} alt={plan.companyName} height="50px" className="company-logo" />
            <div>
              <h3>{plan.planName}</h3>
              <p>{plan.companyName}</p>
            </div>
          </div>
          <div className="plan-details">
            <p><strong>Life Cover:</strong> {plan.lifeCover}</p>
            <p><strong>Cover Till Age:</strong> {plan.coverTillAge}</p>
            <p><strong>Claim Settled:</strong> {plan.claimSettled}</p>
          </div>
          <button className='btn' onClick={() => handleSelectPlan(plan)}>{plan.monthlyPremium}</button>
        </div>
      ))}
    </div>
  );
}

export default Healthplan;
