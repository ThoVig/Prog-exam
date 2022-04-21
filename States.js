function mainCalc() //lommeregner
{
    // baggrund box
    fill(152, 212, 42);
    strokeWeight(12);
    stroke(65);
    rect(200, 120, 347, 150, 20);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
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
    bDot.ButtonDo(mouseClick);

    o1.OperatorDo(mouseClick);
    o2.OperatorDo(mouseClick);
    o3.OperatorDo(mouseClick);
    o4.OperatorDo(mouseClick);
    o9.Equals(mouseClick);
    oAC.ClearKnap(mouseClick);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //vi laver et varibale til at display num til bruger
    //Hver gang vi trykker på en knap, så indsætter vi det input i et array
    //vi indsætter nu tallene i variabel med for-loop

    displayNum = "";
    for (let i = 0; i < displayNumArray.length; i++)
    {
        displayNum += displayNumArray[i]; //indsæt ud fra rækkefølge
    }
    wholeNum = parseFloat(displayNum); //vi har en seperat variabel som vi kan bruge til udregning (display num er kun til at vise tallet)
    
    if(!isNaN(wholeNum)) //display tal for bruger
    {
        if(displayNum.endsWith("."))  //display "." korekt
        {
            text(displayNum, 200, 100);
        }
        else
        {
            text(round(displayNum,6), 200, 100);
        }
    }

    if(!isNaN(operatorNumber))  //kun display tal hvis de ikke er NaN
    {  
        text(round(operatorNumber,6),200, 180)

        text(operatorType, 43, 180)
    }
    
    //resets når der sker fejl
    if((displayNum == "" && isNaN(wholeNum) && isNaN(operatorNumber) && operatorType != "") || (isNaN(displayNum)) && isNaN(wholeNum) && operatorNumber == undefined && operatorType == "")
    {
        displayNumArray = [];
        operatorNumber = undefined;
        operatorType = "";
    }

    // console.log("type", operatorType);
    // console.log("displayNum", displayNum);
    // console.log("wholeNum", wholeNum);
    // console.log("opNum", operatorNumber);

}

class StateMenu
{
    constructor(posX, posY, width, height, r, g, b)
    {

        
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        
        this.resize = 1;
        
        
        this.r = r;
        this.g = g;
        this.b = b;
        
        //lav knapper
        this.buttonCurrency = new StateButtons(this.posX * 5, (this.posY * 5) * 3, this.width * 5, this.height * 5, "Currency", this.r, this.g, this.b)
        this.binaryConverter = new StateButtons(this.posX * 5, (this.posY * 5) * 5, this.width * 5, this.height * 5, "Binary\nConverter", this.r, this.g, this.b)

        this.bright = 1;
        this.state = 1;

        this.press = false;

        this.textSize = 10;
        this.text = "menu"
    }

    Menu(mouseClick)
    {
        this.mouseClick = mouseClick;
        rectMode(CENTER);
        textAlign(CENTER);
            
        this.buttonPress()
        
        if(this.press && this.state != 0)   //ændre state til menu
        {
            this.state = 0;
            this.press = false;
        }
        
        if(this.press && this.state == 0)   //ændre state til lommeregner
        {
            this.state = 1;
            this.press = false;
        }
        
        if(this.state > 0)  //hvis menu knap
        {
            this.textSize = 10;
            this.text = "menu";
            this.resize = 1;
        }
        
        if(this.state == 0) //hvis menu
        {
            background(120,255,255)
            this.textSize = 50;
            this.resize = 5;
            this.text = "Calculator";
            //lav extra knap(per) i menu
            this.button = this.buttonCurrency.ButtonDo(this.mouseClick)
            if(this.button)
            {
                this.state = 2;
            }

            this.button = this.binaryConverter.ButtonDo(this.mouseClick)
            if(this.button)
            {
                this.state = 3;
            }

        }

        fill(this.r * this.bright, this.g * this.bright, this.b * this.bright);
        //lav knap mere moderne med at gøre kanterne mere runde
        this.roundEdge = this.width/4;
        rect(this.posX * this.resize, this.posY * this.resize, this.width * this.resize, this.height * this.resize, this.roundEdge);

        //text
        fill(0)
        textSize(this.textSize);
        text(this.text, this.posX * this.resize, this.posY * this.resize + 2)
        
        return this.state;
    }


    buttonPress()   //funktion til state switch knap
    {
        if(mouseX > this.posX * this.resize - this.width * this.resize/2 && mouseX < this.posX * this.resize + this.width * this.resize/2)
        {
            if( mouseY > this.posY * this.resize - this.height * this.resize/2 && mouseY < this.posY * this.resize + this.height * this.resize/2)
            {
                this.bright = 0.85; //ændre farve når mus er på knap, men ikke trykker
                
                if(this.mouseClick) //tjek hvis den trykker
                {
                    this.press = true;
                } 
            }  
            else
            {
                this.bright = 1;
            }
        }
        else
        {
            this.bright = 1;
        }
    }
}