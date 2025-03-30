import {Config} from 'remotion';

Config.Rendering.setImageFormat('jpeg');
Config.Output.setOverwriteOutput(true);

// Set up any necessary video configuration
Config.Bundling.overrideWebpackConfig((currentConfiguration) => {
  return {
    ...currentConfiguration,
    module: {
      ...currentConfiguration.module,
      rules: [
        ...(currentConfiguration.module?.rules ?? []),
        {
          test: /\.env$/,
          use: ['dotenv-loader'],
        },
      ],
    },
  };
});

// Handle environment variables
if (!process.env.OPENAI_API_KEY) {
  console.warn('Warning: OPENAI_API_KEY is not set in environment variables');
}

if (!process.env.GOOGLE_API_KEY) {
  console.warn('Warning: GOOGLE_API_KEY is not set in environment variables');
}

// You can add more configuration options here as needed
export const COMPOSITION_CONFIG = {
  VIDEO_WIDTH: 1920,
  VIDEO_HEIGHT: 1080,
  VIDEO_FPS: 30,
  DEFAULT_DURATION: 300, // 10 seconds at 30fps
};
