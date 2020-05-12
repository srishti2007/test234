class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.Sling = Constraint.create(options);
        
        World.add(world, this.Sling);
    }
      
    Fly() {

    this.Sling.bodyA = null;    
        
    }
    display(){
        if (this.Sling.bodyA){
        var posA = this.Sling.bodyA.position;
        var posB = this.Sling.pointB;
        fill("red");
        strokeWeight(4);
        fill("red");
        line(posA.x-20, posA.y,posB.x, posB.y);
        line(posA.x-20, posA.y,posB.x+30, posB.y+4);
        }
    }
    
}