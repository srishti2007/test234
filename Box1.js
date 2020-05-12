class Box1 {
    constructor(x,y,width,height) {
        
    this.body = Bodies.rectangle(x,y,width,height);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      strokeWeight(0);
      rectMode(CENTER);
      fill(209, 33, 127);
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  };