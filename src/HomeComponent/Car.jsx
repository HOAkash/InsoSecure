import React, { useState } from 'react';
import './Term.css';

function Car() {
  
  const [number, setNumber] = useState('');
  
  

  return (
    <div className="form-container">
      <h2 className='h2'>Car Insurance</h2>
       
      <div className="input-group">
        <label>CAR NUMBER (eg.KA-15-EC-1234)</label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      

     

      

      <button className="view-plans-btn">View Plans</button>
    </div>
  );
}

export default Car;
