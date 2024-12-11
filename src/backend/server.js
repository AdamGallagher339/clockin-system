// File: server.js (Backend Setup)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb+srv://admin:admin@employeedb.mkn1i.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const employeeSchema = new mongoose.Schema({
  employeeId: String,
  name: String,
  status: { type: String, enum: ['working', 'lunch', 'day-off'], default: 'day-off' },
});

const Employee = mongoose.model('Employee', employeeSchema);

// API Routes
app.post('/clock-in', async (req, res) => {
  const { employeeId } = req.body;
  const employee = await Employee.findOne({ employeeId });
  if (!employee) {
    return res.status(404).json({ error: 'No employee matches this information' });
  }
  employee.status = 'working';
  await employee.save();
  res.json(employee);
});

app.post('/clock-out', async (req, res) => {
  const { employeeId } = req.body;
  const employee = await Employee.findOne({ employeeId });
  if (!employee) {
    return res.status(404).json({ error: 'No employee matches this information' });
  }
  employee.status = 'day-off';
  await employee.save();
  res.json(employee);
});

app.post('/start-lunch', async (req, res) => {
  const { employeeId } = req.body;
  const employee = await Employee.findOne({ employeeId });
  if (!employee) {
    return res.status(404).json({ error: 'No employee matches this information' });
  }
  employee.status = 'lunch';
  await employee.save();
  res.json(employee);
});

app.post('/end-lunch', async (req, res) => {
  const { employeeId } = req.body;
  const employee = await Employee.findOne({ employeeId });
  if (!employee) {
    return res.status(404).json({ error: 'No employee matches this information' });
  }
  employee.status = 'working';
  await employee.save();
  res.json(employee);
});

app.get('/employees', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

app.post('/add-employee', async (req, res) => {
  const { employeeId, name } = req.body;
  const newEmployee = new Employee({ employeeId, name });
  await newEmployee.save();
  res.json(newEmployee);
});

app.delete('/remove-employee', async (req, res) => {
  const { employeeId } = req.body;
  await Employee.findOneAndDelete({ employeeId });
  res.json({ message: 'Employee removed' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
