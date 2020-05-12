class Box2 {
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
      fill("violet");
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  };