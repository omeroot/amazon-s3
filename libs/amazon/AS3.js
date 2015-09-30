function AS3(aws) {
  this.AWS = aws;
  this.s3 = new aws.S3();
}

AS3.prototype.getSignedUrl = function (params, action, callback) {

  this.s3.getSignedUrl(action, params, function (err, url) {
    if (err) {
      console.log(err);
      callback(true, err);
    } else {
      console.log(url);
      callback(null,{
        signed_request: url,
        url:'https://' + params.Bucket + '.s3.amazonaws.com/' + params.Key
      });
    }
  });
};

module.exports = AS3;