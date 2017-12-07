const gulp			= require('gulp');
const watch			= require('gulp-watch');
const sourcemaps 	= require('gulp-sourcemaps');
const babel 		= require('gulp-babel');
const concat		= require('gulp-concat');

gulp.task('default', () => {
	return gulp.src('app/*.jsx')
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'))
});
gulp.task('watch', () => {
	watch('app/**.jsx',  () => gulp.start('default'));
})