/*global constrain,Level,noCursor,cursor,ARROW,createButton,loadFont,textFont,buildLevels,Hero,Sprite,Wall,Door,resizeCanvas,world,round,key,abs,rect,ceil,scale,push,pop,frameCount,createCanvas,color,translate,triangle,frameRate,beginShape,endShape,curveVertex,shuffle,sin,cos,floor,rotate,textAlign,LEFT,RIGHT,CENTER,text,textSize,stroke,noStroke,strokeWeight,keyCode,keyIsDown,LEFT_ARROW,RIGHT_ARROW,UP_ARROW,DOWN_ARROW,mouseIsPressed,fill,noFill,mouseX,mouseY,line,ellipse,background,displayWidth,displayHeight,windowWidth,windowHeight,height,width,dist,loadSound,loadImage,image,random,angleMode,RADIANS,DEGREES*/
let world;
let wld = 0;
let lvl = 0;
let gridSize;
let fieldOfView = 10;
let player;
let camera = {
  x: -5,
  y: -5,
  newX: -5,
  newY: -5
};
let images = {};
let hoverHighlightOn = true;
let frameRateSum = 0;
let frameRates = [];
let gameState = "titlescreen";
let myFont;
let startButton;

function preload() {
  images.water = loadImage(
    "https://cdn.glitch.com/f008b3ae-5d6b-4474-9377-414661c88ac7%2Fwater2.png?v=1572205689437"
  );
  images.roof = loadImage(
    "https://cdn.glitch.com/f008b3ae-5d6b-4474-9377-414661c88ac7%2Froof1.png?v=1571803414377"
  );
  images.brick = loadImage(
    "https://cdn.glitch.com/f008b3ae-5d6b-4474-9377-414661c88ac7%2Fwall2.png?v=1571262521867"
  );
  images.cobblestone = loadImage(
    "https://cdn.glitch.com/f008b3ae-5d6b-4474-9377-414661c88ac7%2Fcobble8.png?v=1572230407077"
  );
  images.cliff = loadImage(
    "https://cdn.glitch.com/bcd2d97a-a3a6-4c95-a869-471d86d9430d%2Fcliff02.png?v=1528858590669"
  );
  images.rock = loadImage(
    "https://cdn.glitch.com/bcd2d97a-a3a6-4c95-a869-471d86d9430d%2Fbigrock01.png?1528841600143"
  );
  images.smalltree = loadImage(
    "https://cdn.glitch.com/f008b3ae-5d6b-4474-9377-414661c88ac7%2Fsmalltree2.png?v=1571978270992"
  );
  images.bigtree = loadImage(
    "https://cdn.glitch.com/f008b3ae-5d6b-4474-9377-414661c88ac7%2Fbigtree01.png?v=1571943084106"
  );
  images.deadtree = loadImage(
    "https://cdn.glitch.com/f008b3ae-5d6b-4474-9377-414661c88ac7%2Fspookytree02.png?v=1571943082745"
  );
  images.tallgrass = loadImage(
    "https://cdn.glitch.com/f008b3ae-5d6b-4474-9377-414661c88ac7%2FtallGrass02.png?v=1535253104480"
  );
  images.gravestone = loadImage(
    "https://cdn.glitch.com/f008b3ae-5d6b-4474-9377-414661c88ac7%2Fpixelgrave02.png?v=1571943081459"
  );
  images.grassbg = loadImage(
    "https://cdn.glitch.com/bcd2d97a-a3a6-4c95-a869-471d86d9430d%2Fgrass.png?1528843673149"
  );
  images.sandbg = loadImage(
    "https://cdn.glitch.com/bcd2d97a-a3a6-4c95-a869-471d86d9430d%2Fsandtile.png?1527781885943"
  );
  images.cavebg = loadImage(
    "https://cdn.glitch.com/bcd2d97a-a3a6-4c95-a869-471d86d9430d%2Fcavetile.png?1527781885891"
  );
  images.hero1 = loadImage(
    "https://cdn.glitch.com/f008b3ae-5d6b-4474-9377-414661c88ac7%2FheroIdle.png?v=1571943072021"
  );
  images.hero2 = loadImage(
    "https://cdn.glitch.com/f008b3ae-5d6b-4474-9377-414661c88ac7%2FheroRun2.png?v=1571943076693"
  );
  images.hero3 = loadImage(
    "https://cdn.glitch.com/f008b3ae-5d6b-4474-9377-414661c88ac7%2FheroRun3.png?v=1571943078357"
  );
  images.hero4 = loadImage(
    "https://cdn.glitch.com/f008b3ae-5d6b-4474-9377-414661c88ac7%2FheroRun4.png?v=1571943080023"
  );
  images.cat1 = loadImage(
    "https://cdn.glitch.com/f008b3ae-5d6b-4474-9377-414661c88ac7%2Fcat1.png?v=1571710106445"
  );
  images.cat2 = loadImage(
    "https://cdn.glitch.com/f008b3ae-5d6b-4474-9377-414661c88ac7%2Fcat2.png?v=1571710106399"
  );
  myFont = loadFont(
    "https://cdn.glitch.com/f008b3ae-5d6b-4474-9377-414661c88ac7%2FpressStart.ttf?v=1571872754647"
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gridSize = (width + height) * 0.05;
  world = Level.buildLevels();
  print(world);
  player = new Hero([images.hero1, images.hero2, images.hero3, images.hero4]);
  resetCamera();
  document.getElementById("p5_loader").style.display = "none";
}

function draw() {
  playerControls();
  if (gameState == "titlescreen") {
    titleScreen();
  }
  if (gameState == "ingame") {
    if (player.x != player.newX || player.y != player.newY) {
      if (player.isRaycastClear()) {
        player.update();
      }
    } else {
      player.state = "standing";
      player.currentImg = 0;
    }
    drawBackgroundTile();
    world[wld][lvl].showLevelBehindPlayer(player, fieldOfView);
    player.show();
    world[wld][lvl].showLevelInFrontOfPlayer(player, fieldOfView);
    hoverHighlight();
    centerTheCamera();
    fill(0);
    frameRateSum += frameRate();
    //frameRates.push(frameRateSum += frameRate());
    //if(frameRates.length > 25){
    //  frameRates.splice(0,1)
    //}
    textSize(11);
    text("FPS: " + round(frameRateSum / frameCount), width / 2, 10);
    //text("FPS: " + round(frameRates.reduce((a,b) => a + b, 0) / frameRates.length), width / 2, 10);
  }
}

function titleScreen() {
  push();
  background("orange");
  stroke(0);
  fill(0);
  textSize(30);
  textFont("Press Start 2P");
  textFont("Courier New");
  textFont(myFont);
  textAlign(CENTER);
  text("Level " + wld + "-" + lvl, width * 0.5, height * 0.33);
  textSize(15);
  text("Click to Start", width * 0.5, height * 0.5);
  pop();
  frameRateSum += frameRate();
  textSize(11);
  text("FPS: " + round(frameRateSum / frameCount), width / 2, 10);
}

function resetCamera() {
  camera.x = 0.5 - width / 2 / gridSize;
  camera.y = -height / 2 / gridSize;
  camera.newX = camera.x;
  camera.newY = camera.y;
}

function usingKeys() {
  noCursor();
}

function usingMouse() {
  cursor(ARROW);
}

function drawBackgroundTile() {
  for (let row = -2 - (camera.y % 1); row < height / gridSize; row++) {
    for (
      let column = -2 - (camera.x % 1);
      column < width / gridSize;
      column++
    ) {
      image(
        world[wld][lvl].backgroundTile,
        column * gridSize,
        row * gridSize,
        gridSize,
        gridSize
      );
    }
  }
}

function hoverHighlight() {
  if (hoverHighlightOn) {
    noStroke();
    fill("rgba(0,0,255,0.2)");
    rect(
      ceil((mouseX + ((camera.x * gridSize) % gridSize)) / gridSize) *
        gridSize -
        ((camera.x * gridSize) % gridSize) -
        gridSize,
      ceil((mouseY + ((camera.y * gridSize) % gridSize)) / gridSize) *
        gridSize -
        ((camera.y * gridSize) % gridSize) -
        gridSize,
      gridSize,
      gridSize
    );
  }
}

function centerTheCamera() {
  camera.newX = (player.x * gridSize - gridSize / 2 - width / 2) / gridSize;
  camera.newY = (player.y * gridSize - gridSize - height / 2) / gridSize;
  camera.x = camera.x + (camera.newX - camera.x) * 0.05;
  camera.y = camera.y + (camera.newY - camera.y) * 0.05;
}

function playerControls() {
  // combo keys
  if (keyIsDown(UP_ARROW) && keyIsDown(LEFT_ARROW)) {
    player.newY = round(player.y) - 0.7;
    player.state = "running";
    player.newX = round(player.x) - 0.7;
    player.direction = -1;
    return;
  }
  if (keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW)) {
    player.newY = round(player.y) - 0.7;
    player.state = "running";
    player.newX = round(player.x) + 0.7;
    player.direction = 1;
    return;
  }
  if (keyIsDown(DOWN_ARROW) && keyIsDown(LEFT_ARROW)) {
    player.newY = round(player.y) + 0.7;
    player.state = "running";
    player.newX = round(player.x) - 0.7;
    player.direction = -1;
    return;
  }
  if (keyIsDown(DOWN_ARROW) && keyIsDown(RIGHT_ARROW)) {
    player.newY = round(player.y) + 0.7;
    player.state = "running";
    player.newX = round(player.x) + 0.7;
    player.direction = 1;
    return;
  }
  // single keys
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    player.newY = round(player.y) - 1;
    player.state = "running";
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    player.newY = round(player.y) + 1;
    player.state = "running";
  }
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    player.newX = round(player.x) - 1;
    player.direction = -1;
    player.state = "running";
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    player.newX = round(player.x) + 1;
    player.direction = 1;
    player.state = "running";
  }
}

function keyPressed() {
  usingKeys();
  hoverHighlightOn = false;
  if (keyCode == 32) {
    //gameState = "ingame"
    player.toolAnimation();
    // loop thru near objects
    for (let i = ceil(player.y) - 5; i < ceil(player.y) + 5; i++) {
      if (i >= 0 && i < world[wld][lvl].map.length) {
        for (let j = ceil(player.x) - 5; j < ceil(player.x) + 5; j++) {
          if (
            j >= 0 &&
            world[wld][lvl].map[i] &&
            j < world[wld][lvl].map[i].length
          ) {
            if (world[wld][lvl].map[i][j]) {
              
              //if (world[wld][lvl].objects[i] instanceof TallGrass) {
              if (
                world[wld][lvl].map[i][j].y == player.newY &&
                (world[wld][lvl].map[i][j].x == player.newX ||
                  world[wld][lvl].map[i][j].x == player.newX + player.direction)
              ) {
                // could hurt enemies here eventually?
                //world[wld][lvl].objects.splice(i,1); // if enemy hp <= 0 splice it out
                world[wld][lvl].map[i][j].height = 0; // only affects tallGrass
                world[wld][lvl].map[i][j].growTimer = -900; // only affects tallGrass
              }
              //}
            }
          }
        }
      }
    }
  }
}
function mouseMoved() {
  usingMouse();
}

function mousePressed() {
  usingMouse();
  if (gameState == "titlescreen") {
    setTimeout(function() {
      gameState = "ingame";
    }, 50);
  }
  hoverHighlightOn = true;
  player.newX = ceil(mouseX / gridSize + camera.x);
  player.newY = ceil(mouseY / gridSize + camera.y) + 1;
  if (player.newX > player.x) {
    player.direction = 1;
  } else if (player.newX < player.x) {
    player.direction = -1;
  }
  player.state = "running";
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  gridSize = (windowWidth + windowHeight) * 0.05;
}
