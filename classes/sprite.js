/*global keyIsPressed,Sprite,lvl,img,camera,gridSize,resizeCanvas,world,round,key,abs,rect,ceil,scale,push,pop,frameCount,createCanvas,color,translate,triangle,frameRate,beginShape,endShape,curveVertex,shuffle,sin,cos,floor,rotate,textAlign,LEFT,RIGHT,CENTER,text,textSize,stroke,noStroke,strokeWeight,keyCode,keyIsDown,LEFT_ARROW,RIGHT_ARROW,UP_ARROW,DOWN_ARROW,mouseIsPressed,fill,noFill,mouseX,mouseY,line,ellipse,background,displayWidth,displayHeight,windowWidth,windowHeight,height,width,dist,loadSound,loadImage,image,random,angleMode,RADIANS,DEGREES*/

class Sprite {
  static randomDirection() {
    return round(random()) * 2 - 1;
  }
  static maxZ() {
    return 4;
  }
  static choice(myArray){
    return myArray[Math.floor(Math.random() * myArray.length)]
  }
  constructor(_x, _y, _z, _size, _direction, _flipY, _imgArray) {
    this.x = _x;
    this.y = _y;
    this.z = _z;
    this.size = _size;
    this.imgArray = _imgArray;
    this.currentImg = 0;
    this.direction = _direction;
    this.flipY = _flipY;
  }
  show() {
    push();
    // allow for gridSize to be adjustable
    let mySize = gridSize * this.size;
    if(this.flipY){
      translate(
        (this.x - camera.x) * gridSize - gridSize / 2,
        (this.y - camera.y) * gridSize - gridSize - mySize
      );
      scale(this.direction, -1);
    }else{
      translate(
      (this.x - camera.x) * gridSize - gridSize / 2,
      (this.y - camera.y) * gridSize - gridSize
    );
    scale(this.direction, 1);
    }



    image(
      this.imgArray[this.currentImg],
      -(mySize / 2) * this.direction,
      -mySize,
      mySize * this.direction,
      mySize
    );
    //fill("red");
    //ellipse(0, 0, 5, 5);
    pop();
  }
  update() {}
}
