import React, { useState } from 'react';
import './History.css';

function Feedback() {
  const [selectedOption, setSelectedOption] = useState('');
  const [comments, setComments] = useState('');

  const options = [
    "Problem faced during payment",
    "Query regarding insurance plans",
    "Technical issue on the website",
    "Suggestion to improve service",
    "Other"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback submitted!\nOption: ${selectedOption}\nComments: ${comments}`);
    setSelectedOption('');
    setComments('');
  };

  return (
    <div className="feedback-container">
      <h2>Feedback & Support</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="option">Select a topic:</label>
        <select
          id="option"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          required
        >
          <option value="">-- Please choose an option --</option>
          {options.map((opt, index) => (
            <option key={index} value={opt}>{opt}</option>
          ))}
        </select>

        <label htmlFor="comments">Additional Comments:</label>
        <textarea
          id="comments"
          rows="5"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Write your comments here..."
        />

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;
