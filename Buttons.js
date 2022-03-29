class Buttons
{
    constructor(posX, posY, width, height, input, r, g, b)
    {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.input = input;
        
        this.buttonClicked;
        this.r = r;
        this.g = g;
        this.b = b;

        this.bright = 1;
    }

    

    ButtonDo(mouseClick)
    {
        this.mouseClick = mouseClick;
        rectMode(CENTER);
        textAlign(CENTER);
        fill(this.r * this.bright, this.g * this.bright, this.b * this.bright);
        
        this.roundEdge = this.width/4;
        rect(this.posX, this.posY, this.width, this.height, this.roundEdge);

        //text
        fill(0)
        text(this.input, this.posX, this.posY + 2)

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
                    this.buttonClicked = true;
                    console.log("button pressed" + " " + "\"" + this.input + "\"");
                } 
            }  
        }
        else
        {
            this.buttonClicked = false;
            this.bright = 1;
        }

        if(this.buttonClicked)  //return input (nkap nummer)
        {
            return parseInt(this.input);
        }


    }


}