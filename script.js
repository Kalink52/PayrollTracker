// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

// my testing 
// const employeesArray = {firstName:'', lastName:'', salary:'0'}
let employee_array = []

const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee object
more = false
while (!more){
//get first name
  let firstName = prompt(`First name:`);
 
//get last name
 let lastName = prompt(`Last name:`);

//get salary 
 let salary = Number(prompt(`Salary:`));

 //check if salary is or isnt a number and setting it to xero
 if (isNaN(salary)) {
   salary = Number(0);
 } 



//combine inputs into an object, and push object into an array
let employee_object = {firstName, lastName, salary}
employee_array.push(employee_object)

console.log(employee_array)

if (confirm(`Do you want to log another employee?`)) {

}else {  
  more = true;
}

}
return employee_array
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  var salary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    salary = Number(salary) + Number(employeesArray[i].salary);
}

console.log(`The average salary between our ${employeesArray.length} employee(s) is $${salary/employeesArray.length}`)
}
// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomEmployee = employeesArray[Math.floor(Math.random() * employee_array.length)]; //found math online formatted to fit code
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName} 
  our random drawing winner`);

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
