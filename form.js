class Form {

constructor(){

     this.title = createElement('h2');

      this.input = createInput(' Your Name  ');

     this.button = createButton('PLAY');

     this.greeting = createElement('h3');

     this.reset = createButton(' RESET ')

}

 display(){


  this.title.html(" Multiplayer Car Racing Game");

  this.title.position(windowWidth/2.5  ,windowHeight/10);

  this.input.position(windowWidth/2.5,windowHeight/3.5);

  this.button.position(windowWidth/2.3,windowHeight/2.5);

  this.reset.position(windowWidth/20,windowHeight/11);

   this.reset.mousePressed( ()=>{

    game.updateState(0);
    player.updateCount(0);
   player.updateCarsAtEnd(0);

   })
    
  this.button.mousePressed(  ()=>{

    this.input.hide();

    this.button.hide();

         player.name = this.input.value();

        playerCount = playerCount + 1;

        player.index = playerCount;

        this.greeting.html("HI "+ player.name + " , Please wait for other players to join");

        this.greeting.position(windowWidth/2.7,windowHeight/3.5);

        player.updateCount(player.index);

        player.update();

    })

 }

 hideAll(){

    this.input.hide();

    this.button.hide();

    this.greeting.hide();

 }

 

}