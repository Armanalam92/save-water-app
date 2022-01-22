var taskButton,taskButtonImg;
var aboutapp,aboutappImg,aboutappTxt;
var login,loginImg;
var savewater,savewaterImg;
var mouse,mouseImg;
var task1,task1Img,task2,task2Img,task3,task3Img,task4,task4Img;
var aboutTask1,aboutTask1Img,aboutTask2,aboutTask2Img,aboutTask3,aboutTask3Img,aboutTask4,aboutTask4Img;
var backButton1,backButton1Img,backButton2,backButton2Img,backButton3,backButton3Img,backButton4,backButton4Img,backButton5,backButton5Img;
var morebutton,morebuttonImg;

function preload() {
 taskButtonImg = loadImage("./assets/task button.png");
 aboutappImg = loadImage("./assets/about button.png");
 savewaterImg = loadImage("./assets/saveWater.png");
 loginImg = loadImage("./assets/log in button.png");
 mouseImg = loadImage("./assets/mouse.png");
 task1Img = loadImage("./assets/task1.png");
 task2Img = loadImage("./assets/task2.png");
 task3Img = loadImage("./assets/task3.png");
 task4Img = loadImage("./assets/task4.png");
 aboutTask1Img = loadImage("./assets/abouttask1.png");
 aboutTask2Img = loadImage("./assets/abouttask2.png");
 aboutTask3Img = loadImage("./assets/abouttask3.png");
 aboutTask4Img = loadImage("./assets/abouttask4.png");
 backButton1Img = loadImage("./assets/backButton.png");
 backButton2Img = loadImage("./assets/backButton.png");
 backButton3Img = loadImage("./assets/backButton.png");
 backButton4Img = loadImage("./assets/backButton.png");
 backButton5Img = loadImage("./assets/backButton.png");
 morebuttonImg = loadImage("./assets/moretaskbutton.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  taskButton = createSprite(width/2,100,100,10);
  taskButton.addImage(taskButtonImg);

  aboutapp = createSprite(width/2,300);
  aboutapp.addImage(aboutappImg);
  aboutapp.scale=1.1;

  login = createSprite(width/2,200);
  login.addImage(loginImg);

  savewater = createSprite(width/2,100);
  savewater.addImage(savewaterImg);


  mouse = createSprite(width/2,500);
  mouse.addImage(mouseImg);
  mouse.scale=0.02;


  task1 = createSprite(width/2,100);
  task1.addImage(task1Img);

  task2 = createSprite(width/2,300);
  task2.addImage(task2Img);

  aboutTask1 = createSprite(width/2,300);
  aboutTask1.addImage(aboutTask1Img);

 
  aboutTask2 = createSprite(width/2,300);
  aboutTask2.addImage(aboutTask2Img);

  backButton1 = createSprite(width/30,40);
  backButton1.addImage(backButton1Img);
  backButton1.scale=0.5;
  
  
  backButton2 = createSprite(width/30,40);
  backButton2.addImage(backButton2Img);
  backButton2.scale=0.5;

  
  backButton3 = createSprite(width/30,40);
  backButton3.addImage(backButton3Img);
  backButton3.scale=0.5;

  morebutton = createSprite(width/1.5,300);
  morebutton.addImage(morebuttonImg);

  backButton4 = createSprite(width/30,40);
  backButton4.addImage(backButton4Img);
  backButton4.scale=0.5;


taskButton.destroy();
aboutapp.destroy();
savewater.destroy();
task1.destroy();
task2.destroy();
//task3.destroy();
//task4.destroy();
aboutTask1.destroy();
aboutTask2.destroy();
//aboutTask3.destroy();
//aboutTask4.destroy();
backButton1.destroy();
backButton2.destroy();
backButton3.destroy();
morebutton.destroy();
backButton4.destroy();
}

function draw() {
  background(0,255,255);

  mouse.x = World.mouseX;
  mouse.y = World.mouseY;

  if (mouse.isTouching(login)) {
     login.destroy();
     
     
     taskButton = createSprite(width/2,100,100,10);
     taskButton.addImage(taskButtonImg);
   
     aboutapp = createSprite(width/2,350);
     aboutapp.addImage(aboutappImg);
     aboutapp.scale=1.1;
  }

  if (mouse.isTouching(aboutapp)) {
  
  taskButton.destroy();
  aboutapp.destroy();

  
  backButton1 = createSprite(width/30,40);
  backButton1.addImage(backButton1Img);
  backButton1.scale=0.5;

  savewater = createSprite(width/2,300);
  savewater.addImage(savewaterImg);
  }

  if (mouse.isTouching(taskButton)) {
    taskButton.destroy();
    aboutapp.destroy();

  
    morebutton = createSprite(width/1.3,450);
    morebutton.addImage(morebuttonImg);
    morebutton.scale=0.5;      
  
     backButton2 = createSprite(width/30,40);
     backButton2.addImage(backButton2Img);
     backButton2.scale=0.5;
   
    task1 = createSprite(width/2,100);
    task1.addImage(task1Img);
    task1.scale=1.01; 

    task2 = createSprite(width/2,300);
    task2.addImage(task2Img);
  }

  if (mouse.isTouching(task1)) {
     task1.destroy();
     task2.destroy();
     backButton1.destroy();
     backButton2.destroy();

     
  backButton3 = createSprite(width/30,40);
  backButton3.addImage(backButton3Img);
  backButton3.scale=0.5;
     aboutTask1 = createSprite(width/2,300);
     aboutTask1.addImage(aboutTask1Img);
  }

  if (mouse.isTouching(task2)) {
    task1.destroy();
    task2.destroy();
    backButton3.destroy();
     aboutTask1.destroy();
  backButton3 = createSprite(width/30,40);
  backButton3.addImage(backButton3Img);
  backButton3.scale=0.5;
    aboutTask2 = createSprite(width/2,300);
    aboutTask2.addImage(aboutTask2Img);
  }

  if (mouse.isTouching(backButton1)) {
    savewater.destroy();
    taskButton.destroy();
    aboutapp.destroy();

    
  taskButton = createSprite(width/2,100,100,10);
  taskButton.addImage(taskButtonImg);

  aboutapp = createSprite(width/2,300);
  aboutapp.addImage(aboutappImg);
  aboutapp.scale=1.1;

  }

  if (mouse.isTouching(backButton2)) {
    task1.destroy();
    task2.destroy();
    taskButton.destroy();
    aboutapp.destroy();
    aboutTask1.destroy();
    aboutTask2.destroy();
        
  taskButton = createSprite(width/2,100,100,10);
  taskButton.addImage(taskButtonImg);

  aboutapp = createSprite(width/2,300);
  aboutapp.addImage(aboutappImg);
  aboutapp.scale=1.1;

  }

  if (mouse.isTouching(backButton3)) {
  
    aboutTask1.destroy();
    aboutTask2.destroy();

    task1 = createSprite(width/2,100);
    task1.addImage(task1Img);
    task1.scale=1.01; 

    task2 = createSprite(width/2,300);
    task2.addImage(task2Img);
  }

  if (mouse.isTouching(morebutton)) {
     task1.destroy();
     task2.destroy();
     aboutTask1.destroy();
     aboutTask2.destroy();
     aboutapp.destroy();
     taskButton.destroy();
     backButton3.destroy();
     backButton2.destroy();
     backButton1.destroy();

     
     backButton4 = createSprite(width/30,40);
     backButton4.addImage(backButton4Img);
     backButton4.scale=0.5;
   
   

     stroke("black");
     fill("black");
     textSize(50);
     text("MORE TASK'S COMING SOON!!", width/3.7,300);
  }
  drawSprites();

  stroke("black");
  fill("black");
  textSize(50);
  text("SAVE WATER SAVE EARTH", width/3.7, 550);

}

//all things are completed now the work will continou on 1st update
