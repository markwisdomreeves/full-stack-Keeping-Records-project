
// IMPORT ALL THE CONSTANTS
import { FETCH_ALL, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST } from "../constants/actionTypes";


// WE ARE IMPORTING ALL OUR APIs METHOD FROM
// THE API FOLDER BY USING THE * SYMBOL
import * as api from "../api/api.js";
    

// ACTION CREATORS IN REDUX ARE FUNCTION 
// THAT CREATE AN ACTION LIKE FETCHING DATA FROM THE 
// SERVER OR DOING OTHER LOGIC

// WE CREATE AN ACTION CREATORS: TO FETCH OUR DATA FROM 
// THE SERVER


// GET ALL POST FROM DATABASE / SERVER
const getPosts = () => async (dispatch) => {
    try {
       const { data } = await api.fetchPosts();
        dispatch({
            type: FETCH_ALL,
            payload: data
        });

    } catch (err) {
        // console.log(error.message);
        console.log(err);
        return err.message
    }
};


// CREATE POST AND SEND TO THE DATABASE / SERVER
const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({
            type: CREATE_POST,
            payload: data
        });

    } catch (err) {
        // console.log(error.message);
        console.log(err);
        return err.message
    }
};


const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({
            type: UPDATE_POST,
            payload: data
        });

    } catch (err) {
        // console.log(error.message);
        console.log(err);
        return err.message
    }
};


const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({
            type: DELETE_POST,
            payload: id
        });

    } catch (err) {
        // console.log(error.message);
        console.log(err);
        return err.message
    }
};


const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({
            type: LIKE_POST,
            payload: data
        });

    } catch (err) {
        // console.log(error.message);
        console.log(err.message);
        return err.message
    }
}



export { getPosts, createPost, updatePost, deletePost, likePost };


    






