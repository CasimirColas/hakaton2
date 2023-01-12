import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header({ mobileOpen, setMobileOpen }) {
  const handleClick = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Stack direction="row" alignItems="center">
          <IconButton
            onClick={handleClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, width: { sm: `calc(100% - 240px)` }, display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ marginLeft: { xs: 'none', sm: '240px' } }}>Sherlockation</Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  mobileOpen: PropTypes.bool.isRequired,
  setMobileOpen: PropTypes.func.isRequired,
};

export default Header;
