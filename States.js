function mainCalc() //lommeregner
{
    // baggrund box
    fill(152, 212, 42);
    strokeWeight(12);
    stroke(65);
    rect(200, 120, 347, 150, 20);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    oBack.BackSpace(mouseClick);
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
    console.log("displayNum", displayNum);
    console.log("wholeNum", wholeNum);
    console.log("opNum", operatorNumber);

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function ValutaConv()
{
    //https://www.floatrates.com/json-feeds.html
    
    textSize(20)

    /////////////////input/////////////////////////////
    //lav text box som brugeren kan skrive i
    if(flag == true)
    {
        input = createInput();
        input.position(textX_input - 55, textY_input + 10);
        /////////////////Dropdown////////////////////////
        sel = createSelect();
        sel.position(textX_vælg + 75, textY_vælg - 12.5);
        sel.option("vælg");
        sel.option('DKK');
        sel.option('EUR');
        sel.option('USD');
        sel.option("GBP");
        sel.selected("vælg");
        /////////////////knap///////////////////////////
        button = createButton('Bekræft');
        button.position(textX_vælg + 140, textY_input + 10);
        button.mousePressed(mySelectEvent);
    }
    var textX_res = 125;
    var textY_res = 380;
    var rectX = 290;

    var r_rect = 100;
    var g_rect = 180;
    var b_rect = 240;

    fill(r_rect, g_rect, b_rect);
    rect(textX_res + 40, textY_vælg, rectX, 60, 7)

    fill(r_rect * 0.85, g_rect * 0.85, b_rect * 0.85);
    rect(textX_res + 40, textY_input + 10, rectX, 80, 7)

    fill(r_rect * 0.75, g_rect * 0.75, b_rect * 0.75);
    rect(textX_res + 40, textY_res + 25, rectX, 120, 7);
    
    fill(0);
    /////////////////text/////////////////////////////
    //text til input
    text("Indtast antal", textX_input, textY_input - 2.5);
    
    //text til valg
    text("Converter fra", textX_vælg, textY_vælg);
    
   ////////////////////////////////////////////////////

    text("Din valuta i USD:", textX_res, textY_res);
    text("Din valuta i EUR:", textX_res, textY_res + 20);
    text("Din valuta i GBP:", textX_res, textY_res + 40);
    text("Din valuta i DKK:", textX_res, textY_res + 60);
    
    if(isNaN(cur_to_usd) == false)  //kun lav tekst når der er indsat nummer
    {
        text(round(cur_to_usd, 2), textX_res * 2, textY_res);
        text(round(cur_to_eur, 2), textX_res * 2, textY_res + 20);
        text(round(cur_to_gbp, 2), textX_res * 2, textY_res + 40);
        text(round(cur_to_dkk, 2), textX_res * 2, textY_res + 60);
    }



    flag = false;
}

function mySelectEvent() 
{ 
    cur = sel.value();
    print(cur);
  
    if(cur == "DKK")
    {
        //print("danske kroner");
        urlCur = "dkk";
        url = api1 + urlCur + api2;
    }
  
    if(cur == "EUR")
    {
        //print("danske kroner");
        urlCur = "eur";
        url = api1 + urlCur + api2;
    }
  
    if(cur == "USD")
    {
        //print("danske kroner");
        urlCur = "usd";
        url = api1 + urlCur + api2;
    }
  
    if(cur == "GBP")
    {
        //print("danske kroner");
        urlCur = "gbp";
        url = api1 + urlCur + api2;
    }
    
    loadJSON(url, gotData);
}

function gotData(data)
{
    if(cur == "DKK")
    {
        usd = data.usd.inverseRate;
        eur = data.eur.inverseRate;
        gbp = data.gbp.inverseRate;
        dkk = 1;
    }
  
        if(cur == "EUR")
    {
        usd = data.usd.inverseRate;
        dkk = data.dkk.inverseRate;
        gbp = data.gbp.inverseRate;
        eur = 1;
    }
  
        if(cur == "USD")
    {
        dkk = data.dkk.inverseRate;
        eur = data.eur.inverseRate;
        gbp = data.gbp.inverseRate;
        usd = 1;
    }
  
        if(cur == "GBP")
    {
        usd = data.usd.inverseRate;
        eur = data.eur.inverseRate;
        dkk = data.dkk.inverseRate;
        gbp = 1;
    } 
    print(usd);
    print(dkk);
    print(eur);
    print(gbp);
    
    inputTjek();
  
}

function inputTjek()
{
    //lav input til float
    cur2 = float(input.value());
    
    //tjek hvis input er tal eller ej
    isNum = !isNaN(cur2);
    
    if(isNum)
    {
        convert();
    } 
    else if(isNum == false)
    {
        text("please enter a number", 100, 100);
    }
}

function convert()
{
    cur_to_usd = cur2 / usd;
    cur_to_eur = cur2 / eur;
    cur_to_gbp = cur2 / gbp;
    cur_to_dkk = cur2 / dkk;
    
    fill(100, 180, 240);
    rect(100, 200, 200, 100);
    fill(0);
    
    text("Din valuta i USD:", 125, 220);
    text("Din valuta i EUR:", 125, 240);
    text("Din valuta i GBP:", 125, 260);
    text("Din valuta i DKK:", 125, 280);
    
    
    text(round(cur_to_usd, 2), 250, 220);
    text(round(cur_to_eur, 2), 250, 240);
    text(round(cur_to_gbp, 2), 250, 260);
    text(round(cur_to_dkk, 2), 250, 280);

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
        this.buttonCalc = new StateButtons(200, (this.posY * 5) * 3, this.width * 5, this.height * 5, "Calculator", this.r, this.g, this.b)
        this.buttonCurrency = new StateButtons(200, (this.posY * 5) * 5+50, this.width * 5, this.height * 5, "Converter", this.r, this.g, this.b)

        this.bright = 1;
        this.state = 0;

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

        if(this.state > 0)  //hvis menu knap
        {
            this.textSize = 10;
            this.text = "menu";
            this.resize = 1;
        }
        
        if(this.state == 0) //hvis menu
        {
            this.textSize = 50;
            //lav extra knap(per) i menu
            this.button = this.buttonCurrency.ButtonDo(this.mouseClick)
            if(this.button)
            {
                this.state = 2;
            }

            this.button = this.buttonCalc.ButtonDo(this.mouseClick)
            if(this.button)
            {
                this.state = 1;
            }

        }

        if(state != 0)
        {
            fill(this.r * this.bright, this.g * this.bright, this.b * this.bright);
            //lav knap mere moderne med at gøre kanterne mere runde
            this.roundEdge = this.width/4;
            rect(this.posX * this.resize, this.posY * this.resize, this.width * this.resize, this.height * this.resize, this.roundEdge);
    
            //text
            fill(0)
            textSize(this.textSize);
            text(this.text, this.posX * this.resize, this.posY * this.resize + 2)
        }
        
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
                    input.remove();
                    sel.remove();
                    button.remove();
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