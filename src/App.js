import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch  = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} direction="column-reserve" justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item sx={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item sx={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>

    </Container>
  )
}
export default App;