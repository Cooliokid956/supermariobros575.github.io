var oneone = Mario.oneone = function() {
  //The things that need to be passed in are basically just dependent on what
  //tileset we're in, so it makes more sense to just make one variable for that, so
  //TODO: put as much of this in the Level object definition as possible.
  level = new Mario.Level({
    playerPos: [56,192],
    loader: Mario.oneone,
    background: "#7974FF",
    scrolling: true,
    invincibility: [144, 192, 240],
    exit: 204,
    floorSprite:  new Mario.Sprite('sprites/tiles.png', [0,0],[16,16],0),
    cloudSprite:  new Mario.Sprite('sprites/tiles.png', [0,320],[48,32],0),
    wallSprite: new Mario.Sprite('sprites/tiles.png', [0, 16],[16,16],0),
    brickSprite: new Mario.Sprite('sprites/tiles.png', [16, 0], [16,16], 0),
    brickBounceSprite: new Mario.Sprite('sprites/tiles.png',[32,0],[16,16],0),
    rubbleSprite: function () {
      return new Mario.Sprite('sprites/items.png', [64,0], [8,8], 3, [0,1])
    },
    ublockSprite: new Mario.Sprite('sprites/tiles.png', [48, 0], [16,16],0),
    superShroomSprite: new Mario.Sprite('sprites/items.png', [0,0], [16,16], 0),
    fireFlowerSprite: new Mario.Sprite('sprites/items.png', [0,32], [16,16], 20, [0,1,2,3]),
    starSprite: new Mario.Sprite('sprites/items.png', [0,48], [16,16], 20, [0,1,2,3]),
    pipeLEndSprite: new Mario.Sprite('sprites/tiles.png', [0, 128], [16,16], 0),
    pipeREndSprite: new Mario.Sprite('sprites/tiles.png', [16, 128], [16,16], 0),
    pipeLMidSprite: new Mario.Sprite('sprites/tiles.png', [0, 144], [16,16], 0),
    pipeRMidSprite: new Mario.Sprite('sprites/tiles.png', [16, 144], [16,16], 0),
    pipeUpMid: new Mario.Sprite('sprites/tiles.png', [0, 144], [32,16], 0),
    pipeSideMid: new Mario.Sprite('sprites/tiles.png', [48, 128], [16,32], 0),
    pipeLeft: new Mario.Sprite('sprites/tiles.png', [32, 128], [16,32], 0),
    pipeTop: new Mario.Sprite('sprites/tiles.png', [0, 128], [32,16], 0),
    qblockSprite: new Mario.Sprite('sprites/tiles.png', [384, 0], [16,16], 8, [0,0,0,0,1,2,1]),
    bcoinSprite: function() {
      return new Mario.Sprite('sprites/items.png', [0,112],[16,16], 20,[0,1,2,3]);
    },
    cloudSprites:[
      new Mario.Sprite('sprites/tiles.png', [0,320],[16,32],0),
      new Mario.Sprite('sprites/tiles.png', [16,320],[16,32],0),
      new Mario.Sprite('sprites/tiles.png', [32,320],[16,32],0)
    ],
    hillSprites: [
      new Mario.Sprite('sprites/tiles.png', [128,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [144,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [160,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [128,144],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [144,144],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [160,144],[16,16],0)
    ],
    bushSprite: new Mario.Sprite('sprites/tiles.png', [176, 144], [48, 16], 0),
    bushSprites: [
     new Mario.Sprite('sprites/tiles.png', [176,144], [16,16],0),
     new Mario.Sprite('sprites/tiles.png', [192,144], [16,16],0),
     new Mario.Sprite('sprites/tiles.png', [208,144], [16,16],0)],
   goombaSprite: function() {
     return new Mario.Sprite('sprites/enemy.png', [0, 16], [16,16], 3, [0,1]);
   },
   koopaSprite: function() {
     return new Mario.Sprite('sprites/enemy.png', [96,0], [16,32], 2, [0,1]);
   },
   flagPoleSprites: [
     new Mario.Sprite('sprites/tiles.png', [256, 128], [16,16], 0),
     new Mario.Sprite('sprites/tiles.png', [256, 144], [16,16], 0),
     new Mario.Sprite('sprites/items.png', [128, 32], [16,16], 0)
   ]
 });
  ground = [[0,235]];
  player.pos[0] = level.playerPos[0];
  player.pos[1] = level.playerPos[1];
  vX = 0;
  //build THE GROUND
  ground.forEach(function(loc) {
    level.putFloor(loc[0],loc[1]);
  });
  //build scenery
  clouds = [[7,3],[19, 2],[56, 3],[67, 2],[87, 2],[103, 2],[152, 3],[163, 2],[200, 3]];
  clouds.forEach(function(cloud){
    level.putCloud(cloud[0],cloud[1]);
  });
  twoClouds = [[36,2],[132,2],[180,2]];
  twoClouds.forEach(function(cloud){
    level.putTwoCloud(cloud[0],cloud[1]);
  });
  threeClouds = [[27,3],[75,3],[123,3],[171,3]];
  threeClouds.forEach(function(cloud){
    level.putThreeCloud(cloud[0],cloud[1]);
  });
  bHills = [0,48,96,144,192]
  bHills.forEach(function(hill) {
    level.putBigHill(hill, 12);
  });
  sHills = [16,64,111,160];
  sHills.forEach(function(hill) {
    level.putSmallHill(hill, 12);
  });
  bushes = [23,71,118,167];
  bushes.forEach(function(bush) {
    level.putBush(bush, 12);
  });
  twoBushes = [41,89,137];
  twoBushes.forEach(function(bush) {
    level.putTwoBush(bush, 12);
  });
  threeBushes = [11,59,106];
  threeBushes.forEach(function(bush) {
    level.putThreeBush(bush, 12);
  });
  //interactable terrain
  level.putQBlock(16, 9, new Mario.Bcoin([256, 144]));
  level.putBrick(20, 9, null);
  level.putQBlock(21, 9, new Mario.Mushroom([336, 144]));
  level.putBrick(22, 9, null);
  level.putQBlock(22, 5, new Mario.Bcoin([352, 80]));
  level.putQBlock(23, 9, new Mario.Bcoin([368, 144]));
  level.putBrick(24, 9, null);
  level.putRealPipe(34, 9, 4, "DOWN", Mario.oneonetunnel);
  level.putWall(36, 10, 1);
  level.putWall(37, 10, 1);
  level.putWall(38, 10, 1);
  level.putWall(39, 10, 1);
  level.putWall(40, 10, 1);
  level.putRealPipe(41, 9, 4, "DOWN", Mario.oneonesky);

  //and enemies
  level.putGoomba(2, 38);
  level.putPipe(45,13,13);
  music.underground.pause();
  // music.overworld.currentTime = 0;
  music.overworld.play();
};
