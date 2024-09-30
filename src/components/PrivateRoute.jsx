import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const expirationTime = localStorage.getItem('expirationTime'); // Timestamp when the token expires

  // Check if the token exists and if it's expired
  if (token && expirationTime) {
    const currentTime = new Date().getTime(); // Get current time in milliseconds
    const expiration = parseInt(expirationTime, 10);

    if (currentTime > expiration) {
      // Token has expired, remove relevant data from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('expirationTime');
      return <Navigate to="/login" />;
    }

    // Token is still valid
    return children;
  }

  // No token or expired token
  return <Navigate to="/login" />;
};

export default PrivateRoute;
