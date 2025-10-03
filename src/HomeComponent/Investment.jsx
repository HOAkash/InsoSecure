import React, { useState } from 'react';
import './Term.css';

function Investment() {
  const [gender, setGender] = useState('male');
  const [name, setName] = useState('');
  
  const [mobile, setMobile] = useState('');

  return (
    <div className="form-container">
      <h2 className='h2'>Investment Plans</h2>
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
        <label>Select city</label>
        <div className="mobile-field">
          <select>
            <option>Bengaluru</option>
            <option>Mangaluru</option>
            <option>Shivamogga</option>
          </select>
          
         
        </div>
      </div>

      <button className="view-plans-btn">View Plans</button>
    </div>
  );
}

export default Investment;
