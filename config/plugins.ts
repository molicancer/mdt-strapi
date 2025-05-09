export default {
  // 配置上传插件允许大文件上传
  upload: {
    config: {
      provider: 'local',
      providerOptions: {},
      sizeLimit: 100 * 1024 * 1024, // 设置为100MB
      breakpoints: {
        xxlarge: 2400,
        xlarge: 1920,
        large: 1080,
        medium: 720,
        small: 520,
        xsmall: 320,
      },
    },
  },
};
