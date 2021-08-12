const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');



function appStart() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'options',
                message: 'Navigation Options Listed',
                choices: [
                    'view all departments',
                    'view all roles',
                    'view all employees',
                    'add a department',
                    'add a role',
                    'add an employee',
                    'update an employee role'
                ]
            
        
        .then ((data) => {
            console.log (data)
            
            switch (data.options){
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