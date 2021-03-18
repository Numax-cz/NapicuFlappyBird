class Pipe {

    constructor(x) {
        this.x = x;
        this.y = Pipe.RandomPipeBottom();
        this.y2 = Pipe.RandomPipeTop();
    }


    static height = 800;
    static width = 200;
    //static x = 600;

    //800 -rn
    //1000 - min
    //1300 - max
    ////////////
    //1500 - rn
    //1300 - min
    //1600 - max
    static RandomPipeBottom() {
        return Math.floor(Math.random() * (1600 - 1300) + 1300);
    }
    static RandomPipeTop() {
        return Math.floor(Math.random() * (1300 - 1000) + 1000);
    }
    Render() {

        ctx.beginPath();
        ctx.rect(this.x, this.y, Pipe.width, Pipe.height);
        ctx.drawImage(PipeSkinBottom, this.x, this.y - Pipe.height, Pipe.width, Pipe.height);
        ctx.beginPath();
        ctx.rect(this.x, this.y - Pipe.RandomPipeTop(), Pipe.width, Pipe.height);
        ctx.drawImage(PipeSkinTop, this.x, (this.y - this.y2) - Pipe.height, Pipe.width, Pipe.height);


        if (Game.Status == true) {
            this.Move();
        }
        
        if ((this.x + Pipe.width + 20) < 0) {
            this.x = okno.ln;
            this.Reset();
        }
    }
    Move() {
        this.x -= 10;
        Hrac.x += 0.05
    }
    Reset() {
        this.y = Pipe.RandomPipeBottom();
        this.y2 = Pipe.RandomPipeTop();
    }


}