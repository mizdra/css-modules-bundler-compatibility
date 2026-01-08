import type { Configuration } from 'webpack';

const config: Configuration = {
  entry: './src/main.ts',
  experiments: {
    css: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: { transpileOnly: true },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

export default config;
