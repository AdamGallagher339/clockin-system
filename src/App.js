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
    const response = await axios.get('http://localhost:4000/employees');
    setEmployees(response.data);
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
