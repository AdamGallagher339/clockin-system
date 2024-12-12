import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import ClockInSystem from './components/ClockInSystem';
import Employees from './components/Employees';
import Manager from './components/Manager';
import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [employees, setEmployees] = useState([]);

  // Fetch all employees from the server
  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:4000/employees');
      console.log('Fetched Employees:', response.data); // Debugging log
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  return (
    <Router>
      <NavigationBar />

      <Routes>
        <Route path="/ClockIn" element={<ClockInSystem fetchEmployees={fetchEmployees}/>} />
        <Route path="/Employees" element={<Employees employees={employees} fetchEmployees={fetchEmployees}/>} />
        <Route path="/Manager" element={<Manager fetchEmployees={fetchEmployees} />} />
      </Routes>

      <Footer />

    </Router>
  );
};

export default App;
