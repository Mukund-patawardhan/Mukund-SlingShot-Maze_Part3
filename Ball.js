class Ball {
  constructor(x, y) {
    var options = {
        'restitution':1,
        'friction':1.0,
        'density':2
    }
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.width = 50;
    this.height = 50;
    this.image = loadImage("striker.png");
    World.add(world, this.body);
  }
  display(){ 
    Matter.Body.setMass(this.body,180);
    Matter.Body.setAngle(this.body,PI);
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("green");
    strokeWeight(4);
    stroke("blue");
    rect(0, 0, this.width, this.height);
    imageMode(CENTER);
    image(this.image,0,0,100,100);
    pop();
  }
};