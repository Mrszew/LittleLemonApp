import React, { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';

const LoginButton = () => {
  const { isLoggedIn, LogIn } = useContext(AuthContext);

  const handleLogin = () => {
    LogIn(true); // Set the user as logged in
  };

  const handleLogout = () => {
    LogIn(false); // Set the user as logged out
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default LoginButton;
