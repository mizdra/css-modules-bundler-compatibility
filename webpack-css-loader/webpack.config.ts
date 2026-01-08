import type { Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: Configuration = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: { transpileOnly: true },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [new MiniCssExtractPlugin()],
};

export default config;
