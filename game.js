function setup() {
  createCanvas(800, 600);
}

// position variables
let x = 340;
let y = 100;

// game logic variables
let veloY = 0.2;
let acc = 0.2;

// game state variables
let state = "start";

// function for steering
function keyPressed() {
  if (key === "w" && y >= 0) {
    veloY = veloY - 0.7;
    key = null;
  }
}

// function that draws the drone
function drone(x, y) {
  // amazon box

  scale(1);
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

// function that draws the background

function bg() {
  background(200, 230, 255);
  push();
  fill(0, 100, 10);
  noStroke();
  rect(0, 450, 800, 250);
  pop();
}

// function for the play button

function mouseClicked() {
  if (mouseX >= 325 && mouseX <= 475 && mouseY >= 325 && mouseY <= 375) {
    state = "game";
  } else if (mouseX >= 725 && mouseX <= 745 && mouseY >= 10 && mouseY <= 60){
    state = "start";
  }
}

// function that draws the start button

function startButton() {
  push();
  fill(255,255,255);
  rect(325, 325, 150, 50, 5);
  textSize(32);
  fill(0,0,0);
  text("PLAY ▶", 340, 360);
  pop();
}

function restartButton() {
  push();
  fill(255,255,255);
  rect(720, 10, 50, 50, 5);
  textSize(48);
  fill(0,0,0);
  text("⭮", 724.5, 52.5);
  pop();
}



function homeScreen() {
  x = 340;
  y = 100;
  veloY = 0.002;
  acc = 0.02;
  
  bg();
  push();
  textSize(32);
  textFont('Lucida Handwriting');
  text("Jeff Bezos's", 130, 130);
  pop();
  textSize(75);
  text("DRONE LANDER", 120, 210);
  startButton();
}

// function that draws the game screen

function gameScreen() {
  bg();
  drone(x, y);
  result();
  collison();
  text(`Meters per second: ${veloY.toFixed(1)}`, 25, 25); // Speedometer ChatGPT
}

function collison() {
  if (y >= 500) {
    veloY = 0;

  }
}

function result(){

  if (y >= 450 && y <= 499 && veloY <= 1) {
    state = "success";
  } else if (y >= 450 && y <= 499 && veloY >= 2) {
    state = "fail";
  } 

}

function resultScreenSuccess() {
  bg();
  restartButton();
  text("Success, Jeff Bezos approves!", 400, 200);
}
function resultScreenFail() {
bg();
restartButton();
text("Fail, You are not worthy.", 400, 200);
}

// function draw

function draw() {
  if (state === "start") {
    homeScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "success"){

resultScreenSuccess();

  } else if (state ==="fail"){

resultScreenFail();

  }

  // gravity logic

  y = y + veloY;
  veloY = veloY + acc;

  frameRate(60);
  keyPressed();
}
