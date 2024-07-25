import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Pages from './components/Pages';
import About from './components/About';
import './styles/tailwind.css';

const App = () => {
  const [view, setView] = useState('home');

  const renderView = () => {
    switch (view) {
      case 'home':
        return <Home />;
      case 'login':
        return <Login setShowSignup={setView} />;
      case 'signup':
        return <Signup setShowSignup={setView} />;
      case 'pages':
        return <Pages setView={setView} />;
      case 'about':
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <AuthProvider>
      <ThemeProvider>
        <div className="flex bg-background dark:bg-gray-900 text-foreground dark:text-white min-h-screen">
          <Sidebar setView={setView} />
          <main className="flex-1 p-6 ml-64">
            <h1 className="text-4xl font-bold mb-4">React Template</h1>
            {renderView()}
          </main>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
