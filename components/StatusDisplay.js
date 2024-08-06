import React, { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';

const StatusDisplay = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      {isLoggedIn ? <p>You are logged in.</p> : <p>You are logged out.</p>}
    </div>
  );
};

export default StatusDisplay;
