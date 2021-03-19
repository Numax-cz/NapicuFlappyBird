class Pipe {

    constructor(x) {
        this.x = x;
        this.y = Pipe.RandomPipeBottom();
        this.y2 = Pipe.RandomPipeTop();

        this.DefaultX = this.x;
    }


    static height = 800;
    static width = 200;
    static Speed = 10
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
            Pipe.Speed += 0.05
            Game.StatusPoint += 1
        }

    }

    Move() {
        this.x -= Pipe.Speed;
    }
    Collision(Player) {

        if (Player.x > (this.x - Player.width) && Player.x < (this.x + Pipe.width)) {

            if (Player.y < (this.y + Pipe.height) && Player.y > (this.y - Pipe.height)) {

                Hrac.x = this.x - Player.width

            }


        }
    }
    Reset() {
        this.y = Pipe.RandomPipeBottom();
        this.y2 = Pipe.RandomPipeTop();
    }


}