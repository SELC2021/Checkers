
function Cell(x,y,BlackOrRed,Emtpy,w,BackgroundColor){
    this.x = x;
    this.y = y;
    this.PieceColor = BlackOrRed;
    this.Emtpy = Emtpy;
    if(Emtpy){
       this.PieceColor = null; 
    }
    this.w = w;
    this.BackgroundColor = BackgroundColor;
    this.Background = false;
}

function EmptyCell(x,y,w,BackgroundColor){
    this.x = x;
    this.y = y;
    this.Background = true;
    this.w = w;
    this.BackgroundColor = BackgroundColor;
}

EmptyCell.prototype.show = function() {
  noStroke();
  
  fill(this.BackgroundColor);
    
  rect(this.x*this.w, this.y*this.w, this.w, this.w);
}



Cell.prototype.show = function() {
  noStroke();
  
  // Background Color of the square 

  fill(this.BackgroundColor);
    
  rect(this.x*this.w, this.y*this.w, this.w, this.w);

  if (this.PieceColor !== null) {

  if(this.PieceColor){

  fill('#747474');
  ellipse(this.x*this.w + this.w/2, this.y*this.w + this.w/2, this.w * 0.8);
  fill('#A2A2A2');
  ellipse(this.x*this.w + this.w/2, this.y*this.w + this.w/2, this.w * 0.6);
  }else{

  fill('#FF2626');
  ellipse(this.x*this.w + this.w/2, this.y*this.w + this.w/2, this.w * 0.8);
  fill('#FF5F5F');
  ellipse(this.x*this.w + this.w/2, this.y*this.w + this.w/2, this.w * 0.6);

  }
  }

}

Cell.prototype.contains = function(x, y) {
  return (x > this.x*this.w && x <= this.x*this.w + this.w && y >= this.y*this.w && y <= this.y*this.w + this.w);
}


Cell.prototype.isEmpty = function(){
    return this.Emtpy;
}