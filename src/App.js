import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyles from './styles';

const App = () => {
  const [currentId, setCururentId] = useState(null);
  const classes = useStyles();
  const dispatch  = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());

  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img src={memories} alt="memories" className={classes.image} height="60" /> 
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item sx={12} sm={7}>
              <Posts setCururentId={setCurrentId} />
            </Grid>
            <Grid item sx={12} sm={4}>
              <Form currentId={currentId} setCururentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>

    </Container>
  )
}
export default App;