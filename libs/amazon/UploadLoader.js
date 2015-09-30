var uploadParams = require('../../amazon-params/uploadParams');

function UploadLoader(){
  this.uploadParams = uploadParams;
}

UploadLoader.prototype.setBucket = function(bucket){
  this.uploadParams.Bucket = bucket;
  return this;
};

UploadLoader.prototype.setKey = function(key){
  this.uploadParams.Key = key;
  return this;
};

UploadLoader.prototype.setExpires = function(exp){
  this.uploadParams.Expires = exp;
  return this;
};

UploadLoader.prototype.setContentType = function(ct){
  this.uploadParams.ContentType = ct;
  return this;
};

UploadLoader.prototype.setACL = function(acl){
  this.uploadParams.ACL = acl;
  return this;
};

module.exports = new UploadLoader();