function setup() {
  createCanvas(800, 600);
}

// position variables
let x = 340;
let y = 100;

// game logic variables
let veloX = 0.005;
let veloY = 0.005;
let acc = 0.005;

// game state variables
let state = "start";

// function for steering
function move() {
  switch (key) {

    case "w":
      y += -1;
      veloY = veloY - 0.0007;

        break;
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

function mouseClicked(){

  if(mouseX >= 325  && mouseX <=475 && mouseY >= 325 && mouseY <=375){

    state = "game";
  }
  
}

// function that draws the start button

function startButton(){

  rect(325,325,150,50, 5);
  textSize(32);
  text('PLAY ▶', 340, 360);

}

// function that draws the home screen

function homeScreen(){

  bg();
  textSize(75);
  text('DRONE LANDER', 120, 210);
  startButton();


}

// function that draws the game screen

function gameScreen(){
  
  move();
  bg();
  drone(x, y);

}

// function that draws the game screen

function resultScreen(){


}

// gravity logic
 
function draw() {

  if(state === "start"){

    homeScreen();

  } else if (state === "game"){

    gameScreen();

  } else if(state === "result") {

    resultScreen();

  }
  

  y = y + veloY;
  veloY = veloY + acc;

  frameRate(60);

}

