const config = {
  babelrc: false,
  presets: [
    [
      '@babel/env',
      {
        targets: ['last 2 versions', 'ie >= 11']
      }
    ],
    '@babel/react'
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-proposal-object-rest-spread'],
    'transform-es2015-modules-commonjs',
    '@babel/plugin-transform-regenerator',
    'babel-plugin-treat',
    '@vanilla-extract/babel-plugin'
  ]
}

module.exports = require('babel-jest').createTransformer(config)
