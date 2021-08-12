const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');


async function getConnection() {
    const connection = await mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: 'L0lwtfbbq!',
            database: 'em_system_db'
        }
    );
    return connection;
}

module.exports = getConnection;
