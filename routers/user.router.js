const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.send('getting all users');
});
router.get('/users/:userId', (req, res) => {
    res.send('getting a single user')
});
router.post('/users', (req, res) => {
    res.send('creating new user');
});
router.post('/users/:userId', (req, res) => {
    res.send('update user');
});
router.delete('/users/:userd', (req, res) => {
    res.send('remove user');
});

module.exports= router;
