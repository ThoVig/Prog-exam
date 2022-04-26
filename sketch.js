// https://stackoverflow.com/questions/54217682/building-a-calculator-using-p5-js
// https://stackoverflow.com/questions/61747298/make-a-calculator-in-p5
// https://stackoverflow.com/questions/61757326/making-a-calculator-function-properly-in-p5-js
var mouseClick = false;
var state;

//lomeregner
var displayNumArray = [];  //global array er nødvendig for at få tal fra flere objecter

var displayNum = "";
var wholeNum;

var operatorType = "";
var operatorNumber;
//


//valuta
var usd;
var eur;
var gbp;
var dkk;
var flag = true;

var cur_to_usd;
var cur_to_eur;
var cur_to_gbp;
var cur_to_dkk;

//nuværende valuta
let cur;

//API 
let url;
let api1 = "https://www.floatrates.com/daily/";
let api2 = ".json";

var textY_input = 200; //placering af input
var textX_input = 100;

var textY_vælg = 70; //placering af text box/knap
var textX_vælg = 100;

let sel; //dropdown menu
//



const buttonWidth = 85;
const buttonHeight = 70;
const buttonStartY = 520;
const offset = 27.5;
const offsetY = 20;
const sizeOffset = 15;

const edge = 3;

function setup() 
{
  createCanvas(400, 600);

  bDot = new Buttons((buttonWidth)+(buttonWidth/2) + offset  , buttonStartY+(buttonHeight/2)     , buttonWidth, buttonHeight, ".", 255, 255, 255, edge)
  b0 = new Buttons((buttonWidth/2) + offset                  , buttonStartY+(buttonHeight/2)     , buttonWidth, buttonHeight, "0", 255, 255, 255, edge)
  b1 = new Buttons((buttonWidth/2) + offset                  , buttonStartY-(buttonHeight/2)     , buttonWidth, buttonHeight, "1", 255, 255, 255, edge)
  b2 = new Buttons((buttonWidth) + (buttonWidth/2) + offset  , buttonStartY-(buttonHeight/2)     , buttonWidth, buttonHeight, "2", 255, 255, 255, edge)
  b3 = new Buttons((buttonWidth/2)*3+buttonWidth + offset    , buttonStartY-(buttonHeight/2)     , buttonWidth, buttonHeight, "3", 255, 255, 255, edge)
  b4 = new Buttons((buttonWidth/2) + offset                  , buttonStartY-((buttonHeight/2)*3) , buttonWidth, buttonHeight, "4", 255, 255, 255, edge)
  b5 = new Buttons((buttonWidth) + (buttonWidth/2) + offset  , buttonStartY-((buttonHeight/2)*3) , buttonWidth, buttonHeight, "5", 255, 255, 255, edge)
  b6 = new Buttons((buttonWidth/2)*3+buttonWidth + offset    , buttonStartY-((buttonHeight/2)*3) , buttonWidth, buttonHeight, "6", 255, 255, 255, edge)
  b7 = new Buttons((buttonWidth/2) + offset                  , buttonStartY-((buttonHeight/2)*5) , buttonWidth, buttonHeight, "7", 255, 255, 255, edge)
  b8 = new Buttons((buttonWidth) + (buttonWidth/2) + offset  , buttonStartY-((buttonHeight/2)*5) , buttonWidth, buttonHeight, "8", 255, 255, 255, edge)
  b9 = new Buttons((buttonWidth/2)*3+buttonWidth + offset    , buttonStartY-((buttonHeight/2)*5) , buttonWidth, buttonHeight, "9", 255, 255, 255, edge)

  // +
  o1 = new Operators((buttonWidth/2)*3+buttonWidth*2 + offset, buttonStartY+(buttonHeight/2)     , buttonWidth, buttonHeight, "+", 245, 245, 245, edge)
  // -
  o2 = new Operators((buttonWidth/2)*3+buttonWidth*2 + offset, buttonStartY-(buttonHeight/2)     , buttonWidth, buttonHeight, "-", 245, 245, 245, edge)
  // *
  o3 = new Operators((buttonWidth/2)*3+buttonWidth*2 + offset, buttonStartY-((buttonHeight/2)*3) , buttonWidth, buttonHeight, "×", 245, 245, 245, edge)
  // ÷
  o4 = new Operators((buttonWidth/2)*3+buttonWidth*2 + offset, buttonStartY-((buttonHeight/2)*5) , buttonWidth, buttonHeight, "÷", 245, 245, 245, edge)

  // clear
  oAC = new Operators((buttonWidth/2)*3+buttonWidth + offset , buttonStartY-((buttonHeight/2)*7) - offsetY , buttonWidth - sizeOffset, buttonHeight - sizeOffset, "AC", 255, 36, 36, edge)
  // backspace
  oBack = new Operators((buttonWidth/2)*3+buttonWidth*2 + offset, buttonStartY-((buttonHeight/2)*7) - offsetY , buttonWidth - sizeOffset, buttonHeight - sizeOffset, "⌫", 255, 36, 36, edge)
  // =
  o9 = new Operators((buttonWidth/2)*3+buttonWidth + offset   , buttonStartY+(buttonHeight/2)     , buttonWidth, buttonHeight, "=", 0, 80, 210, edge)

  //valuta input skal defineres som element for at .remove() virker i class StateButtons; ButtonDo og i if(state == 1)
  input = createInput();
  sel = createSelect();
  button = createButton('Bekræft');
  menu = new StateMenu(25, 10, 50 ,20 ,255 ,255 ,255)

}

function draw() 
{
  background(102, 110, 119);

  state = menu.Menu(mouseClick);
  
  if(state == 1) //vis lommeregner
  {
    mainCalc();
    input.remove();
    sel.remove();
    button.remove();
  }

  if(state == 2) //vis valuta omregner
  {
    ValutaConv();
  }
  if(state != 2)
  {
    flag = true;
    input.remove();
    sel.remove();
    button.remove();
  }
  
  state = menu.Menu(mouseClick);

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