        const Engine = Matter.Engine;
        const World= Matter.World;
        const Bodies = Matter.Bodies;
        const Constraint = Matter.Constraint;

        var a;
        var circles=[];
        var Stand1,Stand2,ground;
        var stone1;
        var SCORE=0;

        //red blocks
        var b1,b2,b3,b4,b5,b6,b7;
        var c1,c2,c3,c4,c5;

        //greeen blocks
        var g1,g2,g3,g4,g5;
        var p1,p2,p3;

        //pink blocks
        var v1,v2,v3;
        var V1;

        //grey block
        var G1;

        var slingshot;

function setup() {
  createCanvas(1200,800);
        stroke(255)
        

        engine = Engine.create();
          world = engine.world;

        Stand1 = new Ground(500,700,300,20);
        Stand2 = new Ground(900,500,250,20);
        ground = new Ground(600,790,1200,10);

        stone1 = new Stone(150,650,30,30);

        b1 = new Box(500,665,30,50);
        b1.shapeColor = "white";
        b2 = new Box(470,665,30,50);
        b3 = new Box(440,665,30,50);
        b4 = new Box(410,665,30,50);
        b5 = new Box(530,665,30,50);
        b6 = new Box(560,665,30,50);
        b7 = new Box(590,665,30,50);

        c1 = new Box(900,465,30,50);
        c2 = new Box(870,465,30,50);
        c3 = new Box(840,465,30,50);
        c4 = new Box(930,465,30,50);
        c5 = new Box(960,465,30,50);

        g1 = new Box(500,640,30,50);
        g2 = new Box(470,640,30,50);
        g3 = new Box(440,640,30,50);
        g4 = new Box(530,640,30,50);
        g5 = new Box(560,640,30,50);

        p1 = new Box(900,440,30,50);
        p2 = new Box(870,440,30,50);
        p3 = new Box(930,440,30,50);

        v1 = new Box(500,615,30,50);
        v2 = new Box(470,615,30,50);
        v3 = new Box(530,615,30,50);

        V1 = new Box(900,415,30,50);

        G1 = new Box(500,590,30,50);

        slingshot = new Slingshot(stone1.body,{x:150, y:600});

      // camera=new Camera(width/2,height/2,0.5);
        //camera.on();
       // a=height;
        //circles.push(width/2)
}

function draw() {
      //camera.zoom=camera.zoom+1
      background("skyblue");  
      Engine.update(engine);

      //text("SCORE:"+score,750,40);
      
     /* a=a-1;
      //camera.zoom=camera.zoom+0.01
    //camera.position={x:width/2,y:a}
    
      
      for (i=0;i<circles.length;i++)
    {
      circle(circles[i], height/2,20)
    }
    if(camera.position.x%width===0)
    {
      circles.push(camera.position.x+width/2)
    }
    // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);*/

    Stand1.display();
    Stand2.display();
    ground.display();

    stone1.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();

    b1.score();
    b2.score();
    b3.score();
    b4.score();
    b5.score();
    b6.score();
    b7.score();

    c1.display();
    c2.display();
    c3.display();
    c4.display();
    c5.display();


    c1.score();
    c2.score();
    c3.score();
    c4.score();
    c5.score();
    
    g1.display();
    g2.display();
    g3.display();
    g4.display();
    g5.display();

    g1.score();
    g2.score();
    g3.score();
    g4.score();
    g5.score();


      p1.display();
      p2.display();
      p3.display();

      p1.score();
      p2.score();
      p3.score();

      v1.display();
      v2.display();
      v3.display();

      v1.score();
      v2.score();
      v3.score();

      V1.display();

      V1.score();


      G1.display();

      G1.score();

    slingshot.display();
    drawSprites();
}

function keyPressed ()
{
      if(keyCode === RIGHT_ARROW)
      {
        if(keyIsDown(RIGHT_ARROW))
        {
          camera.position.x=camera.position.x+10;
        }
      }
} 


function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
      if(keyCode === 32) {
          slingshot.attach(stone.body);
      }
}
