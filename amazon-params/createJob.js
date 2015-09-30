var params = {
  PipelineId: '1443532774984-n248y6', // specifies output/input buckets in S3
  OutputKeyPrefix: 'videos/',
  Input: {
    Key: 'videos/eray.webm',
    FrameRate: 'auto',
    Resolution: 'auto',
    AspectRatio: 'auto',
    Interlaced: 'auto',
    Container: 'auto'
  },
  Output: {
    Key: 'testeray.webm',
    PresetId: '1351620000001-000010', // specifies the output video format
    Rotate: 'auto'
  },

};

module.exports = params;


