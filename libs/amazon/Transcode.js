function Transcode(aws) {
  this.elasticTranscoder = new aws.ElasticTranscoder();
};

Transcode.prototype.transcode = function (jobConfig, callback) {
  this.elasticTranscoder.createJob(jobConfig, function (err, data) {
    if (err) {
      console.log(err, err.stack);
      callback(true, err)
    } else {
      console.log(data);
      callback(null, data);
    }
  });
};

module.exports = Transcode;