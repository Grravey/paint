const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  // mode: 'development', // You can set mode to 'development' for development-specific settings
  entry: './src/index.ts', // Your entry point

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // Add '.ts' and '.tsx' as resolvable extensions.
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Your HTML template file
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets', to: 'assets' }, //to the dist root directory
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.ts$/, // Regex for TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'css-modules-typescript-loader'],
      },
      // ... other rules like for CSS or HTML files
    ],
  },

  // Development server configuration
  devServer: {
    static: './dist', // Folder to serve files from
    open: true, // Open the browser after server had been started
    hot: true, // Enable webpack's Hot Module Replacement feature
    port: 3000, // Set a custom port
  },

  // Add more configurations here (like loaders, plugins)
};
