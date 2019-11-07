/*global Sprite,Mover,Wall,Door,TallGrass,loadImage,round,images,world,ceil,floor,dist,frameCount,random,maps*/
class Level {
  constructor(_worldNumber, _levelNumber, _showTitle, _bgImage) {
    this.worldNumber = _worldNumber;
    this.levelNumber = _levelNumber;
    this.showTitleScreen = _showTitle;
    this.spawnPoint =
      {
        x:1,
        y:1
      };
    this.backgroundTile = _bgImage;
    this.map = [];
    this.movers = [];
  }
  addRow(newRowString) {
      let tempRowNum = this.map.length;
      this.map[tempRowNum] = [];
      this.movers[tempRowNum] = [];
      //for(let column in lineArray[row]){
      for (let column = 0; column < newRowString.length; column++) {
        switch (newRowString.charAt(column)) {
          case "♀":
            this.spawnPoint.x = column;
            this.spawnPoint.y = tempRowNum;
            this.map[tempRowNum].push(false);
            break;
          case "k":
            this.movers[tempRowNum].push(
              new Mover(
                column,
                tempRowNum,
                1,
                0.65,
                Sprite.randomDirection(),
                // mover class can't flipY
                [images.cat1, images.cat2]
              )
            );
              this.movers[tempRowNum].push(
                new Mover(
                  column,
                  tempRowNum,
                  1,
                  0.65,
                  Sprite.randomDirection(),
                [images.dog1,images.dog2,images.dog2,images.dog1,images.dog3,images.dog3]
              )
            );
            this.map[tempRowNum].push(false);
            break;
          case "h":
            this.movers[tempRowNum].push(
              new Mover(
                column,
                tempRowNum,
                1,
                0.5,
                Sprite.randomDirection(),
                // mover class can't flipY
                [images.chicken1, images.chicken2]
              )
            );

            this.map[tempRowNum].push(false);
            break;
          case "w":
            this.map[tempRowNum].push(
              new Wall(
                column, // x
                tempRowNum, // y
                0, // z
                1, // size
                Sprite.randomDirection(), // direction
                round(random()), // flipY
                Sprite.choice([images.water,images.water2])
              )
            );
            break;
          case "|":
            this.map[tempRowNum].push(
              new Wall(
                column, // x
                tempRowNum, // y
                0, // z
                1, // size
                1, // direction
                false, // flipY
                images.black
              )
            );
            break;
          case "p":
            this.map[tempRowNum].push(
              new Sprite(
                column, // x
                tempRowNum, // y
                0, // z
                1, // size
                Sprite.randomDirection(), // direction
                round(random()), // flipY
                [images.cobblestone]
              )
            );
            break;
          case "=":
            this.map[tempRowNum].push(
              new Wall(
                column, // x
                tempRowNum, // y
                1, // z
                1.25, // size
                Sprite.randomDirection(), // direction
                round(random()), // flipY
                images.brick
              )
            );
            break;
          case "^":
            this.map[tempRowNum].push(
              new Wall(
                column,
                tempRowNum,
                3, // z
                1.25, // size
                Sprite.randomDirection(), // direction
                round(random()), // flipY
                images.roof
              )
            );
            break;
          case "c":
            this.map[tempRowNum].push(
              new Wall(
                column,
                tempRowNum,
                0,
                1.08,
                Sprite.randomDirection(),
                false, // flipY
                images.cliff
              )
            );
            break;
          case "r":
            this.map[tempRowNum].push(
              new Wall(
                column,
                tempRowNum,
                1,
                1.3,
                Sprite.randomDirection(),
                false, // flipY
                images.rock
              )
            );
            break;
          case "T":
            this.map[tempRowNum].push(
              new Wall(
                column,
                tempRowNum,
                2,
                2.45,
                Sprite.randomDirection(),
                false, // flipY
                images.bigtree
              )
            );
            break;
          case "t":
            this.map[tempRowNum].push(
              new Wall(
                column,
                tempRowNum,
                2,
                1.55,
                Sprite.randomDirection(),
                false, // flipY
                images.smalltree
              )
            );
            break;
          case "+":
            if (random() < 0.75) { // 75%
              this.map[tempRowNum].push(
                new Wall(
                  column,
                  tempRowNum,
                  2,
                  1.6,
                  Sprite.randomDirection(),
                  false, // flipY
                  Sprite.choice([images.deadtree,images.deadtree2])
                )
              );
            } else { // 25%
              this.map[tempRowNum].push(
                new Wall(
                  column,
                  tempRowNum,
                  2,
                  1.2,
                  Sprite.randomDirection(),
                  false, // flipY
                  Sprite.choice([images.stump,images.stump2])
                )
              );
            }
            break;
          case "g":
            this.map[tempRowNum].push(
              new TallGrass(
                column,
                tempRowNum,
                1,
                Sprite.randomDirection(),
                // tallgrass class can't flipY
                images.tallgrass
              )
            );
            //this.row[tempRowNum].[this.objects.length-1].growTimer;
            break;
          case "G":
            this.map[tempRowNum].push(
              new Wall(
                column,
                tempRowNum,
                0,
                1.2,
                1,
                false, // flipY
                images.gravestone
              )
            );
            break;
          case "0": // goto current world, level 0
          case "1": // goto current world, level 1
          case "2": // goto current world, level 2
          case "3": // goto current world, level 3
          case "4": // goto current world, level 4
          case "5": // goto current world, level 5
          case "6": // goto current world, level 6
          case "7": // goto current world, level 7
          case "8": // goto current world, level 8
          case "9": // goto current world, level 9
            this.map[tempRowNum].push(
              new Door(
                column,
                tempRowNum,
                this.worldNumber,
                parseInt(newRowString.charAt(column))
              )
            );
            break;
          case "⓪": // warp to world 0-0
            this.map[tempRowNum].push(new Door(column, tempRowNum, 0, 0));
            break;
          case "①": // warp to world 1-0
            this.map[tempRowNum].push(new Door(column, tempRowNum, 1, 0));
            break;
          case "②": // warp to world 2-0
            this.map[tempRowNum].push(new Door(column, tempRowNum, 2, 0));
            break;
          case "③": // warp to world 3-0
            this.map[tempRowNum].push(new Door(column, tempRowNum, 3, 0));
            break;

          default:
            this.map[tempRowNum].push(false);
        }
      }
    }

  static buildLevels() {
    world = [];
    for (let worldNumber = 0; worldNumber < maps.length; worldNumber++) {
      // iterate thru worlds
      world[worldNumber] = [];
      for (
        let levelNumber = 0;
        levelNumber < maps[worldNumber].length;
        levelNumber++
      ) {
        // iterate thru levels
        let bgTile;
        if(maps[worldNumber][levelNumber].bgImage == "grass"){
          bgTile = images.grassbg
        }else if(maps[worldNumber][levelNumber].bgImage == "sand"){
          bgTile = images.sandbg
        }else if(maps[worldNumber][levelNumber].bgImage == "cave"){
          bgTile = images.cavebg
        }else{
          bgTile = images.grassbg
        }
        world[worldNumber][levelNumber] = new Level(worldNumber, levelNumber,maps[worldNumber][levelNumber].showTitleScreen,bgTile);
        for (let row = 0; row < maps[worldNumber][levelNumber].map.length; row++) {
          // iterate thru rows
          world[worldNumber][levelNumber].addRow(
            maps[worldNumber][levelNumber].map[row]
          );
        }
      }
    }
    return world;
  }

  drawThisRowsMovers(row, zIndex, player, fieldOfView) {
    if (zIndex == 1) {
      for (let i = this.movers[row].length - 1; i >= 0; i--) {
        if (
          dist(
            player.x,
            player.y,
            this.movers[row][i].x,
            this.movers[row][i].y
          ) > fieldOfView
        ) {
          continue; // skip if out of view
        }
        if (
          this.movers[row][i].x != this.movers[row][i].newX ||
          this.movers[row][i].y != this.movers[row][i].newY
        ) {
          if (this.movers[row][i].isRaycastClear()) {
            this.movers[row][i].update();
          }
        }
        if (frameCount % this.movers[row][i].moveSpeed == 0) {
          let tempX = floor(random(3)) / 2 - 0.5;
          let tempY = floor(random(3)) / 2 - 0.5;
          this.movers[row][i].newX = this.movers[row][i].x + tempX;
          this.movers[row][i].newY = this.movers[row][i].y + tempY;
        }
        this.movers[row][i].show();
        if (
          this.movers[row][i].update(
            this.movers[row][i].x,
            this.movers[row][i].y
          ) &&
          row != ceil(this.movers[row][i].y)
        ) {
          if (row >= 0 && row < this.movers.length) {
            // if new row is a valid index
            this.movers[ceil(this.movers[row][i].y)].push(this.movers[row][i]);
            this.movers[row].splice(i, 1);
          }
        }
      }
    }
  }

  showLevelBehindPlayer(player, fieldOfView) {
    for (let row = ceil(player.y) - fieldOfView; row < ceil(player.y); row++) {
      if (row >= 0 && row < this.map.length) {
        for (let zIndex = 0; zIndex < Sprite.maxZ(); zIndex++) {
          // z index
          for (
            let col = ceil(player.x) - fieldOfView;
            col < ceil(player.x) + fieldOfView;
            col++
          ) {
            if (col >= 0 && this.map[row] && col < this.map[row].length) {
              if (this.map[row][col] && this.map[row][col].z === zIndex) {
                this.map[row][col].show();
              }
            }
          }
          // draw this row's movers
          this.drawThisRowsMovers(row, zIndex, player, fieldOfView);
          //drawThisRowsMovers(row,k,player,fieldOfView){
        }
      }
    }
    // draw z-index 0 in player's row
    let row = ceil(player.y);
    let zIndex = 0;
    for (
      let col = ceil(player.x) - fieldOfView;
      col < ceil(player.x) + fieldOfView;
      col++
    ) {
      if (col >= 0 && this.map[row] && col < this.map[row].length) {
        if (this.map[row][col] && this.map[row][col].z === zIndex) {
          this.map[row][col].show();
        }
      }
    }
    // draw this row's movers
    zIndex = 1;
    this.drawThisRowsMovers(row, zIndex, player, fieldOfView);
  }

  showLevelInFrontOfPlayer(player, fieldOfView) {
    // draw z-index >0 in player's row
    let row = ceil(player.y);
    for (let zIndex = 1; zIndex < Sprite.maxZ(); zIndex++) {
      // z index
      for (
        let col = floor(player.x) - fieldOfView;
        col < floor(player.x) + fieldOfView;
        col++
      ) {
        if (col >= 0 && this.map[row] && col < this.map[row].length) {
          if (this.map[row][col] && this.map[row][col].z === zIndex) {
            this.map[row][col].show();
          }
        }
      }
    }
    // draw rows in front of player
    for (
      let row = ceil(player.y) + 1;
      row < ceil(player.y + fieldOfView);
      row++
    ) {
      if (row >= 0 && row < this.map.length) {
        for (let zIndex = 0; zIndex < Sprite.maxZ(); zIndex++) {
          // z index
          for (
            let col = ceil(player.x) - fieldOfView;
            col < ceil(player.x) + fieldOfView;
            col++
          ) {
            if (col >= 0 && this.map[row] && col < this.map[row].length) {
              if (this.map[row][col] && this.map[row][col].z === zIndex) {
                this.map[row][col].show();
              }
            }
          }
          // draw this row's movers
          this.drawThisRowsMovers(row, zIndex, player, fieldOfView);
        }
      }
    }
  }
}
