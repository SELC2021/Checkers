var piece = 1;
var board = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 2, 0, 2, 0, 2, 0],
    [0, 2, 0, 2, 0, 2, 0, 2],
    [2, 0, 2, 0, 2, 0, 2, 0]
];

function checkPiece(row, column, piece) {
    if (board[row][column] == piece) {
        return true;
    }
    return false;
}

function move(column, row, rowOG, columnOG, piece) {
    if (checkPiece(rowOG, columnOG, piece)) {
        if (!checkPiece(row, column) && checkMove(column, row, columnOG, rowOG)) {
            board[rowOG][columnOG] = 0;
            board[row][column] = piece;
        }
        if (checkPiece(row, column) && checkMove(column, row, columnOG, rowOG)) {
            board[rowOG][columnOG] = 0;
            board[row][column] = 0;
            if (column - columnOG == -1) {
                board[row][column + 1] = piece;
            } else {
                board[row][column - 1] = piece;
            }
            //need to figure out how to make sure no index value out of bound and that the piece now moves to the board +1 or -1 board[row][column]=piece;
        }
    }
}



function checkMove(column, row, columnOG, rowOG) {
    if (columOG - column < 0) {
        return false;
    }
    if (columnOG + column > 7) {
        return false;
    }
    if (rowOG - row < 0) {
        return false;
    }
    if (rowOG + row) {
        return false;
    }


    if ((column == (columnOG - 1)) || (column == (columnOG + 1))) {
        if ((row == (rowOG - 1)) || (row == (rowOG + 1))) {
            return true;
        }
    }
    return false;
}

function changePiece() {
    if (piece == 2)
        piece = 1;
    else
        piece = 2
}


function printBoard() {
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

function checkDoubleJump(column, row) {
    //need to be done to check if another piece can be jumped after the //original jump
    //checkPiece(coulumn, row);
}
console.log(checkMove(3, 4, 4, 3)); //expected true
console.log(checkMove(3, 4, 5, 3)); //expected false
console.log(checkPiece(0, 0)); //expected false
console.log(checkPiece(0, 1)); //expected false
console.log(checkPiece(5, 2)); //expected false
printBoard();
move(2, 3, 1, 2, 1);
printBoard();