
import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";

// LASTLY, AFTER DOING EVERYTHING IN / WITH REDUX, 
// WE MUST DISPATCH THE ACTIONS OR METHODS IN THE FILE
// THAT WE WANT BEFORE USING THEM.
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";



const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    

    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: ""
    });


    const post = useSelector((state) => ( 
      currentId ? 
        state.posts.find((message) => message._id === currentId)
        :
        null
    ));

    
    useEffect(() => {
      if (post) {
        setPostData(post);
      }
    }, [post]);

    const clearFormData = () => {
      setCurrentId(0);
      setPostData({
        title: '',
        message: '',
        creator: '',
        tags: '',
        selectedFile: ''
      });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
          dispatch(createPost(postData));
          clearFormData();
        } else {
          dispatch(updatePost(currentId, postData));
          clearFormData();
        }
    };

    
    return (
        <Paper className={classes.paper}>
            <form id="post-form" onSubmit={handleSubmit} autoComplete="off" noValidate 
             className={`${classes.root} ${classes.form}`}>
              <Typography style={{ fontSize: 14 }} >{currentId ? `Editing "${post.title}"` : 'Creating a Record'}</Typography>
                <TextField
                  name="creator"  
                  label="Creator"
                  placeholder="Creator Field is required"
                  fullWidth 
                  value={postData.creator}
                  onChange={(e) => setPostData({ 
                      ...postData, 
                      creator: e.target.value 
                  })}
                />
                
                <TextField
                  name="title" 
                  placeholder="Title Field is required"
                  label="Title"
                  fullWidth 
                  value={postData.title}
                  onChange={(e) => setPostData({ 
                      ...postData, 
                      title: e.target.value 
                  })}
                
                />
                
                <TextField
                  name="message" 
                  placeholder="Message Field is required"
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth 
                  value={postData.message}
                  onChange={(e) => setPostData({ 
                      ...postData, 
                      message: e.target.value 
                  })}
                
                />
                
                <TextField
                  name="tags" 
                  label="Tags(eg: my birthday)" 
                  placeholder="Title Field is required" 
                  fullWidth 
                  value={postData.tags}
                  onChange={(e) => setPostData({ 
                      ...postData, 
                      tags: e.target.value.split(',') 
                  })}
                
                />
                
                <div className={classes.fileInput}>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setPostData({ 
                        ...postData, 
                        selectedFile: base64
                    })}
                  />
                </div>
                
                <Button 
                    className={classes.buttonSubmit} 
                    variant="contained"
                    style={{ backgroundColor: "brown", color: "black" }}
                    size="large"
                    type="submit"
                    fullWidth>
                    Submit
                </Button>
                <Button 
                    className={classes.buttonSubmit} 
                    variant="contained"
                    style={{ backgroundColor: "gray", color: "black" }}
                    size="small"
                    onClick={clearFormData}
                    fullWidth>
                    Clear
                </Button>
            </form>
        </Paper>
    );
}


export default Form;
