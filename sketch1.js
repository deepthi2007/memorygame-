var yellow1,yellow2;
var blue1,blue2;
var green1,green2;

var gameState="start";
var count=0;
var click1Image,click2Image;
var shouldCheck=true;
var group;

var Won,WonObj;

var startImg,start;

var groundObj,groundImg;

var score=0;

function preload(){
    Won = loadImage("win.png");
    groundImg=loadImage("backGround.jpg");
    startImg = loadImage("start.png");
}
  

function setup() {
    createCanvas(400,400);

    ground = createSprite(200,50,0,0);
    ground.addImage("IMG",groundImg);
    ground.scale =2;

    yellow1 = createSprite(80,60, 50, 100);
    yellow1.shapeColor="orange";
    yellow1.visible=false;
    blue1 = createSprite(320,60,50,100);
    blue1.shapeColor="orange";
    blue1.visible=false;
  
    blue2 = createSprite(80,190,50,100);
    blue2.shapeColor="orange";
    blue2.visible=false;
    green1 = createSprite(320,190,50,100);
    green1.shapeColor="orange";
    green1.visible=false;
  
    yellow2 = createSprite(320,320,50,100);
    yellow2.shapeColor="orange";
    yellow2.visible=false;
    green2 = createSprite(80,320,50,100);
    green2.shapeColor="orange";
    green2.visible=false;

    group = new Group();

    WonObj=createSprite(200,200,50,50);
    WonObj.visible=false;

    start=createSprite(200,200);
  
  }

  function draw(){
      background(0,0,0);
      drawSprites();
      imageMode(CENTER);

      ground.velocityY=-5;

      if(ground.y < 0){
        ground.y = ground.height/2;
     }

       if(gameState==="start"){
         start.addImage("button",startImg);
      } 
      if(mousePressedOver(start)){
          gameState="play";
      }
      if(gameState==="play"){
         play();
         textSize(24);
         fill(250, 5, 5)
         text("SCORE = "+score,130,50);
         start.visible=false;

         yellow2.visible=true;
         yellow1.visible=true;
         blue1.visible=true;
         blue2.visible=true;
         green1.visible=true;
         green2.visible=true;
      }

      
  }

  function play(){
      if(count<2 && gameState==="play"){
         shouldCheck=true;
        /*  console.log(shouldCheck);
         console.log(gameState);
         console.log(count); */
        if (mousePressedOver(yellow1)){
            if(yellow1.shapeColor==="orange"){
                count+=1;
                yellow1.shapeColor="yellow";
                 group.add(yellow1);
                 compare(yellow1);
            }
        }

        if (mousePressedOver(yellow2)){
            if(yellow2.shapeColor==="orange"){
                count+=1;
                yellow2.shapeColor="yellow";
                 group.add(yellow2);
                 compare(yellow2);
            }
        }

        if (mousePressedOver(blue1)){
            if(blue1.shapeColor==="orange"){
                count+=1;
                blue1.shapeColor="blue";
                 group.add(blue1);
                 compare(blue1);
            }
        }

        if (mousePressedOver(blue2)){
            if(blue2.shapeColor==="orange"){
                count+=1;
                blue2.shapeColor="blue";
                 group.add(blue2);
                 compare(blue2);
            }
        }

        if (mousePressedOver(green1)){
            if(green1.shapeColor==="orange"){
                count+=1;
                green1.shapeColor="green";
                 group.add(green1);
                 compare(green1);
            }
        }

        if (mousePressedOver(green2)){
            if(green2.shapeColor==="orange"){
                count+=1;
                green2.shapeColor="green";
                 group.add(green2);
                 compare(green2);
            }
        }
       
      }
      if(count === 2 && shouldCheck === true){
        setTimeout(check,2000);
         shouldCheck = false;
        WonObj.addImage("you won",Won);
        WonObj.scale=0.3;
       // score+=10;
     }
  }
  function compare(card){
      if(count===1){
          click1Image=card.shapeColor;
      }
      if(count===2){
          click2Image=card.shapeColor;
      }
  }

  function check(){
      if(click1Image!=click2Image){
          for(var i=0;i<group.length;i++){
              if(group.get(i)!=null){
                  group.get(i).shapeColor="orange";
                  WonObj.visible=false;
                  score-=5;
                  
              }
          }
         
      }
      if(click1Image===click2Image){
          group.clear();
          WonObj.visible=true;
          score+=10;
      }
      count=0;
  }