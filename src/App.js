import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import ClockInSystem from './components/ClockInSystem';
import Employees from './components/Employees';
import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
        // If you're using a proxy, use a relative URL
        const response = await axios.get('/employees');
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
      </Routes>

      <Footer />

    </Router>
  );
};

export default App;
