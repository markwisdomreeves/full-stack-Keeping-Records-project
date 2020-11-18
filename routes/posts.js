
const express = require('express');

const { 
    getPosts, 
    getSinglePost, 
    createPost, 
    updatePost, 
    deletePost, 
    likePost 
} = require("../controllers/posts");

// const { auth } = require("../middleware/auth")

const router = express.Router();



router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getSinglePost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);



module.exports = router;

