class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    rejoin(body){
        this.sling.bodyA = body;
    }
    
    shoot(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("black");
            fill("black");
            strokeWeight(5);
            line(pointA.x-20,pointA.y+18,pointB.x-39,pointB.y-28);
            line(pointA.x+10,pointA.y+18,pointB.x+25,pointB.y-28);
            rectMode(CENTER);
            rect(pointA.x-5,pointA.y+18,30,10);
            pop();
        }
    }
    
}