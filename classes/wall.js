/*global Sprite,camera,gridSize,treeSize,img,resizeCanvas,world,round,key,abs,rect,ceil,scale,push,pop,frameCount,createCanvas,color,translate,triangle,frameRate,beginShape,endShape,curveVertex,shuffle,sin,cos,floor,rotate,textAlign,LEFT,RIGHT,CENTER,text,textSize,stroke,noStroke,strokeWeight,keyCode,keyIsDown,LEFT_ARROW,RIGHT_ARROW,UP_ARROW,DOWN_ARROW,mouseIsPressed,fill,noFill,mouseX,mouseY,line,ellipse,background,displayWidth,displayHeight,windowWidth,windowHeight,height,width,dist,loadSound,loadImage,image,random,angleMode,RADIANS,DEGREES*/

// includes brick, cliff, rock, wall, and tree
class Wall extends Sprite {
  constructor(_x, _y, _z, _size, _direction, _flipY, _img) {
    super(_x, _y, _z, _size, _direction, _flipY, [_img]);
    this.x = _x;
    this.y = _y;
    //this.isWall = true;
    this.img = _img;
    this.size = _size;
  }

//   show() {
//     push();
//     // allow for gridSize to be adjustable
//     let wallSize = gridSize * this.size;
//     translate(
//       (this.x - camera.x) * gridSize - gridSize / 2,
//       (this.y - camera.y) * gridSize - gridSize
//     );
//     scale(this.direction, 1);

//     image(
//       this.img,
//       -(wallSize / 2) * this.direction,
//       -wallSize,
//       wallSize * this.direction,
//       wallSize
//     );
//     //fill("red");
//     //ellipse(0, 0, 5, 5);
//     pop();
//   }
}
