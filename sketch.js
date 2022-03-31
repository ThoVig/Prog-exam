// https://stackoverflow.com/questions/54217682/building-a-calculator-using-p5-js
// https://stackoverflow.com/questions/61747298/make-a-calculator-in-p5
// https://stackoverflow.com/questions/61757326/making-a-calculator-function-properly-in-p5-js
var mouseClick = false;

var displayNumArray = [];  //gloab array er nødvendig for at få tal fra flere objecter
var operation;

var displayNum = "";
var wholeNum;

var displayOp = "";
var operatorType = "";
var operatorNumber;


const buttonWidth = 100;
const buttonHeight = 80;
const buttonStartY = 520;

function setup() 
{
  createCanvas(400, 600);

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
  oAC = new Operators
  // =
  o9 = new Operators((buttonWidth/2)*3+buttonWidth    , buttonStartY+(buttonHeight/2)     , buttonWidth, buttonHeight, "=", 255, 255, 255)
}

function draw() 
{
  background(220);
  b0.ButtonDo(mouseClick);
  b1.ButtonDo(mouseClick);
  b2.ButtonDo(mouseClick);
  b3.ButtonDo(mouseClick);
  b4.ButtonDo(mouseClick);
  b5.ButtonDo(mouseClick);
  b6.ButtonDo(mouseClick);
  b7.ButtonDo(mouseClick);
  b8.ButtonDo(mouseClick);
  b9.ButtonDo(mouseClick);
  
  //vi laver et varibale til at display num til bruger
  //Hver gang vi trykker på en knap, så indsætter vi det input i et array
  //vi indsætter nu tallene i variabel med for-loop

  displayNum = ""
  for (let i = 0; i < displayNumArray.length; i++)
  {
    displayNum += displayNumArray[i]; //indsæt ud fra rækkefølge
  }
  wholeNum = parseInt(displayNum); //vi har en seperat variabel som vi kan bruge til udregning (display num er kun til at vise tallet)
  
  if(!isNaN(wholeNum))
  {
    text(displayNum + displayOp, 200, 100); //display tal for bruger

  }

  


  if(!isNaN(operatorNumber))  //kun display tal hvis de ikke er NaN
  {  
    text(operatorNumber,200, 180)

    text(operatorType, 20, 180)
  }


  o1.OperatorDo(mouseClick);
  o2.OperatorDo(mouseClick);
  o3.OperatorDo(mouseClick);
  o4.OperatorDo(mouseClick);

  o9.Equals(mouseClick);

  console.log(operatorType);
  
  console.log("wholeNum", wholeNum);
  console.log(operatorNumber);
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