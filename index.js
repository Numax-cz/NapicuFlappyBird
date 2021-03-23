const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const PlayerSkin = new Image();
const GroundSkin = new Image();
const PipeSkinBottom = new Image();
const PipeSkinTop = new Image();
const JumpSound = new Audio("./Sounds/Jump.wav");
const GameOverSound = new Audio("./Sounds/GameOver.wav")
PlayerSkin.src = './Img/jonanekxd.webp';
GroundSkin.src = './Img/Ground.webp';
PipeSkinBottom.src = './Img/PipeBottom.webp';
PipeSkinTop.src = "./Img/PipeTop.webp";
var Hrac = new Player(100, 600);
const Zem = new Ground();
const Trubka = new Pipe(600);
const Trubka2 = new Pipe(1300);

ctx.canvas.height = okno.lp;
ctx.canvas.width = okno.ln;
class Game {
    static Status = null;
    static StatusPoint = 0;

    Render() { //TODO - Top fix
        Hrac.Render();
        Trubka.Render();
        Trubka2.Render();
        Zem.Render();
        Game.Score(Game.StatusPoint);
        Trubka.Collision(Hrac);
        Trubka2.Collision(Hrac);
    }
    static Restart() {
        Hrac.x = Hrac.DefaultX;
        Hrac.y = Hrac.DefaultY;
        Hrac.speed = Hrac.DefaultSpeed;
        Trubka.x = Trubka.DefaultX;
        Trubka2.x = Trubka2.DefaultX;
        Pipe.Speed = Pipe.DefaultSpeed;
        Pipe.SpeedPlus = Pipe.DefaultSpeedPlus;
    }
    static Start() {
        Game.Status = true;
    }
    static Pause() {
        Game.Status = null;
    }
    static GameOver() {
        this.Pause();
        this.Restart();
        GameOverSound.volume = 0.5;
        GameOverSound.play();
        Game.StatusPoint = 0;
    }
    static Score(value) {
        ctx.fillStyle = '#FFF'
        ctx.strokeStyle = '#000'
        ctx.lineWidth = 2;
        ctx.font = "85px Teko";
        ctx.fillText(value, (okno.ln / 2) - 25, 70);
        ctx.strokeText(value, (okno.ln / 2) - 25, 70);
    }
    static Debugger(value) {
        ctx.fillStyle = '#FFF'
        ctx.strokeStyle = '#000'
        ctx.lineWidth = 2;
        ctx.font = "45px Teko";
        ctx.fillText("y " + Math.floor(value), 10, 50);
    }
    static JumpSound() {
        JumpSound.volume = 0.5;
        JumpSound.play();
    }
}

const game = new Game();


function Render() {
    game.Render();
    requestAnimationFrame(Render);
}

window.onload = function () {
    if (navigator.userAgent.toLowerCase().match(/mobile/i)) {
        document.getElementById("Mobile").style.display = "table";
        canvas.style.display = "none";
    } else {
        document.getElementById("Loading").style.display = "none";
        Render();

    }
}




window.addEventListener("keydown", e => {
    if (e.keyCode == 32) {
        Hrac.Jump();
        Game.Start();
        Game.JumpSound();
    } else if (e.keyCode == 27) {
        Game.Pause();
    }
});
