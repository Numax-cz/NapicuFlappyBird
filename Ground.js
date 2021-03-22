class Ground {
    static height = 250;
    static width = okno.lp;
    static x = 100;
    static y = okno.ln + 100;
    Render() {
        ctx.beginPath();
        ctx.rect(Ground.x, Ground.y, Ground.width, Ground.height);
        ctx.drawImage(GroundSkin, 0, Ground.y - Ground.height, Ground.width, Ground.height);
    }
    
}