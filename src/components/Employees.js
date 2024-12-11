import React, { useEffect } from 'react';
import './Employees.css';

function Employees({ employees, fetchEmployees }) {
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return (
    <div className="employee-list">
      <h2>List Of Employees</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.employeeId}>
            <class ID="enum">{employee.employeeId}</class> <class ID="ename">{employee.name}</class> <class ID="estatus">{employee.status}</class>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Employees;