import React, { useState } from 'react';
import axios from 'axios';
import './Manager.css';

function Manager({ fetchEmployees }) {
  const [employeeId, setEmployeeId] = useState('');
  const [name, setName] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // Add a new employee
  const addEmployee = async () => {
    try {
      if (!employeeId || !name) {// Ensure both fields are filled
        setError('Both Employee ID and Name must be provided');
        return;
      }
      setError('');
      setSuccess('');
      const response = await axios.post('http://localhost:4000/add-employee', { employeeId, name });
      fetchEmployees();
      setEmployeeId('');
      setName('');
      setSuccess('Employee added successfully');
    } catch (error) {
      if (error.response && error.response.data.error) {// Handle duplicate ID error
        setError(error.response.data.error);
      } else {
        console.error('Error adding employee:', error);
      }
    }
  };

  // Remove an employee
  const removeEmployee = async () => {
    try {
      if (!employeeId) {// Ensure ID is provided
        setError('Employee ID must be provided to remove an employee');
        return;
      }
      setError('');
      setSuccess('');
      await axios.delete('http://localhost:4000/remove-employee', { data: { employeeId } });
      fetchEmployees();
      setEmployeeId('');
      setSuccess('Employee removed successfully');
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
      {success && <p className="success">{success}</p>}
      <div className="buttons">
        <button onClick={addEmployee}>Add Employee</button>
        <button onClick={removeEmployee}>Remove Employee</button>
      </div>
    </div>
  );
}

export default Manager;