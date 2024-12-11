import React, { useEffect } from 'react';
import './Employees.css';

function Employees({ employees, fetchEmployees }) {
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return (
    <div className="employee-list">
      <h2>Employee Status</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.employeeId}>
            {employee.name || employee.employeeId} - {employee.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Employees;