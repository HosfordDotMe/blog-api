const express = require('express');
const router = express.Router();

router.get('/posts', (req, res) => {
	res.send('getting those posts');
});

router.get('/posts/:postId', (req, res) => {
	res.send('getting that one post');
});

router.post('/posts', (req, res) => {
	res.send('creating a new post');
});

router.put('/posts/:postId', (req, res) => {
	res.send('updates on the post!');
});

router.delete('/posts/:postId', (req, res) => {
	res.send('deleting that one post'); 
});

module.exports = router;