// Launch backend server
require('dotenv').config(); // Load environment variables from .env
const createApp = require('./src/app'); // Import the async app initializer

// Set the port for the server
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
createApp().then(app => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to start server:', err);
});