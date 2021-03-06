import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import { getPosts } from '../../actions/posts';
import { useDispatch } from 'react-redux';

export const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  //const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Grow in>
      <Container>
        <Grid
          container
          // className={classes.mainContainer}
          direction='column-reserve'
          justifyContent='space-between'
          alignItems='stretch'
          spacing={3}>
          <Grid item sx={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item sx={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
