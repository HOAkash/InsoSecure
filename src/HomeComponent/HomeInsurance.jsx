import React, { useState } from 'react';
import './Term.css';

function HomeInsurance() {
  
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');

  return (
    <div className="form-container">
     <h2 className='h2'>Home Insurance</h2>

      <div className="input-group">
        <label>Your Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Date of Birth</label>
        <div className="dob-field">
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          {/* <span className="age-tag">25 years</span> */}
        </div>
      </div>

      <div className="input-group">
        <label>Mobile Number</label>
        <div className="mobile-field">
          <select>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>
          <span>+91</span>
          <input
            type="number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
      </div>

       <div className="input-group">
        <label>What you want to cover ? </label>
        <div className="mobile-field">
          <select>
            <option>Home Structure</option>
            <option>Household Items</option>
            <option>Juvelery & Valuables</option>
            <option>Home Loan Protection</option>
          </select>
         
        </div>
      </div>

      <button className="view-plans-btn">View Free Quotes</button>
    </div>
  );
}

export default HomeInsurance;
