const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const models = require('../domain/models/index');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/roles',  function(req, res, next) {
    models.Role.findAll({}).then(function(role){
        res.json(role);
    })
});


router.get('/gender',  function(req, res) {
    models.Gender.findAll({}).then(function(gender){
        res.json(gender);
    })
});


router.get('/outlet',  function(req, res) {
    models.Outlet.findAll({}).then(function(outlet){
        res.json(outlet);
    })
});



router.get('/orderstatus',  function(req, res) {
    models.OrderStatus.findAll({}).then(function(orderstatus){
        res.json(orderstatus);
    })
});


router.get('/factory',  function(req, res) {
    models.Factory.findAll({}).then(function(factory){
        res.json(factory);
    })
});


module.exports = router;