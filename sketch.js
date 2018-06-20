 // https://vimeo.com/channels/learningp5js/142698163


var inc = 0.1;
var cupcake;

function preload(){

	cupcake = loadImage('cupcake.png');
}

function setup() {
	createCanvas(1000, 1000);
  	frameRate(10);


}




function draw() {
	background(random(100,0),random(100,0),random(100,0));
	push();
  	translate(width/2, height/2);
  	rotate(inc);
	for (var i = 0; i < 300; i++) {
		push();
		rotate(TWO_PI * i / 8*inc);
		strokeWeight(random(10));
		stroke(random(100,200),random(100,200),random(100,200));
		fill(random(100,200),random(100,200),random(100,200));
		ellipse(10*i*.3+inc, inc, random(20));
		pop();
	}
	image(cupcake,-20,-20,200,200);
	image(cupcake,-200,-200,200,200);
	pop();

	


inc+=0.1
}