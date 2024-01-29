import path from 'path';
import webpack from 'webpack';
import 'babel-loader';

export default {
  mode: 'development', // Setting the mode - 'development' or 'production'

  entry: './src/js/carbon_intensity.js', // Entry point of your application

  output: {
    path: path.resolve(process.cwd(), 'dist'), // Output directory
    filename: 'bundle.js' // Output file name
  },

  module: {
    rules: [
      {
        test: /\.js$/, // Apply the loader to .js files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader to transpile JS
          options: {
            presets: ['@babel/preset-env'] // Preset used for env setup
          }
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js'], // File extensions to handle
    fallback: { 'path': false }, // Ignore path module
  }
};
