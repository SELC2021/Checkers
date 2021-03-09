const Express = require('express');

const app = new Express();

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
    // set board values to zero;
    res.send(board);
});


//black or red ,curPos  , toPos
app.get("/:color/:currX/:currY/:toPosx/:toPosY",(req,res)=>{

    color = req.params.color

    currPos = [req.params.currx,req.params.currY]

    toPos = [req.params.toPosx,req.params.toPosY]

    if (checkVal(currPos,toPos) == true){
        board['row'+toPos[0]][toPos[1]] = color;
        board['row'+currPos[0]][currPos[1]] = 0;
    }

    res.send(board);
});


// TODO
//function checkVal(currpos,pos){
  //  return true;
    //return false;
//}

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listing to port ${port}`));
