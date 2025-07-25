// Implement a health check route in the client application 
// fetch the health status from the server and display it

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Health() {

    const [status, setStatus] = useState('Checking...');

    useEffect(() => {
        axios.get('api/health')
        .then(response => setStatus(response.data.status))
        .catch(() => setStatus('Error'));
    }, []);


  return (
    <div className="health-check">
      <h1>Health Check</h1>
      <p>Status: {status}</p>
    </div>
  );
}





