
const PostMessage = require("../models/postMessage");
const mongoose = require("mongoose");



exports.getPosts = async (req, res) => {
    try {
        const PostMessages = await PostMessage.find();
        res.status(200).json(PostMessages);
    } catch (error) {
        return res.status(404).json({ msg: error.message });
    }
};


exports.getSinglePost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await PostMessage.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


exports.createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;
    const newPost = new PostMessage({
        title,
        message,
        selectedFile,
        creator,
        tags
    })

    try {
        if(title.length <= 0 || 
          message.length <= 0 || 
          creator.length <= 0 || 
          tags.length <= 0 || 
          selectedFile.length <= 0) {
            return res.status(409).json({
                msg: "All Fields are required!"
            })
        } else {
            await newPost.save();
            res.status(209).json(newPost);
        }
    
    } catch (error) {
        return res.status(409).json({ msg: error.message });
    }

};


exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post exist with this id: ${id}`);
    }

    const updatedPost = { title, message, creator, tags, selectedFile, _id: id };
    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
    res.json(updatedPost);
};


exports.deletePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).send(`No post exist with this id: ${id}`);
    }
    await PostMessage.findByIdAndRemove(id);
    res.json({ message: "Post have been successfully removed." });
};


exports.likePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.send(404).send(`No post exist with this id: ${id}`);
    }
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    res.json(updatedPost);
};