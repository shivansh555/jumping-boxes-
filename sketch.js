var canvas;
var edges1;
var music;
var surf1,surf2,surf3,surf4;
var box;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(770,600);

    //create 4 different surfaces
    surf1 = createSprite(100,580,180,20);
    surf1.shapeColor="blue"
    surf2 = createSprite(290,580,180,20);
    surf2.shapeColor="orange"
    surf3 = createSprite(480,580,180,20);
    surf3.shapeColor="pink"
    surf4 = createSprite(670,580,180,20);
    surf4.shapeColor="green"

    //create box sprite and give velocity
    box = createSprite(random(40,710),300,40,40);
    box.shapeColor = "white";
    box.velocityX=random(8,5);
    box.velocityY=random(8,2);

    music.play();





}

function draw() {
    background("gray");
    //create edgeSprite
    edges1=createEdgeSprites();
    box.bounceOff(edges1);


    //add condition to check if box touching surface and make it box

    if (box.bounceOff(surf4)){
        box.shapeColor="green";
    }
    if (box.isTouching(surf3)){
        box.shapeColor="pink";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    if (box.bounceOff(surf2)){
        box.shapeColor="orange";
    }
    if (box.bounceOff(surf1)){
        box.shapeColor="blue";
    }
    


    drawSprites();

}
