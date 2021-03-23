const Express = require('express');

const app = new Express();

const path = require('path');
// Use Joi  

app.use(Express.json());

// 1 = black 
// 2 = red
// 0 = blank

 var board = {
     row0: [0,0,0,0,0,0,0,0],
     row1: [0,0,0,0,0,0,0,0],
     row2: [0,0,0,0,0,0,0,0],
     row3: [0,0,0,0,0,0,0,0],
     row4: [0,0,0,0,0,0,0,0],
     row5: [0,0,0,0,0,0,0,0],
     row6: [0,0,0,0,0,0,0,0],
     row7: [0,0,0,0,0,0,0,0]
 }

app.get("/newGame",(req,res)=>{
    
    res.send("CyCheckers"+"\n"+Printbord());
});


//{
//    "color": "b",
//    "currPos": [0,4],
//    "toPos": [5,3]
//}


app.get("/game",(req,res)=>{
    res.sendFile(path.join(__dirname,'Client','Checkers.html'));
});

app.get("/leaderboard",(req,res)=>{
    res.sendFile(path.join(__dirname,'Client','Leaderboard','leaderboard.html'));
});


//black or red ,curPos  , toPos
app.post("/move",(req,res)=>{

    

    const movingPiece = req.body;

    if (checkVal(movingPiece) == true){
        color = 0
        if (movingPiece.color == "b"){color = 1}
        if(movingPiece.color == "r"){color = 2}
        board['row'+movingPiece.toPos[1]][movingPiece.toPos[0]] = color;
        board['row'+movingPiece.currPos[1]][movingPiece.currPos[0]] = 0;


    }
    res.send(Printbord());
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
