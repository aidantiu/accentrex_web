// This file sets up the Express app and initializes the database connection

// Module dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const healthRoute = require('./routes/health');

// Create the Express app instance
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Use '/api' as the base path for all routes
app.use('/api', healthRoute); // health check route

// Import the database initialization function and User model
const { initSequelize } = require('../config/db');
const UserModel = require('./models/user');

// Create an async function to initialize the app
async function createApp() {
  const sequelize = await initSequelize();
  const User = UserModel(sequelize);

  await sequelize.sync();
  await User.findOrCreate({
    where: { username: 'Aidan' },
    defaults: { email: 'aidan@example.com' }
  });

  return app;
}



module.exports = createApp;