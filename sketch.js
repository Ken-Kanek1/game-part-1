var bg, bgImg;
var coin, coinImg;
var gem, gemImg;
var player, playerImg;
var npc, npcImg;
var sword, swordImg;

function preload(){

    bgImg = loadImage("./assets/background.jpg");
    coinImg = loadImage("./assets/coin.png");
    gemImg = loadImage("./assets/gem.png");
    playerImg = loadImage("./assets/knight2.png");
    npcImg = loadImage("./assets/npc.png");
    swordImg = loadImage("./assets/sword.png")

}

function setup(){

createCanvas(windowWidth, windowHeight);

bg = createSprite(displayWidth/2-220,displayHeight/2-140,20,20);
bg.addImage(bgImg);
bg.scale = 2.5;

player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(playerImg);
   player.scale = 0.1;
   player.debug = true;
   player.setCollider("rectangle",0,0,300,300);

 


}

function draw(){
    background(0);

        if(keyDown("UP_ARROW")||touches.length>0){
        player.y = player.y-30
      }
      if(keyDown("DOWN_ARROW")||touches.length>0){
       player.y = player.y+30
      }

      if(keyDown("RIGHT_ARROW")||touches.length>0){
        player.x = player.x+30
      }

      if(keyDown("LEFT_ARROW")||touches.length>0){
        player.x = player.x-30
      }

    drawSprites();
}