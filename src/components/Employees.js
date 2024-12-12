import React, { useEffect } from 'react';
import './Employees.css';

function Employees({ employees, fetchEmployees }) {
  // Fetch employees on component mount
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return (
    <div className="employee-list">
      <h2>Employee Status</h2>
      {employees.length === 0 ? (
        <p ID="noEmp">No employees added</p>// Display message if no employees exist
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.employeeId}>
              <class ID="enum">{employee.employeeId}</class> <class ID="ename">{employee.name}</class> <class ID="estatus">{employee.status}</class>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Employees;

