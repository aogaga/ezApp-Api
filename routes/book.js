var express = require('express');
var router = express.Router();
const models = require('../domain/models/index');

router.get('/books', function(req, res) {
    models.Book.findAll({}).then(function(book) {
        res.json(book);
    });
});
router.get('/book/:id', function(req, res) {
    models.Book.find({
        where: {
            id: req.params.id
        }
    }).then(function(book) {
        res.json(book);
    });
});
router.delete('/book/:id', function(req, res) {
    models.Book.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(book) {
        res.json(book);
    });
});
router.put('/book/:id', function(req, res) {
    models.Book.find({
        where: {
            id: req.params.id
        }
    }).then(function(book) {
        if(book){
            book.updateAttributes({
                owner: req.body.owner,
                debit: req.body.debit,
                credit: req.body.credit
            }).then(function(book) {
                res.send(book);
            });
        }
    });
});
router.post('/book', function(req, res) {
    models.Book.create({
        owner: req.body.owner,
        debit: req.body.debit,
        credit: req.body.credit
    }).then(function(book) {
        res.json(book);
    });
});

module.exports = router;
