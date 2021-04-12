const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImage;
var goal1,goal2;
var goalImage,goalImage2;
var backg;

var goa1 = 0;
var goa2 = 0;


function preload() {
   bgImage=loadImage("Images/greenbackground.jpg")
   goalImage = loadImage("Images/rightgoal.png")
   goalImage2 = loadImage("Images/leftgoal.png")
   playerIm = loadImage("Images/player.gif")
   player2Im = loadImage("Images/player2.gif")
   ballIm = loadImage("Images/ball.gif")

}

function setup(){
    var canvas = createCanvas(1530,785);
    engine = Engine.create();
    world = engine.world;

    wall = createSprite(750,0,1530,20)
    wall2 = createSprite(750,785,1530,20)
    wall3 = createSprite(1530,40,20,785)
    wall4 = createSprite(0,400,20,785)
    
   

    backg = createSprite(750,350,1530,785)
    backg.addImage(bgImage)

   goal1 = createSprite(1500,350,20,200)
    goal1.addImage(goalImage)
    goal1.scale = 0.4

    goal2 = createSprite(30,350,20,200)
    goal2.addImage(goalImage2)
    goal2.scale = 0.1

    
    ball = createSprite(750,350,20,20)
    ball.addImage(ballIm)
    ball.scale = 0.1
    player = createSprite(500,350,50,50)
    player.addImage(player2Im)
    player.scale = 0.2
    player2 = createSprite(1000,350,50,50)
    player2.addImage(playerIm)
    player2.scale = 0.2
    player3 = createSprite(750,600,50,50)
    player3.addImage(player2Im)
    player3.scale = 0.2

    player4 = createSprite(750,200,50,50)
    player4.addImage(playerIm)
    player4.scale = 0.2
   
    //slingshot  = new SlingShot(player.body,{x:900,y:400})

    
}

function draw(){
    background(255)

    if(keyDown("w")){
        player.y = player.y-3

    }

    if(keyDown("a")){
        player.x = player.x-3
        
    }

    if(keyDown("d")){
        player.x = player.x+3
        
    }
    
    if(keyDown("s")){
        player.y = player.y+3

    }

    if(keyDown("up")){
        player2.y = player2.y-3

    }

    if(keyDown("left")){
        player2.x = player2.x-3
        
    }

    if(keyDown("right")){
        player2.x = player2.x+3
        
    }

    if(keyDown("down")){
        player2.y = player2.y+3

    }

    if(keyDown("y")){
        player3.y = player3.y-3

    }

    if(keyDown("g")){
        player3.x = player3.x-3
        
    }

    if(keyDown("j")){
        player3.x = player3.x+3
        
    }

    if(keyDown("h")){
        player3.y = player3.y+3

    }

    if(keyDown("o")){
        player4.y = player4.y-3

    }

    if(keyDown("k")){
        player4.x = player4.x-3
        
    }

    if(keyCode===59){
        player4.x = player4.x+3
        
    }

    if(keyDown("l")){
        player4.y = player4.y+3

    }


    

    if(ball.isTouching(player)){
        ball.velocityX = 3

    }

    if(ball.isTouching(player2)){
        ball.velocityX = -3

    }

    if(ball.isTouching(player3)){
        ball.velocityY = -3

    }

    if(ball.isTouching(player4)){
        ball.velocityY = 3

    }
    if(ball.isTouching(goal1)){
    goa2 += 1
    ball.x = 750
    ball.y = 350
    ball.velocityX = 0
    ball.velocityY = 0

    }

    if(ball.isTouching(goal2)){
        goa1 = goa1+1
        ball.x = 750
        ball.y = 350
        ball.velocityX = 0
        ball.velocityY = 0
    
        }
        

    

    createEdgeSprites()
    ball.bounceOff(wall)
    ball.bounceOff(wall2)
    ball.bounceOff(wall3)
    ball.bounceOff(wall4)


    drawSprites();

    if(goa1 ===5){
        ball.x = 750
        ball.y = 350
        ball.velocityX = 0
        ball.velocityY = 0
        textSize(50)
        fill("red")
        text("YOU WIN",650,400)
        }

        if(goa2 ===5){
            ball.x = 750
            ball.y = 350
            ball.velocityX = 0
            ball.velocityY = 0
            textSize(50)
            fill("blue")
            text("YOU WIN",650,400)
            }
   
    textSize(20)
    fill("red")
    text("RED "+goa1,800,100)

    textSize(20)
    fill("blue")
    text("BLUE "+goa2,650,100)


    stroke("white")
    strokeWeight(2)
    noFill()
    ellipse(750,350,100,100)
    line(750,0,750,785)
    fill("white")
    ellipse(750,350,10,10)
    line(20,20,1510,20)
    line(1510,20,1510,765)
    line(20,20,20,765)
    line(20,765,1510,765)
    
    



   
}

