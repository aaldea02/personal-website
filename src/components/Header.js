import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#333333',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    zIndex: 1,
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: '#ffffff',
    marginBottom: theme.spacing(0.1),
    textShadow: '2px 2px #333333',
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
  },
  nav: {
    display: 'flex',
    gap: theme.spacing(2),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#444444',
  },
  navLink: {
    fontSize: '1.3rem',
    color: '#ffffff',
    textDecoration: 'none',
    padding: theme.spacing(0.5, 1.5),
    '&:hover': {
      backgroundColor: '#555555',
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title}>
          Arsen Aldea's Personal Website
        </Typography>
        <div className={classes.nav}>
          <Button href="#about-me" className={classes.navLink}>
            About Me
          </Button>
          <Button href="#contact" className={classes.navLink}>
            Contact
          </Button>
          <Button href="#projects" className={classes.navLink}>
            Projects
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
