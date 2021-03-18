class Player {
    constructor() {
        this.height = 80
        this.width = 80
        this.x = 100;
        this.y = 600;

        this.speed = 0;
        this.gravity = 0.25;
        this.jump = - 4.325;
    }

    Render() { //TODO - Top fix
        ctx.fillStyle = "#70c5ce" //Barva pozadí
        ctx.fillRect(0, 0, okno.ln, okno.lp);
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.drawImage(PlayerSkin, this.x, this.y - this.height, this.width, this.height)
        this.speed += this.gravity;
        this.y += this.speed;
        if (this.y > Ground.y - 210 - this.height / 2) {
            this.speed = 0;
            this.y = Ground.y + 1 - 210 - this.height / 2;
            Game.Status = 0;
        }
        if (this.y < this.height) {
            this.speed = 0;
            this.y = this.height;
            Game.Status = 0

        }
    }

    Jump() {
        this.speed = this.jump;
    }


}