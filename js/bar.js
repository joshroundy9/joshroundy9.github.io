export default class Bar {

    constructor(height,position,gameWidth,gameHeight)
    {
        this.value = height;
        this.width = gameWidth/15;
        

        this.position = {
            x: (gameWidth/15)*position - this.width/2,
            y: gameHeight - this.value
        };
    }
    
    draw(c)
    {
        
        
        c.fillRect(this.position.x,this.position.y,this.width,this.value);
    }
}