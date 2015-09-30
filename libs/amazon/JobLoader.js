var jobParams = require('../../amazon-params/createJob');

function JobLoader(){
  this.Job = jobParams;
};

JobLoader.prototype.setPipelineId = function(pID){
  this.Job.PipelineId = pID;
  return this;
};

JobLoader.prototype.setOutputKeyPrefix = function(pre){
  this.Job.OutputKeyPrefix = pre;
  return this;
};

JobLoader.prototype.setInputKey = function(ikey){
  this.Job.Input.Key = ikey;
  return this;
};

JobLoader.prototype.setOutputKey = function(okey){
  this.Job.Output.Key = okey;
  return this;
};

JobLoader.prototype.setOutputPresetId = function(presetID){
  this.Job.Output.PresetId = presetID;
  return this;
};

JobLoader.prototype.setInputContainer = function(cKey){
  this.Job.Input.Container = cKey;
  return this;
};

module.exports = new JobLoader();