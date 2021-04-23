// get 2d array
// setup p5js
// handle user interface  
// handle sending data to the server 

// dummy Board
function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

// Colors 
var BackgroundSpaceColorDark = '#EAA9A9';
var BackgroundSpaceColorWhite = '#F9F5E9';

var cols = 0;
var rows = 0;
var grid;
// Pixel size of each Space 
var w = 80;

function readBoard(){

}

function setup() {

  createCanvas(8*w+1,8*w+1);

  cols = floor(width / w);
  rows = floor(height / w);

  grid = make2DArray(cols,rows);

  for (var i = 0; i < cols; i++) {

    for (var j = 0; j < rows; j++) {

      if( (j+i) % 2 == 0){
        grid[i][j] = new EmptyCell(i,j,w,BackgroundSpaceColorWhite);
      }else{
        grid[i][j] = new Cell(i,j,false,true,w,BackgroundSpaceColorDark);
      }
    }
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


var currPiece;
var emptyPiece;

function mousePressed(){
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      //console.log(mouseX,mouseY);
      if(grid[i][j].Background==false){

        if (grid[i][j].contains(mouseX, mouseY)) {
  
            
            if(grid[i][j].isEmpty() == false){

              try {
                currPiece.BackgroundColor = BackgroundSpaceColorDark;
              } catch (e){}

              currPiece =  grid[i][j];
              // darken Curr piece 
              currPiece.BackgroundColor = '#953535';
              console.log(currPiece);
              console.log(emptyPiece);
    
            }else{
              try {
                emptyPiece.BackgroundColor = BackgroundSpaceColorDark;
              } catch (e) {}

              emptyPiece = grid[i][j];
              if(currPiece !== null){
                emptyPiece.BackgroundColor = '#953535';
              }
              console.log(currPiece);
              console.log(emptyPiece);
    
            }
          
        }

        
        
			}
    }
  }
  
  if(currPiece!=null&&emptyPiece!=null){
  
    const move = {
    color: currPiece.PieceColor,
    currPos: [currPiece.x,currPiece.y],
    toPos: [emptyPiece.x,emptyPiece.y]
    };
    
    const toSend = JSON.stringify(move);
    const xhr = new XMLHttpRequest();
    
    // send with ID 
  
    xhr.open("POST", "move");
  
    xhr.setRequestHeader("Content-Type","application/json");
  
    xhr.send(toSend);
  
    currPiece.BackgroundColor = BackgroundSpaceColorDark;
    emptyPiece.BackgroundColor = BackgroundSpaceColorDark;
    
    currPiece = null; 
    emptyPiece = null;
    }
}






