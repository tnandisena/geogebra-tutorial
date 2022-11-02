import React from "react";
import { AppBar, IconButton, Badge, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AppToolbar from '@mui/material/Toolbar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

const headerBar = () => (
  <AppBar position="static">
    <AppToolbar variant="dense" style={{ backgroundColor: '#0F0B86' }}>
      <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
        <HomeIcon />
      </IconButton>
      <Typography variant='subtitle2' color='#EEEEEE'>Geogerbra Tutorial</Typography>
      <IconButton style={{ marginLeft: 'auto' }} size="large" color="inherit">
        <Badge color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton size="large" edge="end" aria-haspopup="true" color="inherit">
        <AccountCircle />
      </IconButton>
    </AppToolbar>
  </AppBar>
);

export default headerBar;