const gulp = require('gulp');
const run = require('gulp-run');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

function buildprocess(cb) {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        return reject(err);
      }
      if (stats.hasErrors()) {
        return reject(new Error(stats.compilation.errors.join('\n')));
      }
      resolve();
    });
  }).then(() => {
    console.log('build complete. Uploading to Amazon S3...');
    run('aws s3 cp  ./public/index.js s3://pplemonloft/ --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers').exec();
  }).catch((err) => {
    console.log('there was an error', err);
  });
}

exports.default = buildprocess;
