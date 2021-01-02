var tom, tomRunning,tomStanding,tomSitting
var jerry, jerryImageTeasing,jerryImageCollided
var garden, gardenImage


function preload() {
    
tomRunning = loadAnimation("tomTwo.png","tomThree.png");
tomStanding = loadImage ("tomFour.png");
tomSitting = loadImage ("tomThree.png");

jerryImageTeasing = loadAnimation ("jerryTwo.png", "jerryThree.png");
jerryImageCollided = loadAnimation ("jerryOne.png","jerryFour.png");

gardenImage = loadImage ("garden.png");


}

function setup(){
    createCanvas(1000,800);

 garden = createSprite (500,400,1000,800);
 garden.addImage (gardenImage);   
 
 jerry = createSprite (500,400,10,10);
 jerry.addAnimation (jerryImageTeasing);
 jerry.scale = 0.1;

 tom = createSprite (700,400,10,10);
 tom.addAnimation (tomStanding);
 tom.scale = 0.1;

 }

function draw() {

    background(255);

   
    text (mouseX + ',' + mouseY,10,45)

    if (tom.x - mouse.x < (tom.width - mouse.width) / 2) {
       tom.addAniamtion(tomStanding)
       tom.changeAnimation(tomSitting) 
    }
    

    drawSprites();
}


function keyPressed(){

 if (keyCode === LEFT_ARROW) {
    tom.velocityX = -5
    tom.changeAnimation (tomRunning)
}


}
