var express = require('express');
var body_parser = require('body-parser');
var path = require('path');

var Transcode = require('./libs/amazon/Transcode');
var AS3 = require('./libs/amazon/AS3');
var Job = require('./libs/amazon/JobLoader');
var Upload = require('./libs/amazon/UploadLoader');
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

app.get('/jobStatus', function (req, res) {
  console.log("res received");
  var t = new Transcode(amazon.loadConfig('transcode').AWS);
  var jobId = req.query.jobId;
  if (jobId) {
    t.readJob({Id: jobId}, function (err, result) {
      if (err) {
        console.log('error jobstatus url',result);
        res.status(codes.forbidden.code).json(codes.forbidden);
      } else {
        console.log(result);
        res.status(codes.success.code).json(result);
      }
    });
  }else{
    res.status(codes.badRequest.code).json(codes.badRequest);
  }
});

app.get('/transcode', function (req, res) {
  var t = new Transcode(amazon.loadConfig('transcode').AWS);

  var newJob = Job.setInputKey('videos/eray.webm')
      .setPipelineId('1443532774984-n248y6')
      .setOutputKeyPrefix('videos/')
      .setOutputKey('testeray345.webm')
      .setOutputPresetId('1351620000001-000010')
      .Job;

  t.transcode(newJob, function (err, result) {
    if (err) {
      console.log(err);
      res.status(codes.forbidden.code).json(codes.forbidden);
    } else {
      console.log(result.Job.Id);
      res.status(codes.success.code).json(result.Job.Id);
    }
  });

});

app.get('/sign_s3', function (req, res) {

  var as3 = new AS3(amazon.loadConfig('write').AWS);

  var newUpload = Upload.setBucket('expo.transcode')
      .setKey('videos/' + req.query.file_name)
      .setExpires(60)
      .setContentType(req.query.file_type)
      .setACL('public-read')
      .uploadParams;

  as3.getSignedUrl(newUpload, 'putObject', function (err, result) {
    if (err) {
      console.log(result);
      res.status(codes.forbidden.code).json(codes.forbidden);
    } else {
      console.log(result);
      res.status(codes.success.code).json(result);
    }
  });
});

app.listen(app.get('port'));
