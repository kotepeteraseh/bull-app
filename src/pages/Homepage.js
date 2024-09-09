import React, { useEffect, useState } from 'react';
import { getUserBalance } from '../api/auth';
import './Header.css'
import '../components/BottomNav'



function HomePage() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const { data } = await getUserBalance(token);
          setBalance(data.bullBalance);
        } catch (err) {
          console.error('Error fetching balance', err);
        }
      }
    };
    fetchBalance();
  }, []);

  return (



    <div className="home-page">
      <h1> BULL Mini App</h1>
      <p>Your current balance: {balance} BULL</p>
      <div className="game-options">
        <button>Single Player</button>
        <button>Memory Booster</button>
        <button>Branny Paw</button>
        <p>Coming Soon...</p>
      </div>
  
    </div>

    
   
    

);
}

export default HomePage;
