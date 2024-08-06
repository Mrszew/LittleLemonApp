import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const LogIn = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, LogIn }}>
      {children}
    </AuthContext.Provider>
  );
};
