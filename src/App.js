import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './App.css';

const App = () => {
  const [bullBalance, setBullBalance] = useState(100); // Default balance

  // Optionally use localStorage to persist balance
  useEffect(() => {
    const storedBalance = localStorage.getItem('bullBalance');
    if (storedBalance) {
      setBullBalance(parseInt(storedBalance));
    }
  }, []);

  const updateBalance = (newBalance) => {
    setBullBalance(newBalance);
    localStorage.setItem('bullBalance', newBalance);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <div className="logo-container">
        <img src="src/assets/WhatsApp Image 2024-09-04 at 10.27.58_6e51e334.jpgssets/" alt="BULL App Logo" className="app-logo" />
        </div>
          <p>BULL Balance: {bullBalance}</p>
        </header>
        <main>
          <AppRoutes bullBalance={bullBalance} updateBalance={updateBalance} />
        </main>
        </div>
      
    </Router>
  );
};

export default App;
