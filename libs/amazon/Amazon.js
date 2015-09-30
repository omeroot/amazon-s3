var AWS = require('aws-sdk');
var conf = require('../../configure/amazon');

function Amazon() {
  this.AWS = AWS;
};

Amazon.prototype.loadConfig = function (service) {
  switch (service) {
    case 'transcode':
      this.AWS.config.accessKeyId = conf.auth.transcode.AWS_ACCESS_KEY;
      this.AWS.config.secretAccessKey = conf.auth.transcode.AWS_SECRET_KEY;
      this.AWS.config.region = conf.auth.transcode.REGION;
      break;
    case 'read':
      AWS.config.accessKeyId = conf.auth.read.AWS_ACCESS_KEY;
      AWS.config.secretAccessKey = conf.auth.read.AWS_SECRET_KEY;
      AWS.config.region = conf.auth.read.REGION;
      break;
    case 'write':
      AWS.config.accessKeyId = conf.auth.write.AWS_ACCESS_KEY;
      AWS.config.secretAccessKey = conf.auth.write.AWS_SECRET_KEY;
      AWS.config.region = conf.auth.write.REGION;
      break;
  }
  return this;
};

module.exports = new Amazon();