let x = 100;
let y = 100;

function stoptext() {
  fill(0, 0, 0);
  textSize(12);
  text("press any key to stop!", 10, 20);
}

function move() {
  switch (key) {
    case "d":
      x += 1;
      break;
    case "a":
      x += -1;

      break;

    case "w":
      y += -1;

      break;
    case "s":
      y += 1;
      break;
  }
}

function drone(x, y) {
  background(255, 255, 255);

  // amazon box

  scale(2);
  fill(182, 162, 109);
  rect(x, y, 100, 75, 2.5);
  textSize(22);
  fill(0, 0, 0);
  text("amazon", x + 15, y + 54);

  // label

  push();
  noStroke();
  fill(255, 255, 250);
  rect(x + 10, y + 1, 35, 35, 0);
  pop();

  // drone

  fill(255, 188, 0);
  ellipse(x + 50, y - 35, 20, 10);
  rect(x + 20, y - 35, 50, 10, 1);
  rect(x - 15, y - 40, 50, 20, 1);
  rect(x + 65, y - 40, 50, 20, 1);
  fill(0, 0, 0);
  rect(x + 25, y - 32, 5, 40, 1);
  rect(x + 70, y - 32, 5, 40, 1);
}

function draw() {
  frameRate(60);
  drone(x, y);
  move();
  stoptext();
}
