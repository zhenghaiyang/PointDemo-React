var gulp = require('gulp');  // gulp 打包插件类似 webpack
var gulpTslint = require("gulp-tslint");  // gulp 结合 tslint插件
var tslint = require("tslint"); // tslint
var ts = require("gulp-typescript"); // gulp 打包ts代码
var sourcemaps = require('gulp-sourcemaps'); // 类似webpack sourcemaps
var merge = require('merge2');  // merge2 插件
var tsProject = ts.createProject("tsconfig.json" , { declaration: true }  );

var tslintFunction = function () {
  var program = tslint.Linter.createProgram("./tsconfig.json");
  gulp.src('src/**/*.ts')
    .pipe(gulpTslint({ program }))
    .pipe(gulpTslint.report({ emitError: false }));
};
var buildFunction = function () {
  var tsStream = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsProject())
  return merge([
    tsStream.js
      .pipe(sourcemaps.write())
      .pipe(gulp.dest("dist")),
    tsStream.dts.pipe(gulp.dest('./dist/'))])
};

gulp.task('tslint',tslintFunction);
gulp.task("build", buildFunction);
gulp.task('watch-tslint',function () {gulp.watch('src/**/*.ts', ['tslint']);});
