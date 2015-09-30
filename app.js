var express = require('express');
var body_parser = require('body-parser');
var path = require('path');

var createjob = require(__dirname + '/amazon-params/createJob');


var Transcode = require('./libs/amazon/Transcode');
var AS3 = require('./libs/amazon/AS3');
var Job = require('./libs/amazon/Job');
var amazon = require('./libs/amazon/Amazon');

var codes = require('./messages/res-content');

var app = express();
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('port', 1337 || 5000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(body_parser.urlencoded());


app.get('/upload', function (req, res) {
  res.render('upload.html');
});

app.get('/getvideo', function (req, res) {
  var as3 = new AS3(amazon.loadConfig('read').AWS);
  var params = {Bucket: 'expo.videos', Key: 'videos/testeray.webm'};

  as3.getSignedUrl(params, 'getObject', function (err, result) {
    if (err) {
      res.status(codes.forbidden.code).json(codes.forbidden);
    } else {
      res.status(codes.success.code).json(result);
    }
  })


});

app.get('/transcode', function (req, res) {
  var t = new Transcode(amazon.loadConfig('transcode').AWS);

  var newJob = Job.setInputKey('videos/eray.webm')
      .setPipelineId('1443532774984-n248y6')
      .setOutputKeyPrefix('videos/')
      .setOutputKey('testeray.webm')
      .setOutputPresetId('1351620000001-000010')
      .Job;

  t.transcode(newJob, function (err, result) {
    if (err) {
      res.status(codes.forbidden.code).json(codes.forbidden);
    } else {
      res.status(codes.success.code).json(result);
    }
  });

});

app.get('/sign_s3', function (req, res) {

  var as3 = new AS3(amazon.loadConfig('write').AWS);

  var s3_params = {
    Bucket: 'expo.videos',
    Key: 'videos/' + req.query.file_name,
    Expires: 60,
    ContentType: req.query.file_type,
    ACL: 'public-read'
  };

  as3.getSignedUrl(s3_params, 'putObject', function (err, result) {
    if (err) {
      console.log(err);
      res.status(codes.forbidden.code).json(codes.forbidden);
    } else {
      console.log(result);
      res.status(codes.success.code).json(result);
    }
  });
});

app.listen(app.get('port'));
