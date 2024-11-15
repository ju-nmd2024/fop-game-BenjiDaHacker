function setup() {
  createCanvas(800, 600);
}

let x = 100;
let y = 100;
let state = "start";

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

// background

function bg() {

background(200, 230, 255);
push();
fill(0, 100, 10);
noStroke();
rect(0, 450, 800, 250);
pop();

}

function mouseClicked(){

  if(mouseX >= 325  && mouseX <=375 && mouseY >= 325 && mouseY <=375){

    state = "game";
  }
  
}

// Start button

function startButton(){

  rect(x+225,y+225,150,50, 5);
  textSize(32);
  text('PLAY ▶', x+240, y+260);

}

function homeScreen(){

  bg();
  textSize(75);
  text('DRONE LANDER', x+20, y+110);
  startButton();


}

function gameScreen(){
  
  bg();
  drone(x, y);
  move();
  stoptext();

}

function resultScreen(){


}

function draw() {
  //gameScreen();
  if(state === "start"){

    homeScreen();

  } else if (state === "game"){

    gameScreen();

  } else if(state === "result") {

    resultScreen();

  }
  

  frameRate(60);
}

