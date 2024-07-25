import React from 'react';

const Pages = ({ setView }) => {
  return (
    <div className="pages p-4">
      <h2 className="text-2xl font-bold mb-4">Pages</h2>
      <ul className="list-disc list-inside">
        <li className="hover:text-primary cursor-pointer" onClick={() => setView('home')}>Home</li>
        <li className="hover:text-primary cursor-pointer" onClick={() => setView('about')}>About</li>
        <li className="hover:text-primary cursor-pointer" onClick={() => setView('login')}>Login</li>
        <li className="hover:text-primary cursor-pointer" onClick={() => setView('signup')}>Signup</li>
      </ul>
    </div>
  );
};

export default Pages;
