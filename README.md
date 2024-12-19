## 
## G00413950@atu.ie

# How to run this React App

Firstly run the following commands.\
`git clone https://github.com/AdamGallagher339/clockin-system.git`\
`cd clockin-system`

Next run.\
`cd src`\
`npm i` to install dependencies

Once the installs have finished run.\
`npm start` to run the node.js app.\
and\
`cd backend`\
`nodemon server.js` to start the database connection.

## What to expect

### ClockIn
Once the app starts you will be redirected from "/" to the clock in systems main page.\
Here employees would be able to update their own status using the buttons below the text box.\
Employees must enter a valid EmployeeID to update a status.

### Employee
Next you can navigate to the Employees page to view all Employees and their current status.\
If there are no Employees a message indicating a lack of employees will appear in red.

### Manager
Finally you can navigate to the Manager page where you can add and remove employees from the database.\
To Add an employee you must enter a unique EmployeeID and a name.\
To Remove an employee you must enter a valid EmployeeID.

# ERRORS / BUGS

- If you cannot run the node.js app by typing npm start in your src file:\
  Please attempt to run NPM I inside of the SRC frile one more time to ensure you have all dependencies installed.

- If employees are not being added / removed from the employees page:\
  Please ensure you have the backend server running by typing nodemon server.js in the BACKEND file directory.

If issues precist please feel free to contact me via G00413950@atu.ie for more assistance.
