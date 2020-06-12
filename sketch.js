const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var gameState=0;
var slingIMG,BG,BKimg;
var score=0;
var time=0;
var slingshot,ball;
var t=120;

function preload() {
    slingIMG = loadImage("slingshot.png");
    BG = loadImage("space.jpg");
    BKimg = loadImage("solar panel.png");
}

function setup(){
    var canvas = createCanvas(1360,625);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball (200,100,50,50);
    slingshot = new SlingShot (ball.body,{x:600,y:460});

    b1 = new Asteroid (0,0,10,20);
    b2 = new Asteroid (-502,300,20,30);
    b3 = new Asteroid (-100,100,10,20);
    b4 = new Asteroid (-902,160,30,50);
    b5 = new Asteroid (-300,50,60,40);
    b6 = new Asteroid (-700,200,20,50);
    b7 = new Asteroid (-1100,50,30,10);
    b8 = new Asteroid (-1300,250,20,40);
    

    p1 = new Planet (1000,250,150,150,1);
    p2 = new Planet (500,150,150,150,2);
    p3 = new Planet (180,350,150,150,3);

}

function draw(){
    //console.log(frameCount);
    imageMode(CORNER);
    background(BG);
    Engine.update(engine); 

    if(frameCount<6060){

    image(BKimg,0,425,1360,200);
    image(slingIMG,520,400,150,250);

    ball.display();
    slingshot.display();

    b1.display(ball,10,20);
    b1.loop(b1);
    b2.display(ball,20,30);
    b2.loop(b2);
    b3.display(ball,10,20);
    b3.loop(b3);
    b4.display(ball,30,50);
    b4.loop(b4);
    b5.display(ball,60,40);
    b5.loop(b5);
    b6.display(ball,20,50);
    b6.loop(b6);
    b7.display(ball,30,10);
    b7.loop(b7);
    b8.display(ball,20,40);
    b8.loop(b8);

    p1.display();
    p2.display();
    p3.display();

    if(ball.body.position.x>1560 || ball.body.position.x<-100 || ball.body.position.y>825 || ball.body.position.y<-200){
        Matter.Body.setPosition(ball.body,{x:600,y:400});
        slingshot.rejoin(ball.body);
        gameState=0;
    }
    textSize(50);
    text("Pull and Launch the Striker to Knock the Asteroids out",20,535);
    textFont("Jokerman");
    text("Score: "+score,800,170);
    if(frameCount%50===0){
        t=t-1;
    }
    text("Time Left: "+t,200,70);
    if(score<50){
    text("Target Score: 50",800,70);
    }else{
        text("Target Score Reached",700,70)
    }
    
    //console.log(Matter.Detector.canCollide(ball.body,b1.body));
    }else{
        textSize(95)
        text("Score:-"+score,300,450);
        textSize(200);
        textFont("Jokerman ");
        if(score>50){
            text(" YOU  WIN",170,300);
        }else{
            text(" YOU LOSE",170,300)
        }
    }

}

function mouseDragged(){
    if(gameState===0){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
    }
}

function mouseReleased(){
    if(gameState===0){
    slingshot.shoot();
    gameState=1;
    }
}

