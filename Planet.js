class Planet {
    constructor(x,y,width,height,num) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,width/2,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("planet "+num+".png");
      World.add(world, this.body);
    }
    display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
    }
  };
