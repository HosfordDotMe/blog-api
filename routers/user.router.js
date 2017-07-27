const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.get('/users', (req, res) => {
    User.find({}, function(err, users){
        if(err) return res.status(500).json({err: err});
        return res.status(200).json({
            users: users
        });
    });
});
router.get('/users/:userId', (req, res) => {
    User.find({ _id : req.params.userId }, function(err, users){
        if(err) return res.status(500).json({err: err});
        return res.status(200).json({
            users: users
        });
    });
});
router.post('/users', (req, res) => {
    if(!req.body.password) {
        return res.status(400).json ({
            msg: 'Bad Request'
        });
    }
    const newUser = new User(req.body);
    newUser.setPassword(req.body.password);
    newUser.save(function(err, user){
        if(err) return res.status(500).json({err: err});
        return res.status(201).json({
            msg: 'User successfully created'
        });
    });
});
router.put('/users/:userId', (req, res) => {
    User.findOneAndUpdate({ _id : req.params.userId }, req.body, function(err){
        if(err) return res.status(500).json({err: err});
        return res.status(200).json({
            msg: 'User successfully updated'
        })
    })
});
router.delete('/users/:userId', (req, res) => {
    User.findOneAndRemove({ _id : req.params.userId }, function(err, removedUser){
        if(err) return res.status(500).json({err: err});
        return res.status(200).json({
            msg: 'User successfully removed'
        });
    });
});

module.exports= router;
