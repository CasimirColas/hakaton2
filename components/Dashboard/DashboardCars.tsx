import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, CssBaseline, Stack, Typography } from '@mui/material';
import Header from './Header';
import SideBar from './SideBar';
import ListCars from './listCars';

function DashboardCars({ children }) {

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <CssBaseline />
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} sx={{ height: '5vh' }} />

      <SideBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Box
        component="main"
        sx={{
          marginLeft: { xs: 'none', sm: '240px' },
          minHeight: 'calc(100vh - 64px)', //64px = size of header
          padding: '1rem',
          backgroundColor: 'aliceblue',
        }}
      >
        {children}
        <ListCars/>
      </Box>
    </Stack>
  );
}

DashboardCars.propTypes = {
  children: PropTypes.node,
};

export default DashboardCars;
