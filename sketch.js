// https://stackoverflow.com/questions/54217682/building-a-calculator-using-p5-js
// https://stackoverflow.com/questions/61747298/make-a-calculator-in-p5
// https://stackoverflow.com/questions/61757326/making-a-calculator-function-properly-in-p5-js
var mouseClick = false;

var displayNumArray = [];  //gloab array er nødvendig for at få tal fra flere objecter

var displayNum = "";
var wholeNum;

var operatorType = "";
var operatorNumber;

var state;

const buttonWidth = 100;
const buttonHeight = 80;
const buttonStartY = 520;

function setup() 
{
  createCanvas(400, 600);

  bDot = new Buttons((buttonWidth/2)*2+(buttonWidth/2), buttonStartY+(buttonHeight/2)     , buttonWidth, buttonHeight, ".", 255, 255, 255)
  b0 = new Buttons((buttonWidth/2)                  , buttonStartY+(buttonHeight/2)     , buttonWidth, buttonHeight, "0", 255, 255, 255)
  b1 = new Buttons((buttonWidth/2)                  , buttonStartY-(buttonHeight/2)     , buttonWidth, buttonHeight, "1", 255, 255, 255)
  b2 = new Buttons((buttonWidth/2)*2+(buttonWidth/2), buttonStartY-(buttonHeight/2)     , buttonWidth, buttonHeight, "2", 255, 255, 255)
  b3 = new Buttons((buttonWidth/2)*3+buttonWidth    , buttonStartY-(buttonHeight/2)     , buttonWidth, buttonHeight, "3", 255, 255, 255)
  b4 = new Buttons((buttonWidth/2)                  , buttonStartY-((buttonHeight/2)*3) , buttonWidth, buttonHeight, "4", 255, 255, 255)
  b5 = new Buttons((buttonWidth/2)*2+(buttonWidth/2), buttonStartY-((buttonHeight/2)*3) , buttonWidth, buttonHeight, "5", 255, 255, 255)
  b6 = new Buttons((buttonWidth/2)*3+buttonWidth    , buttonStartY-((buttonHeight/2)*3) , buttonWidth, buttonHeight, "6", 255, 255, 255)
  b7 = new Buttons((buttonWidth/2)                  , buttonStartY-((buttonHeight/2)*5) , buttonWidth, buttonHeight, "7", 255, 255, 255)
  b8 = new Buttons((buttonWidth/2)*2+(buttonWidth/2), buttonStartY-((buttonHeight/2)*5) , buttonWidth, buttonHeight, "8", 255, 255, 255)
  b9 = new Buttons((buttonWidth/2)*3+buttonWidth    , buttonStartY-((buttonHeight/2)*5) , buttonWidth, buttonHeight, "9", 255, 255, 255)

  // +
  o1 = new Operators((buttonWidth/2)*3+buttonWidth*2, buttonStartY+(buttonHeight/2)     , buttonWidth, buttonHeight, "+", 255, 255, 255)
  // -
  o2 = new Operators((buttonWidth/2)*3+buttonWidth*2, buttonStartY-(buttonHeight/2)     , buttonWidth, buttonHeight, "-", 255, 255, 255)
  // *
  o3 = new Operators((buttonWidth/2)*3+buttonWidth*2, buttonStartY-((buttonHeight/2)*3) , buttonWidth, buttonHeight, "×", 255, 255, 255)
  
  o4 = new Operators((buttonWidth/2)*3+buttonWidth*2, buttonStartY-((buttonHeight/2)*5) , buttonWidth, buttonHeight, "÷", 255, 255, 255)

  // clear
  oAC = new Operators((buttonWidth/2)*3+buttonWidth*2, buttonStartY-((buttonHeight/2)*7) , buttonWidth, buttonHeight, "AC", 255, 255, 255)
  // =
  o9 = new Operators((buttonWidth/2)*3+buttonWidth    , buttonStartY+(buttonHeight/2)     , buttonWidth, buttonHeight, "=", 255, 255, 255)


  menu = new StateMenu(25, 10, 50 ,20 ,255 ,255 ,255)
}

function draw() 
{
  background(220);

  state = menu.Menu(mouseClick);
  
  if(state == 1) //vis lommeregner
  {
    mainCalc();
  }
  
  console.log(state);

  mouseClick = false;
}

function mousePressed()
{
  // console.log("click");
  mouseClick = true;
}

function mousePos()
{
  console.log("mouse pos: " + mouseX +  "\t" + mouseY);
}