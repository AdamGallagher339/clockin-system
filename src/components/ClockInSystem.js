import React, { useState } from 'react';
import axios from 'axios';
import './ClockInSystem.css';

function ClockInSystem({ fetchEmployees }) {
  const [employeeId, setEmployeeId] = useState('');
  const [error, setError] = useState('');

  const handleAction = async (action) => {
    try {
      setError('');
      await axios.post(`http://localhost:4000/${action}`, { employeeId });
      fetchEmployees();
    } catch (error) {
      if (error.response && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="clock-in-system">
      <h1>Clock In Machine</h1>
      <input
        type="text"
        placeholder="Enter Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <div className="buttons">
        <button onClick={() => handleAction('clock-in')}>Clock In</button>
        <button onClick={() => handleAction('clock-out')}>Clock Out</button>
        <button onClick={() => handleAction('start-lunch')}>Start Lunch</button>
        <button onClick={() => handleAction('end-lunch')}>End Lunch</button>
      </div>
    </div>
  );
}

export default ClockInSystem;