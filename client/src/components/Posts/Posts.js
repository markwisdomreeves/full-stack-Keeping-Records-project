
import React from "react";
import SinglePost from "./SinglePost/SinglePost";
import { Grid } from "@material-ui/core";
import Loading from "../Loader/Loading";
import useStyles from "./styles";

// AFTER SETTING UP AND DISPATCHING AND FETCHING 
// OUR DATA FROM THE USING REDUX, THIS IS TIME TO 
// USE IT IN OUR COMPONENTS BY USING THE USE
// SELECTOR HOOKS FROM REACT REDUX
import { useSelector } from "react-redux";



const Posts = ({ setCurrentId }) => {

    const classes = useStyles

    // THEN WE USE IT LIKE THIS
    const posts = useSelector((state) => state.posts);
  
    return (
      !posts.length ? 
        <Loading /> 
        : 
        (
          <Grid 
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
          >
              {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6} md={6}>
                    <SinglePost post={post} setCurrentId={setCurrentId} />
                </Grid>
              ))}
          </Grid>
        )
    );
}



export default Posts;