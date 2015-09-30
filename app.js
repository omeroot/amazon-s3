var express = require('express');
var body_parser = require('body-parser');
var path = require('path');
var aws = require('aws-sdk');
var createjob = require(__dirname + '/amazon-params/createJob');
var conf = require('./configure/amazon.js');

var app = express();
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('port', 1337 || 5000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(body_parser.urlencoded());

//Writer
//var AWS_ACCESS_KEY = 'AKIAJPJNDFELTMUEA7MA';
//var AWS_SECRET_KEY = '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';
//aws.config.region = 'us-east-1';

//Transcoder
//var AWS_ACCESS_KEY = 'AKIAI6DEYVEIM5USLVVQ';
//var AWS_SECRET_KEY = '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';
//aws.config.region = 'us-west-2';

//Reader
/*
var AWS_ACCESS_KEY = 'AKIAIHS7TEDDLNOU7VXA';
var AWS_SECRET_KEY = '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';
aws.config.region = 'us-east-1';

var S3_BUCKET = 'expo.videos';
aws.config.accessKeyId = AWS_ACCESS_KEY;
aws.config.secretAccessKey = AWS_SECRET_KEY;
*/

app.get('/upload', function (req, res) {
  res.render('upload.html');
});

app.get('/getvideo', function (req, res) {
  var s3 = new aws.S3();
  var params = {Bucket: 'expo.videos', Key: 'videos/testeray.webm'};
  s3.getSignedUrl('getObject', params, function (err, url) {
    if (err) {
      console.log(err);
    }
    console.log("The URL is", url);
    res.json({url: 'https://' + S3_BUCKET + '.s3.amazonaws.com/videos/testeray.webm'});
  });

});

app.get('/transcode', function (req, res) {
  //var S3_BUCKET = 'expo.videos';
  aws.config.accessKeyId = conf.transcoder.AWS_ACCESS_KEY;
  aws.config.secretAccessKey = conf.transcoder.AWS_SECRET_KEY;
  aws.config.region = conf.transcoder.region;

  var elastictranscoder = new aws.ElasticTranscoder();

  elastictranscoder.createJob(createjob, function (err, data) {
    if (err) {
      console.log(err, err.stack);
    } // an error occurred
    else{
      console.log(data);           // successful response
      res.end();
    }
  });
});

app.get('/sign_s3', function (req, res) {
  //aws.config.update({accessKeyId: AWS_ACCESS_KEY, secretAccessKey: AWS_SECRET_KEY});
  var s3 = new aws.S3();
  var s3_params = {
    Bucket: S3_BUCKET,
    Key: 'videos/' + req.query.file_name,
    Expires: 60,
    ContentType: req.query.file_type,
    ACL: 'public-read'
  };
  s3.getSignedUrl('putObject', s3_params, function (err, data) {
    if (err) {
      console.log(err);
    }
    else {
      var return_data = {
        signed_request: data,
        url: 'https://' + S3_BUCKET + '.s3.amazonaws.com/videos/' + req.query.file_name
      };
      console.log(return_data);
      res.write(JSON.stringify(return_data));
      res.end();
    }
  });
});

app.post('/submit_form', function (req, res) {
  username = req.body.username;
  full_name = req.body.full_name;
  avatar_url = req.body.avatar_url;
  //update_account(username, full_name, avatar_url); // TODO: create this function
  // TODO: Return something useful or redirect
  console.log('that works man');
  res.end();
});


app.listen(app.get('port'));
