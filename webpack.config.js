module.exports = {
  entry: './index.js',
  // 禁止压缩成一行
  mode: "development",
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                [
                  "@babel/plugin-transform-react-jsx",
                  {pragma: "ToyReact.createElement"} //用于替换react的方法名字 不加的话 React.createElement
                ]
              ]
            }
          }
        ]
      }
    ]
  }

};