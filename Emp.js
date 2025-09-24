// employee-cli.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let employees = [];

function showMenu() {
  console.log("\n===== Employee Management System =====");
  console.log("1. Add Employee");
  console.log("2. List Employees");
  console.log("3. Remove Employee");
  console.log("4. Exit");
  rl.question("Choose an option: ", handleMenu);
}

function handleMenu(option) {
  switch (option.trim()) {
    case "1":
      addEmployee();
      break;
    case "2":
      listEmployees();
      break;
    case "3":
      removeEmployee();
      break;
    case "4":
      console.log("Exiting... Goodbye!");
      rl.close();
      break;
    default:
      console.log("❌ Invalid option, try again!");
      showMenu();
  }
}

function addEmployee() {
  rl.question("Enter Employee ID: ", (id) => {
    if (employees.some(emp => emp.id === id)) {
      console.log("⚠️ Employee with this ID already exists!");
      return showMenu();
    }
    rl.question("Enter Employee Name: ", (name) => {
      employees.push({ id, name });
      console.log(`✅ Employee added: ${name} (ID: ${id})`);
      showMenu();
    });
  });
}

function listEmployees() {
  if (employees.length === 0) {
    console.log("📂 No employees found.");
  } else {
    console.log("\n--- Employee List ---");
    employees.forEach(emp => {
      console.log(`ID: ${emp.id}, Name: ${emp.name}`);
    });
  }
  showMenu();
}

function removeEmployee() {
  rl.question("Enter Employee ID to remove: ", (id) => {
    const index = employees.findIndex(emp => emp.id === id);
    if (index === -1) {
      console.log("⚠️ Employee not found!");
    } else {
      const removed = employees.splice(index, 1);
      console.log(`🗑️ Removed Employee: ${removed[0].name} (ID: ${removed[0].id})`);
    }
    showMenu();
  });
}

// Start app
showMenu();
