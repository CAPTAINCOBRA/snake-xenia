var s;
var scl = 20; //It represtents scale or one grid
//vector is an easy way to store both an x and a y

var food;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  s.total++;
}

//Draw function loops forever
function draw() {
  background(51);
  s.death();
  s.update();
  s.show();

  if (s.eat(food)) {
    pickLocation();
  }

  fill(255, 0, 100); //color of food
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}

// setup();
// draw();

// let s;
// let scl = 20;
// let food;

// function setup() {
//   createCanvas(600, 600);
//   s = new Snake();
//   frameRate(10);
//   pickLocation();
// }

// function pickLocation() {
//   let cols = floor(width / scl);
//   let rows = floor(height / scl);
//   food = createVector(floor(random(cols)), floor(random(rows)));
//   food.mult(scl);
// }

// function mousePressed() {
//   s.total++;
// }

// function draw() {
//   background(51);
//   if (s.eat(food)) {
//     pickLocation();
//   }
//   s.death();
//   s.update();
//   s.show();
//   fill(255, 0, 100);
//   rect(food.x, food.y, scl, scl);
// }

// function keyPressed() {
//   if (keyCode === UP_ARROW) {
//     s.dir(0, -1);
//   } else if (keyCode === DOWN_ARROW) {
//     s.dir(0, 1);
//   } else if (keyCode === RIGHT_ARROW) {
//     s.dir(1, 0);
//   } else if (keyCode === LEFT_ARROW) {
//     s.dir(-1, 0);
//   }
// }
