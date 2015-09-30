var jobParams = require('../../amazon-params/createJob');

function Job(){
  this.Job = jobParams;
};

Job.prototype.setPipelineId = function(pID){
  this.Job.PipelineId = pID;
  return this;
};

Job.prototype.setOutputKeyPrefix = function(pre){
  this.Job.OutputKeyPrefix = pre;
  return this;
};

Job.prototype.setInputKey = function(ikey){
  this.Job.Input.Key = ikey;
  return this;
};

Job.prototype.setOutputKey = function(okey){
  this.Job.Output.Key = okey;
  return this;
};

Job.prototype.setOutputPresetId = function(presetID){
  this.Job.Output.PresetId = presetID;
  return this;
};

Job.prototype.setInputContainer = function(cKey){
  this.Job.Input.Container = cKey;
  return this;
};

module.exports = new Job();