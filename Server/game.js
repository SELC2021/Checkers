const modCell = require('./Client/cell');

var BackgroundSpaceColorDark = '#EAA9A9';
var BackgroundSpaceColorWhite = '#F9F5E9';


module.exports= class Game {

    constructor(){
        var grid = make2DArray(8, 8);
        for (var r = 0; r < 8; r++) {
            for (var c = 0; c < 8; c++) {
        
                if ((c + r) % 2 == 0) {
                    grid[r][c] = new modCell.EmptyCell(c, r, true, null);
                } else {
                    grid[r][c] = new modCell.Cell(c, r, null, true, null, null);
                }
            }
        }
        for (var r = 0; r < 8; r++) {
            for (var c = 5; c < 8; c++) {
                if (grid[r][c].Background == false) {
                   grid[r][c].Empty = false;
                    grid[r][c].PieceColor = true;
                }
            }
        }
        for (var r = 0; r < 8; r++) {
            for (var c = 0; c < 3; c++) {
                if (grid[r][c].Background == false) {
                    grid[r][c].Empty = false;
                    grid[r][c].PieceColor = false;
                }
            }
        }
        
        this.grid = grid;
        }

        //{
//    "color": "b",
//    "currPos": [0,4],
//    "toPos": [5,3]
//    "King": False,
//}

        setBoard(m){
            this.grid[m.currPos[0]][m.currPos[1]].Empty = true;
            this.grid[m.currPos[0]][m.currPos[1]].PieceColor = null;

            this.grid[m.toPos[0]][m.toPos[1]].Empty = false;
            this.grid[m.toPos[0]][m.toPos[1]].PieceColor = m.color;
        }

        sendBoard(){
            return JSON.stringify(this.grid);
        }
    }
    
 
    function make2DArray(cols, rows) {
    var arr = new Array(cols);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
    }





