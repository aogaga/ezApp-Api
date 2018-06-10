var express = require('express');
var router = express.Router();
const models = require('../domain/models/index');

router.get('/payments', function(req, res) {
    models.Payment.findAll({}).then(function(payment) {
        res.json(payment);
    });
});
router.get('/payment/:id', function(req, res) {
    models.Payment.find({
        where: {
            id: req.params.id
        }
    }).then(function(payment) {
        res.json(payment);
    });
});
router.delete('/payment/:id', function(req, res) {
    models.Payment.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(payment) {
        res.json(payment);
    });
});
router.put('/payment/:id', function(req, res) {
    models.Payment.find({
        where: {
            id: req.params.id
        }
    }).then(function(payment) {
        if(payment){
            payment.updateAttributes({
                customerId: req.body.customerId,
                orderId: req.body.orderId

            }).then(function(payment) {
                res.send(payment);
            });
        }
    });
});
router.post('/payment', function(req, res) {
    models.Payment.create({
        customerId: req.body.customerId,
        orderId: req.body.orderId
    }).then(function(payment) {
        res.json(payment);
    });
});

module.exports = router;
