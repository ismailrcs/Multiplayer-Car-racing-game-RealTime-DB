class Player {

    constructor(){
    
        this.index = null;

        this.name = null;

        this.rank = null;

        this.distance = 0;
        
    
        
    }
    
    getCount(){

        var ref = database.ref('playerCount');
        
        ref.on("value" , function (readData){

            playerCount = readData.val();

        })

    }

    
    updateCount(newCount){

        database.ref('/').update({

            'playerCount' : newCount

        });

    }

    update(){

    var playerindex = ("players/player" + this.index  );
    
    database.ref(playerindex).update({

        'name' : this.name,

        'distance' : this.distance,

        'rank' : this.rank

    });

    }


   static getPlayerInfo(){

        var playerRef = database.ref('players');

        playerRef.on( "value" , function(data){

            allPlayer = data.val();

        })

    }

    static getCarsAtEnd(){

        var ref = database.ref('carsAtEnd');
        ref.on("value" , (data)=>{

            carsAtEnd = data.val();

        })
    }

    updateCarsAtEnd(newc){

        database.ref('/').update({

            carsAtEnd : newc

        })

    }

    }