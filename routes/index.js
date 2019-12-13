var express = require('express');
var router = express.Router();
var SurveyModel = require('./../models/survey')

// get survey listing
router.get('/', function(req, res){
  SurveyModel.find({}).exec(function(err, foundSurvey){
    if(!err && foundSurvey){
      res.status(200).send(foundSurvey)
    }else{
      res.status(400).send(err || {error: 'something went wrong'})
    }
  })
})

// to create a survey
router.post('/', function(req, res) {
  let data = {
    id: req.body.id,
    name: req.body.name
  }
  let dataUpdate = new SurveyModel(data)
  dataUpdate.save(function(err, createdSurvey){
    if(!err && createdSurvey){
      res.status(200).send(createdSurvey)
    }else{
      res.status(400).send(err || {error: 'something went wrong'})
    }
  })
})

module.exports = router;
