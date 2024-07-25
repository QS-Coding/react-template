import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Signup = ({ setShowSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleSignup = async () => {
    try {
      const response = await axios.post('/api/signup', { username, password });
      login(response.data);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="p-4 bg-card dark:bg-gray-800 rounded shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full px-4 py-2 mb-4 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 mb-4 border rounded"
      />
      <button onClick={handleSignup} className="w-full bg-primary text-primary-foreground py-2 rounded">
        Signup
      </button>
      <button onClick={() => setShowSignup('login')} className="w-full mt-4 text-primary dark:text-blue-400">
        Already a user? Login
      </button>
    </div>
  );
};

export default Signup;
