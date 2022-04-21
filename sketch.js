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

const buttonWidth = 85;
const buttonHeight = 70;
const buttonStartY = 520;
const offset = 27.5;
const offsetY = 20;

function setup() 
{
  createCanvas(400, 600);

  bDot = new Buttons((buttonWidth)+(buttonWidth/2) + offset  , buttonStartY+(buttonHeight/2)     , buttonWidth, buttonHeight, ".", 255, 255, 255, 1)
  b0 = new Buttons((buttonWidth/2) + offset                  , buttonStartY+(buttonHeight/2)     , buttonWidth, buttonHeight, "0", 255, 255, 255, 1)
  b1 = new Buttons((buttonWidth/2) + offset                  , buttonStartY-(buttonHeight/2)     , buttonWidth, buttonHeight, "1", 255, 255, 255, 1)
  b2 = new Buttons((buttonWidth) + (buttonWidth/2) + offset  , buttonStartY-(buttonHeight/2)     , buttonWidth, buttonHeight, "2", 255, 255, 255, 1)
  b3 = new Buttons((buttonWidth/2)*3+buttonWidth + offset    , buttonStartY-(buttonHeight/2)     , buttonWidth, buttonHeight, "3", 255, 255, 255, 1)
  b4 = new Buttons((buttonWidth/2) + offset                  , buttonStartY-((buttonHeight/2)*3) , buttonWidth, buttonHeight, "4", 255, 255, 255, 1)
  b5 = new Buttons((buttonWidth) + (buttonWidth/2) + offset  , buttonStartY-((buttonHeight/2)*3) , buttonWidth, buttonHeight, "5", 255, 255, 255, 1)
  b6 = new Buttons((buttonWidth/2)*3+buttonWidth + offset    , buttonStartY-((buttonHeight/2)*3) , buttonWidth, buttonHeight, "6", 255, 255, 255, 1)
  b7 = new Buttons((buttonWidth/2) + offset                  , buttonStartY-((buttonHeight/2)*5) , buttonWidth, buttonHeight, "7", 255, 255, 255, 1)
  b8 = new Buttons((buttonWidth) + (buttonWidth/2) + offset  , buttonStartY-((buttonHeight/2)*5) , buttonWidth, buttonHeight, "8", 255, 255, 255, 1)
  b9 = new Buttons((buttonWidth/2)*3+buttonWidth + offset    , buttonStartY-((buttonHeight/2)*5) , buttonWidth, buttonHeight, "9", 255, 255, 255, 1)

  // +
  o1 = new Operators((buttonWidth/2)*3+buttonWidth*2 + offset, buttonStartY+(buttonHeight/2)     , buttonWidth, buttonHeight, "+", 245, 245, 245, 1)
  // -
  o2 = new Operators((buttonWidth/2)*3+buttonWidth*2 + offset, buttonStartY-(buttonHeight/2)     , buttonWidth, buttonHeight, "-", 245, 245, 245, 1)
  // *
  o3 = new Operators((buttonWidth/2)*3+buttonWidth*2 + offset, buttonStartY-((buttonHeight/2)*3) , buttonWidth, buttonHeight, "×", 245, 245, 245, 1)
  
  o4 = new Operators((buttonWidth/2)*3+buttonWidth*2 + offset, buttonStartY-((buttonHeight/2)*5) , buttonWidth, buttonHeight, "÷", 245, 245, 245, 1)

  // clear
  oAC = new Operators((buttonWidth/2)*3+buttonWidth*2 + offset, buttonStartY-((buttonHeight/2)*7) - offsetY , buttonWidth, buttonHeight, "AC", 255, 36, 36, 1)
  // =
  o9 = new Operators((buttonWidth/2)*3+buttonWidth + offset   , buttonStartY+(buttonHeight/2)     , buttonWidth, buttonHeight, "=", 0, 80, 210, 1)


  menu = new StateMenu(25, 10, 50 ,20 ,255 ,255 ,255)
}

function draw() 
{
  background(102, 110, 119);

  state = menu.Menu(mouseClick);
  
  if(state == 1) //vis lommeregner
  {
    mainCalc();
  }
  


  console.log("state:", state);

  mouseClick = false;
}

function mousePressed()
{
  mouseClick = true;
}

function mousePos()
{
  console.log("mouse pos: " + mouseX +  "\t" + mouseY);
}