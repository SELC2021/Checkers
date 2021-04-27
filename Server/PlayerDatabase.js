
const modMatch = require('./match');
const modUser = require('./user')



module.exports = class PlayerDataBase{
    constructor(){
        console.log("New Server");
    }

    Rooms = new Array(new modMatch());


    FindGame(name,id){

        
        if(id === undefined){
            console.log("id is nothing");
            return;
        }
        
        if(typeof id === 'undefined'){
             console.log("id is nothing");
            return;
        }

        if(id == null){
            return;
        }

        console.log(typeof id);
        console.log("id ================", id)
        
        for(var i =0; i < this.Rooms.length; i++){
            console.log("-------------------------------------------------")
            console.log("Room Number", i);
            console.log(this.Rooms[i].user1.name,this.Rooms[i].user2.name)
            console.log(this.Rooms[i].user1.id,this.Rooms[i].user2.id)
            console.log("-------------------------------------------------")
        }

        for(var i = 0; i < this.Rooms.length; i++){
            if(id === this.Rooms[i].user1.id || id === this.Rooms[i].user2.id ){
                console.log("Enter Room",i)
                return this.Rooms[i];
            }
        }
      
        var newUser = new modUser(name,id);

        var status = this.FindOpp(newUser);

        
        
        if(status !== null){
            console.log("Found Opp")
            return status; 
        }
        console.log("Creating New game");
        return this.newGame(newUser);
    }

    FindOpp(user){
       for(var i = 0; i < this.Rooms.length; i++){
           var status = this.Rooms[i].addUser(user);
           if( status === "red" || status === "black"){
               return this.Rooms[i]
           } 
       }
       return null;
    }

    GenID(){
        var id = "";
        for(var i =0; i < Math.random()+1; i++){
            id += ""+ Math.random()
        }
        console.log(id);
        return id;
    }

    newGame(user){
        var newgame = new modMatch();
        newgame.addUser(user);
        this.Rooms.push(newgame);
        return newgame;
    }
}



