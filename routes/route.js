const express = require('express');

const router = express.Router();

const Articles = require('../models/articles');

// Get all articles
router.get('/articles', (req, res, next) => {

    Articles.find(function(err, items) {
        res.json(items);
    })
});

// Add item to articles
router.post('/article', (req, res, next) => {

    let newItem = new Articles({
        item_title: req.body.title,
        item_description: req.body.description
    });

    newItem.save( (err) => {
        err ? res.json({msg: err}) : Articles.find(function(err, items) {
            res.json(items);
        })
    });
});

// Delete item from articles
router.delete('/article/:id', (req, res, next) => {

    Articles.deleteOne({ _id: req.params.id }, function( err, items ) {
        err ? res.json({msg: err}) : Articles.find(function(err, items) {
            res.json(items);
        })
    })
});

module.exports = router;
