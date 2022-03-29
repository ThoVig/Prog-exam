// https://stackoverflow.com/questions/54217682/building-a-calculator-using-p5-js
// https://stackoverflow.com/questions/61747298/make-a-calculator-in-p5
// https://stackoverflow.com/questions/61757326/making-a-calculator-function-properly-in-p5-js
var mouseClick = false;


var displayNumArray = [];  //gloab array er nødvendig for at få tal fra flere objecter
var operation;

var displayNum = "";
var wholeNum;


function setup() 
{
  createCanvas(400, 600);

  b0 = new Buttons(50, 50, 20, 20, "0", 255, 255, 255)
  b1 = new Buttons(80, 50, 20, 20, "1", 255, 255, 255)
  b2 = new Buttons(110, 50, 20, 20, "2", 255, 255, 255)
  b3 = new Buttons(140, 50, 20, 20, "3", 255, 255, 255)
  b4 = new Buttons(170, 50, 20, 20, "4", 255, 255, 255)
  b5 = new Buttons(200, 50, 20, 20, "5", 255, 255, 255)
  b6 = new Buttons(230, 50, 20, 20, "6", 255, 255, 255)
  b7 = new Buttons(260, 50, 20, 20, "7", 255, 255, 255)
  b8 = new Buttons(290, 50, 20, 20, "8", 255, 255, 255)
  b9 = new Buttons(320, 50, 20, 20, "9", 255, 255, 255)

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
  wholeNum = parseInt(displayNum); //vi har en seperat variabel som vi kan bruge til udregning
  text(wholeNum, 200, 400); //display tal for bruger

  console.log(wholeNum);
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