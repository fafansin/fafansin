import React from 'react';
import { Link } from 'react-router-dom';
import s from './Nav.module.css';
import { Box, AppBar, Toolbar, Typography, IconButton, Button }  from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

class Nav extends React.Component{
  render(){
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      
        <nav className={s.Nav}>
          <ul>
            <Link to={'quotes'}>Random Quotes</Link>
            <Link to={'markdown'}>Markdown</Link>
            <Link to={'drum'}>Drum</Link>
            <Link to={'calculator'}>Calculator</Link>
            <Link to={'clock'}>Clock</Link>
          </ul>
        </nav>
      </>
    )
  }
}

export default Nav
