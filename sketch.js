var mouseClick = false;

var numbers = [];






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
  numbers[0] = b0.ButtonDo(mouseClick)
  numbers[1] = b1.ButtonDo(mouseClick)
  numbers[2] = b2.ButtonDo(mouseClick)
  numbers[3] = b3.ButtonDo(mouseClick)
  numbers[4] = b4.ButtonDo(mouseClick)
  numbers[5] = b5.ButtonDo(mouseClick)
  numbers[6] = b6.ButtonDo(mouseClick)
  numbers[7] = b7.ButtonDo(mouseClick)
  numbers[8] = b8.ButtonDo(mouseClick)
  numbers[9] = b9.ButtonDo(mouseClick)

  console.log(numbers)
  
  
  
  
  mouseClick = false
}


function mousePressed()
{
  console.log("click");
  mouseClick = true;
}


function mousePos()
{
  console.log("mouse pos: " + mouseX +  "\t" + mouseY);
}