var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//retrieving User and Resume schema from the database
var User = require('../Models/user')
var Resume = require('../Models/resume')
// const host = req.host; 
// const filePath = req.protocol + '://' + host + '/' + req.file.path; 
// console.log("this is the file path " + filePath );

module.exports = router;

var User = require('../Models/user');

//Get the split page by rendering the split ejs file
router.get('/', function(req, res, next) {
    res.render('split.ejs', { title: 'Split page', user:req.user });
});


module.exports = router;
