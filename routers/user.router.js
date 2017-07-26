const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.get('/users', (req, res) => {
    res.send('getting all users');
});
router.get('/users/:userId', (req, res) => {
    res.send('getting a single user')
});
router.post('/users', (req, res) => {
    const newUser = new User({email: 'j@j.j' });
    newUser.save(function(){
        res.send('created a new user');
    });
});
router.post('/users/:userId', (req, res) => {
    res.send('update user');
});
router.delete('/users/:userd', (req, res) => {
    res.send('remove user');
});

module.exports= router;
