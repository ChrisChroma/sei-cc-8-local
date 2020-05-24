const User = require('../models/user');
const Dog = require('../models/dog');

module.exports = {
    index,
    myDogs,
    new: newDog
};

function index(req, res) {
    res.render('dogs/index', {user: req.user})
}

function myDogs(req, res) {
    res.render('dogs/myDogs', {user: req.user})
}

function newDog(req, res) {
    res.render('dogs/new', {user: req.user})
}