var params = {
  PipelineId: '', // specifies output/input buckets in S3
  OutputKeyPrefix: '',
  Input: {
    Key: '',
    FrameRate: 'auto',
    Resolution: 'auto',
    AspectRatio: 'auto',
    Interlaced: 'auto',
    Container: 'auto'
  },
  Output: {
    Key: '',
    PresetId: '', // specifies the output video format
    Rotate: 'auto'
  },

};

module.exports = params;


