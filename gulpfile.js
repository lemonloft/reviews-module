const gulp = require('gulp');
const run = require('gulp-run');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

gulp.task('assets', () => {
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
    gulp.src('./public/index.js') // get input files.
      .pipe(gulp.dest('https://pplemonloft.s3-us-west-1.amazonaws.com/index.js'));
  });
});

then(() => {
  console.log('build complete');
  run('aws s3 cp  ./public/index.js s3://reservation-airbnb/ --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers').exec();
}).catch((err) => {
  console.log(err, 'Error');
});