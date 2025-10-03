import React, { useState } from 'react';
import './Term.css';

function Term() {
  const [gender, setGender] = useState('male');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');

  return (
    <div className="form-container">
      <h2 className='h2'>Family Health Insurance</h2>
      <div className="gender-toggle">
        <button
          className={gender === 'male' ? 'active' : ''}
          onClick={() => setGender('male')}
        >
          Male
        </button>
        <button
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
        <label>Dependencies</label>
        <div className="mobile-field">
          <input
            type="number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
      </div>

      <button className="view-plans-btn">View Plans</button>
    </div>
  );
}

export default Term;
