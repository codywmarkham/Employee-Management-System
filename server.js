const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'L0lwtfbbq!'
  });

  function appStart() {

    inquirer.prompt([{
                type: 'rawlist',
                name: 'start',
                message: 'Navigation Options Listed',
                choices: [
                    'view all departments',
                    'view all roles',
                    'view all employees',
                    'add a department',
                    'add a role',
                    'add an employee',
                    'update an employee role',
                         ]
            }])
        .then ((data) => {
            console.log (data)
            
            switch (data.start){
                case "view all departments":
                viewDepartments()
                break;
        
                case 'view all roles':
                viewRoles()
                break;
        
                case 'view all employees':
                viewEmployee()
                break;
        
                case 'add a department':
                addDepartment()
                break;
        
                case 'add a role':
                addRole()
                break;
        
                case 'add an employee':
                addEmployee()
                break;
        
                case 'update an employee role':
                updateEmployeeRole()
                break;
        
                case 'exit':
                    connection.end();
                break;
                
                default:
                    break;
            };
        }

        )};

        const viewDepartments = () => {
            connection.query(
              'SELECT * FROM `department',
              function(err, results, fields) {
                console.log(results); 
                console.log(fields); 
              }
            );
        }

        const viewRoles = () => {
              connection.query(
                'SELECT * FROM `roles',
                function(err, results, fields) {
                  console.log(results); 
                  console.log(fields); 
                }
              );
        }

        const viewEmployee = () => {
              connection.query(
                'SELECT * FROM `employee',
                function(err, results, fields) {
                  console.log(results); 
                  console.log(fields); 
                }
              );
            }

            const addDepartment = () => {
                connection.query(
                  'INSERT INTO `department',
                  function(err, results, fields) {
                    console.log(results); 
                    console.log(fields); 
                  }
                );
              }

              const addRole = () => {
                connection.query(
                  'INSERT INTO `roles',
                  function(err, results, fields) {
                    console.log(results); 
                    console.log(fields); 
                  }
                );
              }

              const addEmployee = () => {
                connection.query(
                  'INSERT INTO `employee',
                  function(err, results, fields) {
                    console.log(results); 
                    console.log(fields); 
                  }
                );
              }

              const updateEmployeeRole = () => {
                connection.query(
                  'UPDATE `employee', 'SET role_id', 
                  function(err, results, fields) {
                    console.log(results); 
                    console.log(fields); 
                  }
                );
              }

