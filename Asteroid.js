class Asteroid {
  constructor(x, y,width,height) {
    var options = {
        restitution:0,
        friction:0,
        density:0.5,
        gravity:0
    }
    this.size1=4;
    this.size2=3.5;
    this.body = Bodies.rectangle(x, y, width*this.size1, height*this.size2, options);
    this.width = width*this.size1;
    this.height = height*this.size2;
    var numbers = ['1','2','3','4','5','6','7','8'];
    this.num = random(numbers);
    this.image = loadImage("asteroid "+ this.num+".png");
    this.Visibility=255;
    this.gs=0;
    
    World.add(world, this.body);
  }
  display(object1,height,width){
    push();
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    console.log(gameState);
    if (object1.body.position.y - this.body.position.y < height/2 + 40/2){
      if (object1.body.position.x - this.body.position.x < width/2 + 40/2) {
        this.gs=1;
        
        }
      }
      if(this.gs===1){
        push();
        this.image=loadImage("Diamond.png");
        imageMode(CENTER);
        image(this.image,10,0,100,100);
        time=time+1;
        World.remove(world,this.body);
        Matter.Body.setPosition(object1.body,{x:600,y:700});
        Matter.Body.setVelocity(object1.body,{x:0,y:1});
        //slingshot.rejoin(ball.body);
        gameState=0;
        pop();
        if(time>5){
          push();
          var numbers = ['1','2','3','4','5','6','7','8'];
          this.num = random(numbers);
          this.image = loadImage("asteroid "+ this.num+".png");
        imageMode(CENTER);
        image(this.image,10,0,this.width*4,this.height*3.5);
        World.add(world,this.body);
        Matter.Body.setPosition(this.body,{x:-200,y:-100});
        time=0;
        score=score+1;
        this.gs=0;
        pop();
        }
      }
      pop();
    }
    

  loop(l){
    Matter.Body.setMass(l.body,3);
  if(l.body.position.x>1450 || l.body.position.y<-50 || l.body.position.x<-150 || l.body.position.y>550){
    Matter.Body.setPosition(l.body,{x:-100,y:random(0,200)});
    angleMode(DEGREES)
    Matter.Body.setAngle(l.body,random(90,180));
    var numbers = ['1','2','3','4','5','6','7','8'];
    this.num = random(numbers);
    this.image = loadImage("asteroid "+ this.num+".png");
  }else{
    if(frameCount%2==0){
    Matter.Body.setVelocity(l.body,{x:5,y:0});
    }
  }
}
};
