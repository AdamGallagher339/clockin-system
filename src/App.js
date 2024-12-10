import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/ClockInSystem';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/ClockIn" element={<Content/>} />
        <Route path="/Employees" element={<h1>Employees Component</h1>} />
        <Route path="/MyProfile" element={<h1>MyProfile Component</h1>} />
        <Route path="/Manager" element={<h1>Manager Component</h1>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
