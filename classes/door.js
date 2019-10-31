/*global keyIsPressed,Sprite,myFont,lvl,img,camera,gridSize,resizeCanvas,world,round,key,abs,rect,ceil,scale,push,pop,frameCount,createCanvas,color,translate,triangle,frameRate,beginShape,endShape,curveVertex,shuffle,sin,cos,floor,rotate,textAlign,LEFT,RIGHT,CENTER,text,textFont,textSize,stroke,noStroke,strokeWeight,keyCode,keyIsDown,LEFT_ARROW,RIGHT_ARROW,UP_ARROW,DOWN_ARROW,mouseIsPressed,fill,noFill,mouseX,mouseY,line,ellipse,background,displayWidt
h,displayHeight,windowWidth,windowHeight,height,width,dist,loadSound,loadImage,image,random,angleMode,RADIANS,DEGREES*/

class Door extends Sprite {
  constructor(_x, _y, _gotoWorld, _gotoLevel) {
    super(_x, _y, 0, 1, 1, false, [null]);
    this.gotoWorld = _gotoWorld;
    this.gotoLevel = _gotoLevel;
  }
  show() {
    push();
    // allow for gridSize to be adjustable
    let wallSize = gridSize;
    translate(
      (this.x - camera.x) * gridSize - gridSize / 2,
      (this.y - camera.y) * gridSize - gridSize
    );
    fill(0);
    rect(-(wallSize / 2), -wallSize, wallSize, wallSize);
    textFont(myFont);
    textAlign(CENTER);
    textSize(15);
    text(this.gotoWorld + "-" + this.gotoLevel, 0, -gridSize * 1);
    // fill("red");
    // ellipse(0, 0, 5, 5);
    pop();
  }
}
