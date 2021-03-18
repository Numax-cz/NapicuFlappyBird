const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const PlayerSkin = new Image();
const GroundSkin = new Image();
const PipeSkinBottom = new Image();
const PipeSkinTop = new Image();
PlayerSkin.src = 'jonanekxd.webp';
GroundSkin.src = 'Ground.png';
PipeSkinBottom.src = 'PipeBottom.png';
PipeSkinTop.src = "PipeTop.png";

var Hrac = new Player(100, 600);
const Zem = new Ground();


const Trubka = new Pipe(600);
const Trubka2 = new Pipe(1300);
const Trubka3 = new Pipe(1900);





ctx.canvas.height = okno.lp;
ctx.canvas.width = okno.ln;
class Game {
    static Status = null;
    static StatusPoint = null;

    Render() { //TODO - Top fix
        Hrac.Render();
        Trubka.Render();
        Trubka2.Render();

        Zem.Render();


    }
    static Restart() {
        //TODO restart
    }
    static Start() {
        Game.Status = true;
    }
    static Pause() {
        Game.Status = null;
    }


}

const game = new Game();







function Render() {


    game.Render();
    requestAnimationFrame(Render);
}
Render(); //TODO Podmínku (Načtení img)


window.addEventListener("keydown", e => {
    if (e.keyCode == 32) {
        Hrac.Jump();
        Game.Start();
    } else if (e.keyCode == 27) {
        Game.Pause();
    }
});
