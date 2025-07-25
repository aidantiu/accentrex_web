// This file sets up the database connection using Sequelize
// Ensure you have the necessary environment variables set in your .env file
const { Sequelize } = require('sequelize');
const mysql = require('mysql2/promise');


// Create the database if it doesn't exist
async function ensureDatabase() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
  await connection.end();
}

// Initialize Sequelize with the database configuration
let sequelize;
async function initSequelize() {
  // Check if database exists
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  });
  const [rows] = await connection.query(
    `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?`,
    [process.env.DB_NAME]
  );
  let loggingOption = false;
  if (rows.length === 0) {
    // Database does not exist, create it and enable logging
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
    loggingOption = console.log;
  }
  await connection.end();

  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      logging: loggingOption
    }
  );
  try {
    await sequelize.authenticate();
    console.log('MYSQL Connected.');
  } catch (error) {
    console.error('Unable to connect:', error);
  }
  return sequelize;
}


module.exports = { initSequelize, ensureDatabase };