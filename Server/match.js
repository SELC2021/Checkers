const modgame = require('./game');
const modUser = require('./user');


module.exports = class Match{
    constructor(){
        this.user1 = new modUser(null,null)
        this.user2 = new modUser(null,null);
        this.user1.color = "Black";
        this.user2.color = "Red";
        this.full = false;
        this.game = new modgame();
    }

    addUser(user){
        if(this.user1.name === null){
            this.user1.name = user.name
            this.user1.id = user.id
            return "black"
        }else if(this.user2.name === null){
            this.user2.name = user.name
            this.user2.id = user.id
            return "red"
        }
            return "full"; 
        }


    getColor(id){
        if(id === this.user1.id){
            return "black"
        }else if(id === this.user2.id){
            return "red"
        }
    }

    setMove(move,user){

        var pColor;

        if(move.color === true){
            pColor = "black"
        }else{
            pColor = "red"
        }

        if(this.getColor(user) === pColor){
            this.game.setBoard(move);
        }
    }

}