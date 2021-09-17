import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import useStyles from './styles';
import memories from './images/memories.png';

export const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <Typography className={classes.heading} variant='h2' align='center'>
        Memories
      </Typography>
      <img
        src={memories}
        alt='memories'
        className={classes.image}
        height='60'
      />
    </AppBar>
  );
};
