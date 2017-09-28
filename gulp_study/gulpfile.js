// 'use strict'

//引入gulp
// var gulp = require('gulp');
// var browserSync = require('browser-sync').create();

// gulp.task('say', function () {
// 	// 执行say任务时执行的代码
// 	console.log('hello, world');
// });

// //复制文件
// gulp.task('copy', function() {
// 	gulp.src('src/*.html')
// 	.pipe(gulp.dest('dist/'));
// });

// //监视任务，一旦文件发生改动，就复制
// gulp.task('watch', function () {
// 	gulp.watch('src/*.html', ['copy']);
// });

// gulp.task('browser-sync', function () {
// 	browserSync.init({
// 		server: {
// 			baseDir: "./"
// 		}
// 	});
// });

// gulp.task('start', ['browser-sync', 'watch']);

// gulp.task("default", ['server']);
// //gulp.task('watch',['watch:css','watch:js','watch:html']);
// //gulp.task("init", ['css','font', 'js','jsLib', 'html']);

// gulp.task('server', ["watch"], function() {
//     browserSync.init({
//         server: {
//             baseDir: ["src"]
//         },
//         port: 8081
//     });
// });

// 安装依赖
var gulp = require('gulp');
var browserSync = require('browser-sync');
// 设置任务---架设静态服务器
gulp.task('browser-sync', function () {
	browserSync.init({
		files:['**'],
		server:{
		    baseDir:'./',  // 设置服务器的根目录
		    index:'src/index.html' // 指定默认打开的文件
		},
		port:8050  // 指定访问服务器的端口号
	});
});

gulp.task('browser-sync-proxy', function () {
    browserSync.init({
        files:['**'],
         proxy:'localhost', // 设置本地服务器的地址
         port:8080  // 设置访问的端口号
    });
});