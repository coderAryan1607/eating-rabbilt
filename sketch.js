var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaves;
var select_sprites;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  console.log(canvas.height)

  rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  /*if(rabbit.isTouching(apple)){
    apple.destroy();
  }
  if(rabbit.isTouching(leaves)){
    leaf.destroy();
  }*/
    
  
  select_sprites = Math.round(random(1,2));

  if(frameCount % 80 == 0){
    if(select_sprites == 1){
      createApples();
    }
    else{
      createLeaves();
    }
  }
  
  drawSprites();
}

function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.06;
  apple.velocityY = 1;
  apple.lifetime = 350;
}

function createLeaves(){
  leaves = createSprite(random(50,350),40,10,10);
  leaves.addImage(leafImg);
  leaves.scale = 0.06;
  leaves.velocityY = 1;
  leaves.lifetime = 350;
}
