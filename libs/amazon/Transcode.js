function Transcode(aws) {
  this.elasticTranscoder = new aws.ElasticTranscoder();
};

Transcode.prototype.transcode = function (jobConfig, callback) {
  this.elasticTranscoder.createJob(jobConfig, function (err, data) {
    if (err) {
      callback(true, err)
    } else {
      callback(null, data);
    }
  });
};

Transcode.prototype.readJob = function (params, callback) {
  this.elasticTranscoder.readJob(params, function (err, data) {
    if (err) {
      callback(true, err);
    } else {
      callback(null, data);
    }
  });
};

module.exports = Transcode;