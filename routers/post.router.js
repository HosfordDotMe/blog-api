const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');

router.get('/posts', (req, res) => {
	Post.find({}, function(err, posts){
		if(err) return res.status(500).json({err: err});
		return res.status(200).json({
			posts: posts
		});
	});
});
router.get('/posts/:postId', (req, res) => {
	Post.find({ _id : req.params.postId }, function(err, post){
		if(err) return res.status(500).josn({err: err});
		return res.status(200).json({
			post: post
		});
	});
});
router.post('/posts', (req, res) => {
	const newPost = new Post(req.body);
	newPost.save(function(err, post){
		if(err) return res.status(500).json({err: err});
        return res.status(201).json({
            msg: 'Post Successfully Created'
        });
	});
});
router.put('/posts/:postId', (req, res) => {
	Post.findOneAndUpdate({ _id : req.params.postId }, req.body, function(err){
		if(err) return res.status(500).json({err: err});
		return res.status(200).json({
			msg: 'Post Succesfully Updated'
		});
	});
});
router.delete('/posts/:postId', (req, res) => {
	Post.findOneAndRemove({ _id : req.params.postId }, function(err, removedPost){
		if(err) return res.status(500).json({err: err});
		return res.status(200).json({
			msg: 'Post Successfully Deleted'
		});
	});
});

module.exports = router;