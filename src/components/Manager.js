import React, { useState } from 'react';
import axios from 'axios';
import './Manager.css';

function Manager({ fetchEmployees }) {
    const [employeeId, setEmployeeId] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
  
    const addEmployee = async () => {
      if (!employeeId || !name) {
        setError('Employee ID and Name are required');
        return;
      }
      try {
        setError('');
        await axios.post('http://localhost:4000/add-employee', { employeeId, name });
        fetchEmployees();
        setEmployeeId('');
        setName('');
      } catch (error) {
        console.error('Error adding employee:', error);
      }
    };
  
    const removeEmployee = async () => {
      try {
        await axios.delete('http://localhost:4000/remove-employee', { data: { employeeId } });
        fetchEmployees();
        setEmployeeId('');
      } catch (error) {
        console.error('Error removing employee:', error);
      }
    };
  
    return (
      <div className="manager">
        <h2>Manager Page</h2>
        <input
          type="text"
          placeholder="Enter Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <div className="buttons">
          <button onClick={addEmployee}>Add Employee</button>
          <button onClick={removeEmployee}>Remove Employee</button>
        </div>
      </div>
    );
  }
  
  export default Manager;