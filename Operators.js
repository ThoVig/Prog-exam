class Operators extends Buttons
{
    constructor(posX, posY, width, height, input, r, g, b)
    {
        super(posX, posY, width, height, input, r, g, b)
        this.number;
    }

    OperatorDo(mouseClick)
    {
        this.mouseClick = mouseClick;

        rectMode(CENTER);
        textAlign(CENTER);
        fill(this.r * this.bright, this.g * this.bright, this.b * this.bright);
        
        //lav knap mere moderne med at gøre kanterne mere runde
        this.roundEdge = this.width/4;
        rect(this.posX, this.posY, this.width, this.height, this.roundEdge);

        //text
        fill(0)
        text(this.input, this.posX, this.posY + 20)

        //farve button
        this.stroke = 1;
        strokeWeight(this.stroke);
        
        //thek hvis mus er på knap og trykker
        if(mouseX > this.posX - this.width/2 && mouseX < this.posX + this.width/2)
        {
            if( mouseY > this.posY - this.height/2 && mouseY < this.posY + this.height/2)
            {
                this.bright = 0.85; //ændre farve når mus er på knap, men ikke trykker
                
                if(this.mouseClick) //tjek hvis den trykker
                {
                    operatorType = this.input;  //fortæller hvilken operation der skal ske
                    
                    operatorNumber = wholeNum;  //gemmer nummeret
                    
                    displayNumArray.splice(0, displayNumArray.length); //tøm array når der bliver trykket på en operator knap
                } 
            }  
            else
            {
                this.buttonClicked = false;
                this.bright = 1;
            }
        }
        else
        {
            this.buttonClicked = false;
            this.bright = 1;
        }

    }

    Equals(mouseClick)
    {
        this.mouseClick = mouseClick;

        rectMode(CENTER);
        textAlign(CENTER);
        fill(this.r * this.bright, this.g * this.bright, this.b * this.bright);
        
        //lav knap mere moderne med at gøre kanterne mere runde
        this.roundEdge = this.width/4;
        rect(this.posX, this.posY, this.width, this.height, this.roundEdge);

        //text
        fill(0)
        text(this.input, this.posX, this.posY + 20)

        //farve button
        this.stroke = 1;
        strokeWeight(this.stroke);
        
        //thek hvis mus er på knap og trykker
        if(mouseX > this.posX - this.width/2 && mouseX < this.posX + this.width/2)
        {
            if( mouseY > this.posY - this.height/2 && mouseY < this.posY + this.height/2)
            {
                this.bright = 0.85; //ændre farve når mus er på knap, men ikke trykker
                
                if(this.mouseClick) //tjek hvis den trykker
                {
                    //gennemfør operationer
                    if(operatorType == "+")
                    {
                        displayNumArray = [wholeNum + operatorNumber]
                    }

                    if(operatorType == "-")
                    {
                        displayNumArray = [operatorNumber - wholeNum]
                    }

                    if(operatorType == "×")
                    {
                        displayNumArray = [operatorNumber * wholeNum]
                    }

                    if(operatorType == "÷")
                    {
                        displayNumArray = [operatorNumber / wholeNum]
                    }
                    operatorNumber = undefined;
                    operatorType = undefined;
                } 
            }  
            else
            {
                this.buttonClicked = false;
                this.bright = 1;
            }
        }
        else
        {
            this.buttonClicked = false;
            this.bright = 1;
        }

    }

    ClearKnap(mouseClick)
    {
        this.mouseClick = mouseClick;

        rectMode(CENTER);
        textAlign(CENTER);
        fill(this.r * this.bright, this.g * this.bright, this.b * this.bright);
        
        //lav knap mere moderne med at gøre kanterne mere runde
        this.roundEdge = this.width/4;
        rect(this.posX, this.posY, this.width, this.height, this.roundEdge);

        //text
        fill(0)
        text(this.input, this.posX, this.posY + 20)

        //farve button
        this.stroke = 1;
        strokeWeight(this.stroke);
        
        //thek hvis mus er på knap og trykker
        if(mouseX > this.posX - this.width/2 && mouseX < this.posX + this.width/2)
        {
            if( mouseY > this.posY - this.height/2 && mouseY < this.posY + this.height/2)
            {
                this.bright = 0.85; //ændre farve når mus er på knap, men ikke trykker
                
                if(this.mouseClick) //tjek hvis den trykker
                {
                    displayNumArray = [];
                    operatorNumber = undefined;
                    operatorType = undefined;
                } 
            }  
            else
            {
                this.buttonClicked = false;
                this.bright = 1;
            }
        }
        else
        {
            this.buttonClicked = false;
            this.bright = 1;
        }

    }

}