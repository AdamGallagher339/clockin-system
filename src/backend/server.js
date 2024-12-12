// File: server.js (Backend Setup)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Middleware for parsing JSON and enabling cross-origin requests
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb+srv://admin:admin@employeedb.mkn1i.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the schema for employees
const employeeSchema = new mongoose.Schema({
  employeeId: String,
  name: String,
  status: { type: String, enum: ['working', 'lunch', 'day-off'], default: 'day-off' },
});

const Employee = mongoose.model('Employee', employeeSchema);

// API Routes

// Endpoint to handle clock-in functionality
app.post('/clock-in', async (req, res) => {
  const { employeeId } = req.body;
  const employee = await Employee.findOne({ employeeId });
  if (!employee) {
    return res.status(404).json({ error: 'No employee matches this information' });// Input Requirements for error handling
  }
  employee.status = 'working';// Update status
  await employee.save();
  res.json(employee);
});

// Endpoint to handle clock-out functionality
app.post('/clock-out', async (req, res) => {
  const { employeeId } = req.body;
  const employee = await Employee.findOne({ employeeId });
  if (!employee) {
    return res.status(404).json({ error: 'No employee matches this information' });// Input Requirements for error handling
  }
  employee.status = 'day-off';// Update status
  await employee.save();
  res.json(employee);
});

// Endpoint to handle starting lunch
app.post('/start-lunch', async (req, res) => {
  const { employeeId } = req.body;
  const employee = await Employee.findOne({ employeeId });
  if (!employee) {
    return res.status(404).json({ error: 'No employee matches this information' });// Input Requirements for error handling
  }
  employee.status = 'lunch';// Update status
  await employee.save();
  res.json(employee);
});

// Endpoint to handle ending lunch
app.post('/end-lunch', async (req, res) => {
  const { employeeId } = req.body;
  const employee = await Employee.findOne({ employeeId });
  if (!employee) {
    return res.status(404).json({ error: 'No employee matches this information' });// Input Requirements for error handling
  }
  employee.status = 'working';// Update status
  await employee.save();
  res.json(employee);
});

// Fetch all employees
app.get('/employees', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

// Add a new employee
app.post('/add-employee', async (req, res) => {
  const { employeeId, name } = req.body;
  if (!employeeId || !name) {
    return res.status(400).json({ error: 'Both Employee ID and Name must be provided' });// Input Requirements for error handling
  }
  const existingEmployee = await Employee.findOne({ employeeId });
  if (existingEmployee) {
    return res.status(400).json({ error: 'Employee ID must be unique' });// Input Requirements for error handling
  }
  const newEmployee = new Employee({ employeeId, name });
  await newEmployee.save();
  res.json(newEmployee);
});

app.delete('/remove-employee', async (req, res) => {
  const { employeeId } = req.body;
  await Employee.findOneAndDelete({ employeeId });
  res.json({ message: 'Employee removed' });// Confirmation
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));// Inform User that database is connected
