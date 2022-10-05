var gulp = require('gulp');
sass = require("gulp-sass"),
postcss = require("gulp-postcss");
autoprefixer = require("autoprefixer");
var sourcemaps = require('gulp-sourcemaps'); 
var browserSync = require('browser-sync').create(); 
cssbeautify = require('gulp-cssbeautify');
var beautify = require('gulp-beautify');


//_______ task for scss folder to css main style 
gulp.task('watch', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('HTML/assets/scss/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('HTML/assets/css'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})

//_______task for style-dark
gulp.task('dark', function(){
   return gulp.src('HTML/assets/css/dark-style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('HTML/assets/css'));
		
});


//_______task for sidemenu
gulp.task('sidemenu', function(){
	return gulp.src('HTML/assets/css/sidemenu/sidemenu.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('HTML/assets/css/sidemenu'));
		 
 });
 
 
//_______task for sidemenu
gulp.task('menu2', function(){
	return gulp.src('HTML/assets/css/sidemenu/sidemenu2.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('HTML/assets/css/sidemenu'));
		 
 });
  
//_______task for sidemenu
gulp.task('menu3', function(){
	return gulp.src('HTML/assets/css/sidemenu/sidemenu3.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('HTML/assets/css/sidemenu'));
		 
 });
 
  
//_______task for sidemenu
gulp.task('menu4', function(){
	return gulp.src('HTML/assets/css/sidemenu/sidemenu4.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('HTML/assets/css/sidemenu'));
		 
 });
 
//_______task for sidemenu
gulp.task('menu-closed', function(){
	return gulp.src('HTML/assets/css/sidemenu/sidemenu-closed.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('HTML/assets/css/sidemenu'));
		 
 });


//_______task for Color
gulp.task('color', function(){
	return gulp.src('HTML/assets/css/colors/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(beautify.css({ indent_size: 4 }))	
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('HTML/assets/css/colors'));
});



//_______task for skinmodes
gulp.task('skin', function(){
   return gulp.src('HTML/assets/css/skins.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('HTML/assets/css'));
		
})
 
 
 
//_______task for style-dark
gulp.task('boxed', function(){
   return gulp.src('HTML/assets/css/boxed.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('HTML/assets/css'));
		
}); 


 
//_______task for style-dark
gulp.task('dark-boxed', function(){
   return gulp.src('HTML/assets/css/dark-boxed.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('HTML/assets/css'));
		
}); 


//_______task for style-dark
gulp.task('responsive', function(){
   return gulp.src('HTML/assets/css/sidemenu-responsive.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('HTML/assets/css'));
		
});

//_______task for style-dark
gulp.task('tabs', function(){
   return gulp.src('HTML/assets/css/sidemenu-responsive-tabs.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('HTML/assets/css'));
		
});



//_______ task for scss folder to css main style 
gulp.task('watch-rtl', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('HTML/assets/scss-rtl/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('HTML/assets/css-rtl'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})

//_______task for style-dark
gulp.task('dark-rtl', function(){
   return gulp.src('HTML/assets/css-rtl/dark-style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('HTML/assets/css-rtl'));
		
});


//_______task for sidemenu
gulp.task('sidemenu-rtl', function(){
	return gulp.src('HTML/assets/css-rtl/sidemenu/sidemenu.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('HTML/assets/css-rtl/sidemenu'));
		 
 });
 
//_______task for sidemenu
gulp.task('menu2-rtl', function(){
	return gulp.src('HTML/assets/css-rtl/sidemenu/sidemenu2.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('HTML/assets/css-rtl/sidemenu'));
		 
 });
 
//_______task for sidemenu
gulp.task('menu3-rtl', function(){
	return gulp.src('HTML/assets/css-rtl/sidemenu/sidemenu3.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('HTML/assets/css-rtl/sidemenu'));
		 
 });


//_______task for sidemenu
gulp.task('menu4-rtl', function(){
	return gulp.src('HTML/assets/css-rtl/sidemenu/sidemenu4.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('HTML/assets/css-rtl/sidemenu'));
		 
 });


//_______task for sidemenu
gulp.task('menu-closed-rtl', function(){
	return gulp.src('HTML/assets/css-rtl/sidemenu/sidemenu-closed.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('HTML/assets/css-rtl/sidemenu'));
		 
 });

//_______task for style-dark
gulp.task('boxed-rtl', function(){
   return gulp.src('HTML/assets/css-rtl/boxed.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('HTML/assets/css-rtl'));
		
});

//_______task for style-dark
gulp.task('dark-boxed-rtl', function(){
   return gulp.src('HTML/assets/css-rtl/dark-boxed.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('HTML/assets/css-rtl'));
		
});


//_______task for style-dark
gulp.task('responsive-rtl', function(){
   return gulp.src('HTML/assets/css-rtl/sidemenu-responsive.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('HTML/assets/css-rtl'));
		
});

//_______task for style-dark
gulp.task('tabs-rtl', function(){
   return gulp.src('HTML/assets/css-rtl/sidemenu-responsive-tabs.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('HTML/assets/css-rtl'));
		
});


//_______task for Color
gulp.task('color-rtl', function(){
	return gulp.src('HTML/assets/css-rtl/colors/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(beautify.css({ indent_size: 4 }))	
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('HTML/assets/css-rtl/colors'));
});



//_______task for skinmodes
gulp.task('skin-rtl', function(){
   return gulp.src('HTML/assets/css-rtl/skins.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('HTML/assets/css-rtl'));
		
})
 




