import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, AccountCircle, Leaderboard } from '@mui/icons-material';

const BottomNav = () => {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Profile" icon={<AccountCircle />} />
      <BottomNavigationAction label="Leaderboard" icon={<Leaderboard />} />
    </BottomNavigation>
  );
};

export default BottomNav;
