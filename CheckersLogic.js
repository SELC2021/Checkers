var board = [[0, 1, 0, 1, 0, 1, 0, 1],
             [1, 0, 1, 0, 1, 0, 1, 0],
             [0, 1, 0, 1, 0, 1, 0, 1],
             [0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0],
             [2, 0, 2, 0, 2, 0, 2, 0],
             [0, 2, 0, 2, 0, 2, 0, 2],
             [2, 0, 2, 0, 2, 0, 2, 0]];

function printBoard(board){
  var iterator = board.values(); 
  console.log(iterator.next().value);
   console.log(iterator.next().value);
    console.log(iterator.next().value);
     console.log(iterator.next().value);
      console.log(iterator.next().value); 
      console.log(iterator.next().value);
       console.log(iterator.next().value);
        console.log(iterator.next().value);
        console.log('\n');
}


function finalMove(rowOG, columnOG, row, column, arr, piece){
  if(checkMove(rowOG,columnOG, row, column, arr, piece)){
    move(rowOG, columnOG, row, column, arr, piece);
    return true;
  }
    else if(checkJump(rowOG,columnOG, row, column, arr, piece)){
    jump(rowOG, columnOG, row, column, arr, piece);
    return true;
  }
  else{
    return false;
  }
}


function jump(rowOG, columnOG,row, column,arr, piece){
  let direction = column - columnOG;

    if(piece==1)
    {
    arr[rowOG][columnOG]=0;
    arr[row][column]=0;
    arr[row +1][column + direction]=piece;
    }

  else
  {
        arr[rowOG][columnOG]=0;
    arr[row][column]=0;
    arr[row -1][column + direction] = piece;
  }
}
function checkJump(rowOG, columnOG, row, column, arr,piece)
{
  let direction = column - columnOG;
  if(piece == 1)
  {
    if(arr[row][column] == 2 && (isEmpty(arr, row+1, column + direction)))
    {
      return true;
    }
  
    else
      return false;
  }

  else
  {
    if(arr[row][column] == 1 && (isEmpty(arr, row-1, column + direction)))
    {
      return true;
    }
  
    else
      return false;
  }
}


function move(rowOG, columnOG, row, column, arr, piece){
    arr[rowOG][columnOG]=0;
    arr[row][column]=piece;
}
  function checkMove( rowOG, columnOG,row, column, arr, piece){
    if(isEmpty(arr,rowOG,columnOG)){
      return false;
    }
    if(!isEmpty(arr,row,column)){
        return false;
    }

    if(!pieceThere(piece,rowOG,columnOG,board)){
      return false;
    }

    else if((column==(columnOG-1))||(column==(columnOG+1))){
        if((row==(rowOG-1))||(row==(rowOG+1))){
      return true;
        }
  }
    return false;
  }

function isEmpty(arr, moveRow, moveColumn)
{
  
if((moveRow > 7 || moveRow < 0) || (moveColumn > 7 || moveColumn < 0))
  return false;

if(arr[moveRow][moveColumn] == 0)
  return true;

else
  return false;
}

function pieceThere(piece, row, column, arr){
if(arr[row][column]==piece){
  return true;
}
return false;
}

printBoard(board);
 move(2, 1, 3, 0,board, 1);
 printBoard(board);
move(5,2,4,1,board,2);
printBoard(board);
jump(3,0,4,1,board,1);
printBoard(board);
finalMove(6, 3, 5, 2, board, 2);
printBoard(board);
finalMove(1,0,2,1,board,1);
printBoard(board);