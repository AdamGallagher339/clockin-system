import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import ClockInSystem from './components/ClockInSystem';
import Employees from './components/Employees';

function App() {

  const date = new Date().toLocaleDateString() + " " + + new Date().toLocaleTimeString();

  return (
    <Router>
      <NavigationBar />

      <Routes>
        <Route path="/ClockIn" element={<ClockInSystem />} />
        <Route path="/Employees" element={<Employees />} />
      </Routes>

      <Footer />

    </Router>
  );
};

export default App;
