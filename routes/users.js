var express = require('express');
var router = express.Router();
var UserModel = require('./../models/user')

//  GET users listing. 
router.get('/', function(req, res, next) {
  UserModel.find({}).exec(function(err, foundUser){
    if(!err && foundUser){
      res.status(200).send(foundUser)
    }else{
      res.status(400).send(err || {error: "something went wrong"})
    }
  })
});

// to update the assigned urvey to the user
router.put('/', function(req, res){
  /*
  sample body data 
  {
    user: 1,
    survey: [_id1, _id2, _id3]
  }
  */
  if(!req.body.user && !req.body.survey){
    res.status(400).send({error: 'user id or survey id array missing'})
  }else{
    UserModel.findOneAndUpdate({
      id: req.body.user
    }, {
      assigned_surveys: req.body.survey
    }, {new: true}).exec(function(err, updatedUser){
      if(!err && updatedUser){
        res.status(200).send(updatedUser)
      }else{
        res.status(400).send(err || {error: 'something went wrong'})
      }
    })
  }
})

// to create a user
router.post('/', function(req, res){
  let data = {
    id: req.body.id,
    username: req.body.username
  }
  let dataUpdate = new UserModel(data)
  dataUpdate.save(function(err, createdUser){
    if(!err && createdUser){
      res.status(200).send(createdUser)
    }else{
      res.status(400).send(err || {error : 'something went wrong'})
    }
  })
})

module.exports = router;
