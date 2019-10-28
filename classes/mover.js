/*global keyIsPressed,Sprite,lvl,img,camera,gridSize,resizeCanvas,world,round,key,abs,rect,ceil,scale,push,pop,frameCount,createCanvas,color,translate,triangle,frameRate,beginShape,endShape,curveVertex,shuffle,sin,cos,floor,rotate,textAlign,LEFT,RIGHT,CENTER,text,textSize,stroke,noStroke,strokeWeight,keyCode,keyIsDown,LEFT_ARROW,RIGHT_ARROW,UP_ARROW,DOWN_ARROW,mouseIsPressed,fill,noFill,mouseX,mouseY,line,ellipse,background,displayWidth,displayHeight,windowWidth,windowHeight,height,width,dist,loadSound,loadImage,image,random,angleMode,RADIANS,DEGREES*/

class Mover extends Sprite {
  constructor(_x, _y, _z, _size, _direction, _imgArray) {
    super(_x, _y, _z, _size, _direction, _imgArray);
    this.newX = _x;
    this.newY = _y;
    this.wallDistance = 1;
    this.moveSpeed = round(random(40) + 50);
    this.raycast = {
      x: _x,
      y: _y
    };
  }
  update() {
    if (frameCount % round(this.moveSpeed / 5) == 0) {
      this.currentImg++;
      if (this.currentImg >= this.imgArray.length) {
        this.currentImg = 0;
      }
    }
    if (this.newX < this.x) {
      this.direction = -1;
    } else if (this.newX > this.x) {
      this.direction = 1;
    }
    // this only happens if raycast doesn't detect a wall or a door
    this.x = this.raycast.x;
    this.y = this.raycast.y;

    // how quickly should mover snap into standing position?
    if (abs(this.x - this.newX) < 0.05 && abs(this.y - this.newY) < 0.05) {
      this.state = "standing";
      this.x = this.newX;
      this.y = this.newY;
      return true;
    } else {
      return false;
    }
  }
  touchingDoor(i, j) {
    // only hero can interact with doors
    return false;
  }
  touchingWall(i, j) {
    if (
      world[wld][lvl].map[i][j] &&
      world[wld][lvl].map[i][j] instanceof Wall
    ) {
      if (
        dist(
          this.raycast.x,
          this.raycast.y,
          world[wld][lvl].map[i][j].x,
          world[wld][lvl].map[i][j].y
        ) < this.wallDistance
      ) {
        this.state = "standing";
        return true;
      }
    }
    return false;
  }
  isRaycastClear() {
    let topSpeed = 0.4;
    this.raycast = {
      x: this.x + constrain(this.newX - this.x, -topSpeed, topSpeed) * 0.2,
      y: this.y + constrain(this.newY - this.y, -topSpeed, topSpeed) * 0.2
    };

    // check if touching walls
    // loop thru near objects
    for (let i = ceil(this.raycast.y) - 3; i < ceil(this.raycast.y) + 3; i++) {
      if (i >= 0 && i < world[wld][lvl].map.length) {
        for (
          let j = ceil(this.raycast.x) - 3;
          j < ceil(this.raycast.x) + 3;
          j++
        ) {
          if (
            j >= 0 &&
            world[wld][lvl].map[i] &&
            j < world[wld][lvl].map[i].length
          ) {
            // touching door???

            if (this.touchingDoor(i, j)) {
              return false;
            }

            // touching wall???
            if (this.touchingWall(i, j)) {
              //this.x -= (raycast.x - this.x);
              //this.y -= (raycast.y - this.y);
              this.x = round(this.x);
              this.y = round(this.y);
              this.newX = round(this.x);
              this.newY = round(this.y);
              this.state = "standing";
              return false;
            }
          }
        }
      }
    }
    return true;
  }
}
