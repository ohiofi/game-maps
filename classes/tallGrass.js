/*global camera,Sprite,gridSize,treeSize,img,resizeCanvas,world,round,key,abs,rect,ceil,scale,push,pop,frameCount,createCanvas,color,translate,triangle,frameRate,beginShape,endShape,curveVertex,shuffle,sin,cos,floor,rotate,textAlign,LEFT,RIGHT,CENTER,text,textSize,stroke,noStroke,strokeWeight,keyCode,keyIsDown,LEFT_ARROW,RIGHT_ARROW,UP_ARROW,DOWN_ARROW,mouseIsPressed,fill,noFill,mouseX,mouseY,line,ellipse,background,displayWidth,displayHeight,windowWidth,windowHeight,height,width,dist,loadSound,loadImage,image,random,angleMode,RADIANS,DEGREES*/

class TallGrass extends Sprite {
  constructor(_x, _y, _z, _direction, _img) {
    super(_x, _y, _z, 1, _direction, false, [_img]);
    //this.isWall = false;
    this.height = random(0.3, 1);
    this.img = _img;
    this.growTimer = 0;
    this.growSpeed = random(800, 1600);
  }
  show() {
    push();
    let treeSize = gridSize * 1.25;
    translate(
      (this.x - camera.x) * gridSize - gridSize / 2,
      (this.y - camera.y) * gridSize - gridSize
    );
    scale(this.direction, this.height);
    //noSmooth();
    image(
      this.img,
      0 - (treeSize / 2) * this.direction,
      0,
      treeSize * this.direction,
      treeSize * -1
    );
    //fill("yellow")
    //ellipse(0,0,5,5);
    pop();
    //this.growTimer++;
    //if (this.growTimer > this.growSpeed) {
    //  this.grow();
    //}
  }
  grow() {
    if (this.height < 1) {
      if (Math.random() >= 0.9) {
        this.direction = -this.direction;
      }
      this.height += 0.1;
      this.growTimer = 0;
    }
  }
}
