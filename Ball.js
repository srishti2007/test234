class Bird extends Box {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    var pos =this.body.position;
    rectMode(CENTER);
    fill(255, 124, 124);
    rect(pos.x, pos.y, this.width, this.height);
  }
}
