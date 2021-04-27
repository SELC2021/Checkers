const Express = require('express');

const app = new Express();



// Import and Create New Player Data Base
// Temp 

const modGame = require('./game');

const myGame = new modGame();

app.use(Express.static('Client'));

const path = require('path');

const modPlayerDataBase = require('./PlayerDataBase');


const PlayerDataBase = new modPlayerDataBase();

const modUser = require('./user');
// Use Joi  

app.use(Express.json());

app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,'Client','loginScreen.html'));
});

app.get("/newUser/:name",(req,res) =>{
    
    var name = req.params.name;

    var id = PlayerDataBase.GenID();

    var match = PlayerDataBase.FindGame(name,id)

    var user = {
        id: id,
        color: match.getColor(id)
    }

    res.send(user);
});

app.get("/newGame/:Username/:id",(req,res)=>{

    var userName = req.params.Username;
    var id = req.params.id;

    if(id === undefined){
        res.send("error");
    }

    var board = PlayerDataBase.FindGame(userName,id).game.sendBoard();

    res.send(board);
});



//{
//    "color": "b",
//    "currPos": [0,4],
//    "toPos": [5,3]
//    "King": False,
//}

 

app.get("/game",(req,res)=>{
    //res.sendFile(path.join(__dirname,'Client','Checkers.html'));
    res.sendFile(path.join(__dirname,'Client','GameScreen.html'));
});

app.get("/leaderboard",(req,res)=>{
    res.sendFile(path.join(__dirname,'Client','Leaderboard','leaderboard.html'));
});


//black or red ,curPos  , toPos
app.post("/move/:Username/:id",(req,res)=>{
    var Username = req.params.Username;
    var id = req.params.id;
    const movingPiece = req.body;

    try {
        var match =  PlayerDataBase.FindGame(Username,id);

         var color = match.getColor(id);

         if(color == "black"){color = true}else if(color == "red"){color = false}

         if(color == movingPiece.color){
             match.game.setBoard(movingPiece);
         }

         res.send(match.game.sendBoard());
        
    } catch (error) {res.send("Error");}
    
});

function Printbord(){
    let stringBoard = JSON.stringify(board.row0)+'\n';
    stringBoard += JSON.stringify(board.row1)+'\n';
    stringBoard += JSON.stringify(board.row2)+'\n';
    stringBoard += JSON.stringify(board.row3)+'\n';
    stringBoard += JSON.stringify(board.row4)+'\n';
    stringBoard += JSON.stringify(board.row5)+'\n';
    stringBoard += JSON.stringify(board.row6)+'\n';
    stringBoard += JSON.stringify(board.row7)+'\n';
    console.log(stringBoard);
    return stringBoard;
}
// TODO
function checkVal(movingPiece){
  return true;
}

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listing to port ${port}`));
 