
import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from "./images/img18.jpg";
import useStyles from "./styles";


// USE REDUX HOOKS TO DISPATCH AN ACTION TO THE ENTIRE PROJECT
import { useDispatch } from "react-redux";

// IMPORT OUR ACTIONS FILES
import { getPosts } from "./actions/posts";
  


function App() {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles()
  // INITALIZE THE USE DISPATCH HOOKS BEFORE USING IT.
  const dispatch = useDispatch()

  // THIS IS HOW YOU DISPATCH AN ACTION IN REDUX
  // YOU MUST USE THE USE EFFECT HOOKS TO DISPATCH AN ACTION
  useEffect(() => {
      dispatch(getPosts())
  }, [currentId, dispatch]);


  return (
    <Container className="custom-container" maxWidth="lg">

      <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography id="mediaQTitle" className={classes.heading} variant="h2" align="center">Record Dates</Typography>
          <img className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
    

      <Grow in>
          <Container>
            <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
              
              <Grid item sx={12} sm={7}>
                 <Posts setCurrentId={setCurrentId} />
              </Grid>

              <Grid className={classes.formContainer} item xs={12} sm={5}>
                 <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
              
            </Grid>
          </Container>
      </Grow>


    </Container>
  );
}


export default App;
