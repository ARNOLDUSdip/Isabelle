var hearts = []; 

function setup() { 
  createCanvas(windowWidth, windowHeight);
  noStroke();


  for (var i = 0; i < 50; i++) {
    var x = random(width);
    var y = random(height/3);
    var d = random(20, 150);
    var c = color(random(255), random(255), 255);
    var s = random(0.2, 3);
  	hearts[i] = new DrawCircle(x, y, d, c, s);
  }
} 

function draw() { 
  background(220);
 
  
 
  for (var i = 0; i < hearts.length; i++) {
  	hearts[i].move();
    hearts[i].display();
  }
  
 
  if (hearts.length > 60) {
  	hearts.shift();
  }
  textSize(width/20);
  fill(0, 200, 200);
  textAlign(CENTER, CENTER);
  text('Sal jy my meisie wees Isabelle?',width/2,height/2);
}

function mousePressed() {
 
  var d = random(20, 150);
  var c = color(random(255), 240, random(255));
  var s = random(0.2, 3);
	var newCircle = new DrawCircle(mouseX, mouseY, d, c, s);
  hearts.push(newCircle);
}


function DrawCircle( x, y, d, c, s ) {
  
  this.xPos = x;
  this.yPos = y;
  this.diameter = d;
	this.color = c;
  this.speed = s;
}

DrawCircle.prototype = {
	constructor: DrawCircle,
  
  display: function() {
    fill(this.color);
    heart(this.xPos,this.yPos, this.diameter);
    
  },
  
 
  move: function() {
		this.yPos += this.speed;
    if (this.yPos - this.diameter/2 > height) {
    	this.yPos = -this.diameter/2;
    }
	}
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}