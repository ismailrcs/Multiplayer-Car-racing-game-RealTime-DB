
var database;
var gameState = 0;
var playerCount;
var form,game,player;
var allPlayer;
var car1,car2,car3,car4;

var cars;

function setup(){
    createCanvas(windowWidth-70,windowHeight-70);
    

   database = firebase.database();

    game = new Game();
    
    game.getState();

    game.start();

    

}

function draw(){
    
if(playerCount == 4){

    game.updateState(1);
}
    
if( gameState == 1){

    background(255)
    game.play();
    drawSprites();

}

}