import React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function MainScreen() {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={tabIndex} onChange={handleChange} centered>
        <Tab label="Singleplayer" />
        <Tab label="Memory Booster" />
        <Tab label="Leaderboard" />
      </Tabs>
      <TabPanel value={tabIndex} index={0}>
        Singleplayer game content here
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        Memory Booster content here
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        Leaderboard content here
      </TabPanel>
    </Box>
  );
}
