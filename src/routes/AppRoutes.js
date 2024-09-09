import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Homepage';
import ProfilePage from '../pages/profile';

const AppRoutes = ({ bullBalance, updateBalance }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage bullBalance={bullBalance} updateBalance={updateBalance} />} />
      <Route path="/profile" element={<ProfilePage bullBalance={bullBalance} />} />
    </Routes>
  );
};

export default AppRoutes;
