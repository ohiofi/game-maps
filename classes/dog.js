/*global keyIsPressed,Mover,Sprite,lvl,img,camera,gridSize,resizeCanvas,world,round,key,abs,rect,ceil,scale,push,pop,frameCount,createCanvas,color,translate,triangle,frameRate,beginShape,endShape,curveVertex,shuffle,sin,cos,floor,rotate,textAlign,LEFT,RIGHT,CENTER,text,textSize,stroke,noStroke,strokeWeight,keyCode,keyIsDown,LEFT_ARROW,RIGHT_ARROW,UP_ARROW,DOWN_ARROW,mouseIsPressed,fill,noFill,mouseX,mouseY,line,ellipse,background,displayWidth,displayHeight,windowWidth,windowHeight,height,width,dist,loadSound,loadImage,image,random,angleMode,RADIANS,DEGREES*/

class Dog extends Mover{
  constructor(_x, _y, _z, _size, _direction, _imgArray){
    super(_x, _y, _z, _size, _direction, false, _imgArray)
  }
}