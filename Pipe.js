class Pipe {
    static height = 400;
    static width = 200;
    static x = 800;
    static y = 1200;



    Render() {
        ctx.beginPath();
        ctx.rect(Pipe.x, Pipe.y, Pipe.width, Pipe.height);
        ctx.drawImage(PipeSkin, Pipe.x, Pipe.y - Pipe.height, Pipe.width, Pipe.height);
    }
}