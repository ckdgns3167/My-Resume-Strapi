module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: "AKIAUE37JBIAE7OJH7IB",
      secretAccessKey: "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",
      region: "ap-northeast-2",
      params: {
        Bucket: "myresumestrapis3",
      },
    },
  },
});
