import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../static/Logout.css';

const Logout = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="logout">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
