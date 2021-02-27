const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Drop, thunder,man ;
var backgroundImg,platform;
var gameState = "onSling";

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    Man = new man(810, 350);
    Drop= new drop(200,50);
    Thunder= new thunder(200,10);
    
    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    Man.display();
    Drop.display();
    Thunder.display();
    
}

function mouseDragged(){
    if(gameState !== 'launched')
    Matter.Body.setPosition(Drop.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    gameState = 'launched';
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}