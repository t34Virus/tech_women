var Information = require('../models/info');
var express = require('express');
var router = express.Router();

router.list = function(req, res) {
  //calls all info in database
  Information.find(function (err, information1){
    if (err) throw err;
    // rendering jade template information and all info are passed in
    res.render('index', {
      information : information1
    });  
  });
};

router.get('/new', function(req, res){
  res.render('new_entry');
});

//detail page
router.get('/:id', function(req, res) {
  Information.findOne({_id:req.params.id},
    function(err, information) {
    res.render('detail', {
      information : information
    });    
  });
});

//new information
router.post('/', function(req, res) {
  var info = new Information( 
    { 
      author: req.body.author,
      title: req.body.title,
      body: req.body.body,
      photoURL: req.body.photoURL
    }
  );

    info.save( function (err, information){
    res.redirect('/');  
  });
});

router.get('/admin', function(req, res){
  res.redirect('/');
});
//edit information
router.put('/:id', function(req, res) {
  Information.findOneAndUpdate({_id:req.params.id},
    { $set:{
      author: req.body.author,
      title: req.body.title,
      body: req.body.body,
      photoURL: req.body.photoURL
    }}, function (err, information){
    res.redirect('/');  
  });
});

//delete information
router.delete('/:id', function (req, res) {
  Information.remove({_id:req.params.id},
    function(err, information) {
  res.redirect('/');  
  });
});

module.exports = router;
