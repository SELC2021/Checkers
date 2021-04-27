// get 2d array
// setup p5js
// handle user interface  
// handle sending data to the server 

var BackgroundSpaceColorDark = '#EAA9A9';
var BackgroundSpaceColorWhite = '#F9F5E9';

var cols = 0;
var rows = 0;
var w = 80;
var grid;
var userColor;
var USERNAME = sessionStorage.getItem('Username');
console.log(USERNAME);
var id;

async function getUser(){
    var res = await fetch("newUser/"+USERNAME);

    res = await res.json();

    color = res.color;
    id = res.id;

    console.log("id",id);
    console.log(color);
}


// Getting A Board From Sever
async function getBoard(url){
  try {
    res = await fetch(url);
    if(res.ok){
      newGrid = await res.json();
      setGrid(newGrid);
    }
  } catch (e) {console.log(e)}

}


  function setGrid(newGrid){
      for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {

          if( (j+i) % 2 != 0){
            oldGrid = grid[i][j];
            oldGrid.PieceColor = newGrid[i][j].PieceColor;
            oldGrid.Empty = newGrid[i][j].Empty;
          }
  }
  
}
}


function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}


// But this function must modify the pixels and look of the borad
function setup() {

  getUser();

  getBoard('newGame/'+USERNAME+'/'+id);
  

  createCanvas(8*w+1,8*w+1);
  
  cols = floor(width / w);
  rows = floor(height / w);

  grid = make2DArray(cols,rows);

  for (var i = 0; i < cols; i++) {

    for (var j = 0; j < rows; j++) {

      if( (j+i) % 2 == 0){
        grid[i][j] = new EmptyCell(i,j,w,BackgroundSpaceColorWhite);
      }else{
        grid[i][j] = new Cell(i,j,null,true,w,BackgroundSpaceColorDark);
      }
    }
  }
  
}



var currPiece;
var emptyPiece;

async function mousePressed(){
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {

      if(grid[i][j].Background==false){
        
        if (grid[i][j].contains(mouseX, mouseY)) {
          
          console.log(grid[i][j])
          
          if(grid[i][j].Empty == false){
            
            try {
              currPiece.BackgroundColor = BackgroundSpaceColorDark;
            } catch (e){}
            
            currPiece = grid[i][j];
            // darken Curr piece 
            currPiece.BackgroundColor = '#953535';
            
          }else{
            try {
              emptyPiece.BackgroundColor = BackgroundSpaceColorDark;
            } catch (e) {}
            
            emptyPiece = grid[i][j];
            if(currPiece !== null){
              emptyPiece.BackgroundColor = '#953535';
            }
            
          }
          
        }
        
        
        
			}
    }
  }
  
  if(currPiece!==null&&emptyPiece!==null){
    
    const move = {
      color: currPiece.PieceColor,
      currPos: [currPiece.x,currPiece.y],
      toPos: [emptyPiece.x,emptyPiece.y]
    };
    
    const toSend = JSON.stringify(move);
    
    var res  = await fetch('move/'+USERNAME+'/'+id,{
      method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: toSend });

    try {
      if(res.ok){
        var newBoard = await res.json();
        setGrid(newBoard);
      }
    } catch (e) {console.log(e)}
  
    console.log(currPiece);
    console.log(emptyPiece);
    
    currPiece.BackgroundColor = BackgroundSpaceColorDark;
    emptyPiece.BackgroundColor = BackgroundSpaceColorDark;
    
    currPiece = null; 
    emptyPiece = null;
    console.log("Sent Piece")
  }
}

function draw() {
  background(255);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      if(grid[i][j].Background==false){
        grid[i][j].show();
      }else{
        grid[i][j].show();
      }
    }
  }
}





