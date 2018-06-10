const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const models = require('../domain/models/index');
const User = models.User;
const Profile = models.Profile;
const verifyToken = require('../services/verifytoken');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


/**
 * Configure JWT
 */
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');
var config = require('../config'); // get config file

router.get('/', function (req, res) {
    User.find({
        where:{
            email: req.body.email
        }
    }).then(function(todo){

        res.json(todo);
    }).catch(function (err) {
        if (err) return res.status(500).send('Error on the server.');
    });
});

router.post('/login', function(req, res) {
    User.find({
        where:{
            email: req.body.email
        }
    }).then(function (user) {

        if (!user) return res.status(404).send('No user found.');
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
         if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        var token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });

        // return the information including token as JSON
        res.status(200).send({ auth: true, token: token });
    }).catch(function (err) {
        if (err) return res.status(500).send('Error on the server.');
    });
});

router.get('/logout', function(req, res) {
    res.status(200).send({ auth: false, token: null });
});

router.post('/register', function(req, res) {

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    User.create({
        name : req.body.name,
        email : req.body.email,
        password : hashedPassword
    }).then(function(user){

        var token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });

        res.status(200).send({ auth: true, token: token });
    }).catch(function (err) {
        if (err) return res.status(500).send("There was a problem registering the user`.");
    });


});

router.get('/me', verifyToken, function(req, res) {
    Profile.find({
        where:{
            userId:req.userId
        }
    }).then(function (user) {
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    }).catch(function (err) {
        if (err) return res.status(500).send("There was a problem finding the user.");
    });


});

module.exports = router;