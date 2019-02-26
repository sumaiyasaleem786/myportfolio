window.onload=function(){


var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString("Hello, I'm Sumaiya.")
	.pauseFor(7500)
	.start();

}