var params = {
  Input: { /* required */
    AspectRatio: 'STRING_VALUE',
    Container: 'STRING_VALUE',
    DetectedProperties: {
      DurationMillis: 0,
      FileSize: 0,
      FrameRate: 'STRING_VALUE',
      Height: 0,
      Width: 0
    },
    Encryption: {
      InitializationVector: 'STRING_VALUE',
      Key: 'STRING_VALUE',
      KeyMd5: 'STRING_VALUE',
      Mode: 'STRING_VALUE'
    },
    FrameRate: 'STRING_VALUE',
    Interlaced: 'STRING_VALUE',
    Key: 'STRING_VALUE',
    Resolution: 'STRING_VALUE'
  },
  PipelineId: 'STRING_VALUE', /* required */
  Output: {
    AlbumArt: {
      Artwork: [
        {
          AlbumArtFormat: 'STRING_VALUE',
          Encryption: {
            InitializationVector: 'STRING_VALUE',
            Key: 'STRING_VALUE',
            KeyMd5: 'STRING_VALUE',
            Mode: 'STRING_VALUE'
          },
          InputKey: 'STRING_VALUE',
          MaxHeight: 'STRING_VALUE',
          MaxWidth: 'STRING_VALUE',
          PaddingPolicy: 'STRING_VALUE',
          SizingPolicy: 'STRING_VALUE'
        },
        /* more items */
      ],
      MergePolicy: 'STRING_VALUE'
    },
    Captions: {
      CaptionFormats: [
        {
          Encryption: {
            InitializationVector: 'STRING_VALUE',
            Key: 'STRING_VALUE',
            KeyMd5: 'STRING_VALUE',
            Mode: 'STRING_VALUE'
          },
          Format: 'STRING_VALUE',
          Pattern: 'STRING_VALUE'
        },
        /* more items */
      ],
      CaptionSources: [
        {
          Encryption: {
            InitializationVector: 'STRING_VALUE',
            Key: 'STRING_VALUE',
            KeyMd5: 'STRING_VALUE',
            Mode: 'STRING_VALUE'
          },
          Key: 'STRING_VALUE',
          Label: 'STRING_VALUE',
          Language: 'STRING_VALUE',
          TimeOffset: 'STRING_VALUE'
        },
        /* more items */
      ],
      MergePolicy: 'STRING_VALUE'
    },
    Composition: [
      {
        TimeSpan: {
          Duration: 'STRING_VALUE',
          StartTime: 'STRING_VALUE'
        }
      },
      /* more items */
    ],
    Encryption: {
      InitializationVector: 'STRING_VALUE',
      Key: 'STRING_VALUE',
      KeyMd5: 'STRING_VALUE',
      Mode: 'STRING_VALUE'
    },
    Key: 'STRING_VALUE',
    PresetId: 'STRING_VALUE',
    Rotate: 'STRING_VALUE',
    SegmentDuration: 'STRING_VALUE',
    ThumbnailEncryption: {
      InitializationVector: 'STRING_VALUE',
      Key: 'STRING_VALUE',
      KeyMd5: 'STRING_VALUE',
      Mode: 'STRING_VALUE'
    },
    ThumbnailPattern: 'STRING_VALUE',
    Watermarks: [
      {
        Encryption: {
          InitializationVector: 'STRING_VALUE',
          Key: 'STRING_VALUE',
          KeyMd5: 'STRING_VALUE',
          Mode: 'STRING_VALUE'
        },
        InputKey: 'STRING_VALUE',
        PresetWatermarkId: 'STRING_VALUE'
      },
      /* more items */
    ]
  },
  OutputKeyPrefix: 'STRING_VALUE',
  Outputs: [
    {
      AlbumArt: {
        Artwork: [
          {
            AlbumArtFormat: 'STRING_VALUE',
            Encryption: {
              InitializationVector: 'STRING_VALUE',
              Key: 'STRING_VALUE',
              KeyMd5: 'STRING_VALUE',
              Mode: 'STRING_VALUE'
            },
            InputKey: 'STRING_VALUE',
            MaxHeight: 'STRING_VALUE',
            MaxWidth: 'STRING_VALUE',
            PaddingPolicy: 'STRING_VALUE',
            SizingPolicy: 'STRING_VALUE'
          },
          /* more items */
        ],
        MergePolicy: 'STRING_VALUE'
      },
      Captions: {
        CaptionFormats: [
          {
            Encryption: {
              InitializationVector: 'STRING_VALUE',
              Key: 'STRING_VALUE',
              KeyMd5: 'STRING_VALUE',
              Mode: 'STRING_VALUE'
            },
            Format: 'STRING_VALUE',
            Pattern: 'STRING_VALUE'
          },
          /* more items */
        ],
        CaptionSources: [
          {
            Encryption: {
              InitializationVector: 'STRING_VALUE',
              Key: 'STRING_VALUE',
              KeyMd5: 'STRING_VALUE',
              Mode: 'STRING_VALUE'
            },
            Key: 'STRING_VALUE',
            Label: 'STRING_VALUE',
            Language: 'STRING_VALUE',
            TimeOffset: 'STRING_VALUE'
          },
          /* more items */
        ],
        MergePolicy: 'STRING_VALUE'
      },
      Composition: [
        {
          TimeSpan: {
            Duration: 'STRING_VALUE',
            StartTime: 'STRING_VALUE'
          }
        },
        /* more items */
      ],
      Encryption: {
        InitializationVector: 'STRING_VALUE',
        Key: 'STRING_VALUE',
        KeyMd5: 'STRING_VALUE',
        Mode: 'STRING_VALUE'
      },
      Key: 'STRING_VALUE',
      PresetId: 'STRING_VALUE',
      Rotate: 'STRING_VALUE',
      SegmentDuration: 'STRING_VALUE',
      ThumbnailEncryption: {
        InitializationVector: 'STRING_VALUE',
        Key: 'STRING_VALUE',
        KeyMd5: 'STRING_VALUE',
        Mode: 'STRING_VALUE'
      },
      ThumbnailPattern: 'STRING_VALUE',
      Watermarks: [
        {
          Encryption: {
            InitializationVector: 'STRING_VALUE',
            Key: 'STRING_VALUE',
            KeyMd5: 'STRING_VALUE',
            Mode: 'STRING_VALUE'
          },
          InputKey: 'STRING_VALUE',
          PresetWatermarkId: 'STRING_VALUE'
        },
        /* more items */
      ]
    },
    /* more items */
  ],
  Playlists: [
    {
      Format: 'STRING_VALUE',
      HlsContentProtection: {
        InitializationVector: 'STRING_VALUE',
        Key: 'STRING_VALUE',
        KeyMd5: 'STRING_VALUE',
        KeyStoragePolicy: 'STRING_VALUE',
        LicenseAcquisitionUrl: 'STRING_VALUE',
        Method: 'STRING_VALUE'
      },
      Name: 'STRING_VALUE',
      OutputKeys: [
        'STRING_VALUE',
        /* more items */
      ],
      PlayReadyDrm: {
        Format: 'STRING_VALUE',
        InitializationVector: 'STRING_VALUE',
        Key: 'STRING_VALUE',
        KeyId: 'STRING_VALUE',
        KeyMd5: 'STRING_VALUE',
        LicenseAcquisitionUrl: 'STRING_VALUE'
      }
    },
    /* more items */
  ],
  UserMetadata: {
    someKey: 'STRING_VALUE',
    /* anotherKey: ... */
  }
};

module.exports = params;