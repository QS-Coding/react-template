import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';
import '../static/switch.css'; // Import the custom switch CSS

const Sidebar = ({ setView }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);
  const [showPages, setShowPages] = useState(false);

  return (
    <aside className="w-64 bg-card dark:bg-gray-800 text-foreground dark:text-white shadow-lg h-screen flex flex-col fixed">
      <div className="flex items-center p-4">
        <img src="https://placehold.co/50x50" alt="Profile" className="rounded-full" />
        <h2 className="ml-2 text-lg font-semibold">User Name</h2>
      </div>
      <nav className="mt-4 flex-grow overflow-auto">
        <ul>
          <li className="py-2 px-4 hover:bg-muted dark:hover:bg-gray-700 cursor-pointer">
            <span onClick={() => setView('home')} className="text-primary dark:text-blue-400">Home</span>
          </li>
          <li className="py-2 px-4 hover:bg-muted dark:hover:bg-gray-700 cursor-pointer">
            <span onClick={() => setView('about')} className="text-primary dark:text-blue-400">About</span>
          </li>
          <li className="py-2 px-4 hover:bg-muted dark:hover:bg-gray-700 cursor-pointer">
            <span onClick={() => setShowPages(!showPages)} className="text-primary dark:text-blue-400">Pages</span>
            {showPages && (
              <ul className="ml-4 mt-2">
                <li className="py-2 px-4 hover:bg-muted dark:hover:bg-gray-700 cursor-pointer">
                  <span onClick={() => setView('home')} className="text-primary dark:text-blue-400">Home</span>
                </li>
                <li className="py-2 px-4 hover:bg-muted dark:hover:bg-gray-700 cursor-pointer">
                  <span onClick={() => setView('about')} className="text-primary dark:text-blue-400">About</span>
                </li>
                <li className="py-2 px-4 hover:bg-muted dark:hover:bg-gray-700 cursor-pointer">
                  <span onClick={() => setView('login')} className="text-primary dark:text-blue-400">Login</span>
                </li>
                <li className="py-2 px-4 hover:bg-muted dark:hover:bg-gray-700 cursor-pointer">
                  <span onClick={() => setView('signup')} className="text-primary dark:text-blue-400">Signup</span>
                </li>
              </ul>
            )}
          </li>
          {user ? (
            <li className="py-2 px-4 hover:bg-muted dark:hover:bg-gray-700 cursor-pointer">
              <span onClick={logout} className="text-primary dark:text-blue-400">Logout</span>
            </li>
          ) : (
            <li className="py-2 px-4 hover:bg-muted dark:hover:bg-gray-700 cursor-pointer">
              <span onClick={() => setView('login')} className="text-primary dark:text-blue-400">Login</span>
            </li>
          )}
        </ul>
      </nav>
      <div className="mt-auto p-4">
        <label className="ui-switch">
          <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
          <div className="slider">
            <div className="circle"></div>
          </div>
        </label>
      </div>
    </aside>
  );
};

export default Sidebar;
