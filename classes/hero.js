/*global keyIsPressed,Mover,Door,Sprite,wld,lvl,gameState,resetCamera,img,camera,gridSize,resizeCanvas,world,round,key,abs,rect,ceil,scale,push,pop,frameCount,createCanvas,color,translate,triangle,frameRate,beginShape,endShape,curveVertex,shuffle,sin,cos,floor,rotate,textAlign,LEFT,RIGHT,CENTER,text,textSize,stroke,noStroke,strokeWeight,keyCode,keyIsDown,LEFT_ARROW,RIGHT_ARROW,UP_ARROW,DOWN_ARROW,mouseIsPressed,fill,noFill,mouseX,mouseY,line,ellipse,background,displayWidt
h,displayHeight,windowWidth,windowHeight,height,width,dist,loadSound,loadImage,image,random,angleMode,RADIANS,DEGREES*/

class Hero extends Mover {
  constructor(imageArray) {
    super(1, 1, 1, 1, 1, imageArray);
    this.x = 1;
    this.y = 1;
    this.newX = 1;
    this.newY = 1;
    this.state = "standing";
    this.holdingTool = false;
    this.toolX = 0.2;
    this.toolRotation = 0.5;
    this.scythe = loadImage(
      "https://cdn.glitch.com/f008b3ae-5d6b-4474-9377-414661c88ac7%2FharvestMoonScythe5.gif?1536173412374"
    );
  }

  show() {
    push();
    translate(
      (this.x - camera.x) * gridSize - gridSize / 2,
      (this.y - camera.y) * gridSize - gridSize
    );
    scale(this.direction, 1);

    image(
      this.imgArray[this.currentImg],
      0 - (gridSize / 2) * this.direction,
      0 - gridSize,
      gridSize * this.direction,
      gridSize
    );

    //fill("red");
    //ellipse(0, 0, 5, 5);
    push();
    // draw the current tool
    if (this.holdingTool) {
      translate(
        gridSize * this.toolX,
        -gridSize * (0.3 + (this.currentImg % 2) * 0.1 - 0.05)
      );
      //fill("yellow");
      //ellipse(0,0,5,5)
      rotate(-Math.PI * this.toolRotation);
      image(this.scythe, 0, 0, 0.7 * gridSize, 0.4 * gridSize);
    }
    pop();
    pop();
    // push()
    // translate(
    //   (this.raycast.x - camera.x) * gridSize - gridSize / 2,
    //   (this.raycast.y - camera.y) * gridSize - gridSize
    // );
    // //fill("pink")
    // //ellipse(0,0,9,9)
    // pop();
  }

  toolAnimation() {
    this.toolRotation = 0.35;
    this.toolX -= 0.11;
    setTimeout(() => {
      this.toolRotation = 0.2;
      this.toolX -= 0.11;
    }, 90);
    setTimeout(() => {
      this.toolRotation = 0.05;
      this.toolX -= 0.11;
    }, 180);
    setTimeout(() => {
      this.toolRotation = 0.5;
      this.toolX = 0.2;
    }, 270); // back to vertical
  }

  touchingDoor(i, j) {
    if (world[wld][lvl].map[i][j] instanceof Door) {
      if (
        dist(
          this.raycast.x,
          this.raycast.y,
          world[wld][lvl].map[i][j].x,
          world[wld][lvl].map[i][j].y
        ) < 0.5
      ) {
        gameState = "titlescreen";
        let tempDoor = world[wld][lvl].map[i][j];
        wld = tempDoor.gotoWorld;
        lvl = tempDoor.gotoLevel;
        this.state = "standing";
        //startButton.show()
        this.spawn();
        return true;
      }
    }
    return false;
  }
  update() {
    if (this.state == "running") {
      if (frameCount % 5 == 0) {
        this.currentImg++;
        if (this.currentImg >= this.imgArray.length) {
          this.currentImg = 0;
        }
      }
      this.move();
    } else if (this.state == "standing") {
      this.currentImg = 0;
    }
  }
  move() {
    if (this.newX < this.x) {
      this.direction = -1;
    } else if (this.newX > this.x) {
      this.direction = 1;
    }
    // this only happens if raycast doesn't detect a wall or a door
    this.x = this.raycast.x;
    this.y = this.raycast.y;

    // how quickly should player snap into standing position?
    if (abs(this.x - this.newX) < 0.05 && abs(this.y - this.newY) < 0.05) {
      this.state = "standing";
      this.currentImg = 0;
      this.x = this.newX;
      this.y = this.newY;
    }
  }
  spawn() {
    this.x = 1;
    this.y = 1;
    this.newX = 1;
    this.newY = 1;
    this.raycast = {
      x: 1,
      y: 1
    };
    resetCamera();
  }
}
