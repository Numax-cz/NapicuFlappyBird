class Pipe {
    static height = 800;
    static width = 200;
    static x = 800;
    static y = 1600;
    static RandomY = Math.floor(Math.random() * (1300 - 1000) + 1000)
    static RandomOther = Math.floor(Math.random() * (1600 - 1300) + 1300);
    //800 -rn
    //1000 - min
    //1300 - max
    ////////////
    //1500 - rn
    //1300 - min
    //1600 - max

    Render() {
        ctx.beginPath();
        ctx.rect(Pipe.x, Pipe.y, Pipe.width, Pipe.height);
        ctx.drawImage(PipeSkinBottom, Pipe.x, Pipe.y - Pipe.height, Pipe.width, Pipe.height);
        ctx.beginPath();
        ctx.rect(Pipe.x, Pipe.y - Pipe.RandomY, Pipe.width, Pipe.height);
        ctx.drawImage(PipeSkinTop, Pipe.x, (Pipe.y - Pipe.RandomY) - Pipe.height , Pipe.width, Pipe.height);
        
        
        
    }
    

}