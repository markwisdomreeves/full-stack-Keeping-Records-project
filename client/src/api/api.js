
import axios from "axios";


// SERVER OR BACKEND URL ENDPOINT
const apiURL = "http://localhost:5000/posts";


export const fetchPosts = () => axios.get(apiURL);
export const createPost = (newPost) => axios.post(apiURL, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${apiURL}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${apiURL}/${id}`);
export const likePost = (id) => axios.patch(`${apiURL}/${id}/likePost`);


// export const fetchPosts = () => {
//     const res = axios.get(apiURL)
    
//     console.log(res)
// }



