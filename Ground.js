class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      strokeWeight(0);
      rectMode(CENTER);
      fill(112, 255, 109);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
