var express = require('express');
var router = express.Router();
const models = require('../domain/models/index');
/* GET order listing. */
router.get('/orders', function(req, res) {
    models.Order.findAll({}).then(function(order) {
        res.json(order);
    });
});
router.get('/order/:id', function(req, res) {
    models.Order.find({
        where: {
            id: req.params.id
        }
    }).then(function(order) {
        res.json(order);
    });
});
router.delete('/order/:id', function(req, res) {
    models.Order.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(order) {
        res.json(order);
    });
});
router.put('/order/:id', function(req, res) {
    models.Order.find({
        where: {
            id: req.params.id
        }
    }).then(function(order) {
        if(order){
            order.updateAttributes({
                recived: req.body.recived,
                recivedBy: req.body.recivedBy,
                customerId: req.body.customerId,
                completionDate: req.body.completionDate,
                status: req.body.status,
                amount: req.body.amount,
                description: req.body.description,
                pickupLocation: req.body.pickupLocation,
                factoryId: req.body.factoryId
            }).then(function(order) {
                res.send(order);
            });
        }
    });
});
router.post('/order', function(req, res) {
    models.Order.create({
        recived: req.body.recived,
        recivedBy: req.body.recivedBy,
        customerId: req.body.customerId,
        completionDate: req.body.completionDate,
        status: req.body.status,
        amount: req.body.amount,
        description: req.body.description,
        pickupLocation: req.body.pickupLocation,
        factoryId: req.body.factoryId
    }).then(function(order) {
        res.json(order);
    });
});

module.exports = router;
