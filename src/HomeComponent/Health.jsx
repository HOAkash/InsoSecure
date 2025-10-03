import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Term.css';

function Health({ setUserData }) {
  const [gender, setGender] = useState('male');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');
  const [country, setCountry] = useState('India');
  const navigate = useNavigate();

  const handleViewPlans = (e) => {
    e.preventDefault();

    if (!name.trim() || !dob || !mobile.trim()) {
      alert('Please fill all the fields!');
      return;
    }

    const data = { gender, name, dob, mobile, country };
    setUserData(data);
    navigate('/health-plan');
  };

  return (
    <form className="form-container" onSubmit={handleViewPlans}>
      <h2>Health Insurance</h2>
      <div className="gender-toggle">
        <button
          type="button"
          className={gender === 'male' ? 'active' : ''}
          onClick={() => setGender('male')}
        >
          Male
        </button>
        <button
          type="button"
          className={gender === 'female' ? 'active' : ''}
          onClick={() => setGender('female')}
        >
          Female
        </button>
      </div>

      <div className="input-group">
        <label>Your Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <label>Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <label>Mobile Number</label>
        <div className="mobile-field">
          <select value={country} onChange={(e) => setCountry(e.target.value)} required>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          <span>+91</span>
          <input
            type="number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
      </div>

      <button type="submit" className="view-plans-btn">View Plans</button>
    </form>
  );
}

export default Health;
