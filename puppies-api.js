'use strict';

let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let puppySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  adjective: {
    type: String
  }
});




let Puppy = mongoose.model('Puppy', puppySchema);


mongoose.connect('mongodb://localhost/puppies', function(err){
    if (err) {
        console.log('failed to connect to db with err ', err);
    } else {
        console.log('connected to users db');

    }
});


app.post('/addpuppy', function(req, res, next){
    console.log('req.body', req.body);
  let puppy = new Puppy(req.body.puppy);
  puppy.save(function(err, result){
    if (err){
      console.error(err);
    } else {
      res.send({success: true, message: 'Puppy saved successfully', data: result})
    }
  })
})


app.get('/puppies', function(req, res, next){
  Puppy.find({}, function(err, result){
    if (err){
      console.error(err);
    } else {
      res.json(result);
    }
  })
})



app.listen(8080, function() {
    console.log('The app is listening on port 8080!');
});
