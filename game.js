class Game {

constructor(){



}

getState(){

    var ref = database.ref('gameState');

    ref.on("value" , function (readData){

        if(gameState > readData.val()&&readData.val()==0){

            window.location.reload();

        }
         gameState = readData.val();



    } );

}

updateState(newState){


    database.ref('/').update( {

    'gameState' : newState



    }  )
}

start(){


    if(gameState == 0){

        player = new Player();

        player.getCount();

        form = new Form();

        form.display();

    }
    
    car1 = createSprite(0,0);
    car2 = createSprite(0,0);
    car3 = createSprite(0,0);
    car4 = createSprite(0,0);

    cars = [car1,car2,car3,car4];

    car1.addImage(car1img);
    car2.addImage(car2img);
    car3.addImage(car3img);
    car4.addImage(car4img);
}

 play(){ 

    form.hideAll();
    Player.getPlayerInfo();

    Player.getCarsAtEnd();

    if(allPlayer !== undefined){

        var index1 = 0;
        var x1=0/5;
        var y1;

        for( var plr in allPlayer){

            x1+=windowWidth/5;

            y1 = windowHeight-70-allPlayer[plr].distance;
           
            index1++;
            cars[index1-1].x = x1;
            cars[index1-1].y = y1;

            if( index1 === player.index){

                ellipseMode(RADIUS);
                noFill();
                strokeWeight(3);
                ellipse(x1,y1,50,50);
                camera.y =  y1;

            }
         
            stroke("white");
            strokeWeight(1); 
            fill("white");
            text(allPlayer[plr].name,x1-15,y1+70);
            
        }
        if(keyIsDown(UP_ARROW) && player.index !== undefined){

            player.distance+=20;
            player.update();
        }    

        if(player.distance>3250){

            gameState = 2;
            player.updateCarsAtEnd(++carsAtEnd);
            player.rank = carsAtEnd;
            player.update();

        }
    }
  }


  
  end()
  {
    console.log(player.rank);
    form.greeting.show();
    form.greeting.html(" YOUR RANK :" + player.rank );
    form.greeting.style( 'color' , "white" );
    form.greeting.position(windowWidth/2,windowHeight/3.5);

  }

  showLeaderBoard(){

    background("white");
    

  }

}