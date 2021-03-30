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

function changePiece() {
    if (piece == 2)
        piece = 1;
    else
        piece = 2
}

function checkKing(row, column, piece) {
    var kingVal = board[row][column];
    if (piece == 1) {
        if (kingVal == 3) {
            return true;
        }
    }
    if (piece == 2) {
        if (kingVal == 4) {
            return true;
        }
    }
}


function checkMove(row, column, rowOG, columnOG, piece) {
    //Checks if the piece wanted to be move even exists at the original spot
    if (!checkPiece(rowOG, columnOG, piece)) {
        return false
    }

    //Makes sure that the row and column to be mvoed to are within the board indexes
    if (column < 0) {
        return false;
    }
    if (column > 7) {
        return false;
    }
    if (row < 0) {
        return false;
    }
    if (row > 7) {
        return false;
    }

    //Makes sure that the row is being moved the right amount for the 
    if ((column == (columnOG - 1)) || (column == (columnOG + 1))) {
        if ((row == (rowOG - 1)) || (row == (rowOG + 1))) {
            return true;
        }
    }
    return false;
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


printBoard();
console.log(checkPiece(0, 0, 0)); //Expected true
console.log(checkPiece(0, 0, 1)); //Expected false
console.log(checkPiece(0, 1, 1)); //Expected true
console.log(checkPiece(5, 0, 2)); //Expected true
console.log(checkMove(0, 5, 1, 4, 2)); //Expected true
console.log(checkMove(2, 0, 3, 4, 1)); //Expected true