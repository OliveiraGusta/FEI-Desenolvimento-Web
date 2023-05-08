

// Variaveis
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var obstacleIMG = new Image();
obstacleIMG.src = "./img/shuriken.png";

var personIMG = new Image();
personIMG.src = "./img/person-1.png";

var timer, person, obstacle
var W = canvas.width, H = canvas.height

//Score

class Score {
    constructor() {
        this.x = 20
        this.y = 170
        this.points = 0
        this.heighestJump = false
    }
    draw() {
        ctx.fillStyle = 'white'
        ctx.font = 'bold 15px Arial'

        ctx.fillText(`Pontuação:  ${parseInt(this.points / 20)
            } `, W / 10, H / 10)
    }
    addScore() {
        this.points++

    }

    update() {
        this.addScore()
        this.draw()
    }
}

//Person
class Person {
    constructor() {
        this.numeroSprite = 0
        this.posInitX = 0
        this.Limagem = 0
        this.larguraSprite = 0
        this.numeroSprites = 6

        this.x = 20
        this.y = 170
        this.jumping = false
        this.jumpSpeed = 2
        this.heighestJump = false
    }
    draw() {

        this.larguraSprite = personIMG.width / this.numeroSprites
        this.alturaSprite = personIMG.height
        this.posInitX = this.larguraSprite * this.numeroSprite
        ctx.drawImage(personIMG, this.posInitX, 0, this.larguraSprite, this.alturaSprite, this.x, this.y, this.larguraSprite, this.alturaSprite)
    }
    animation() {
        this.numeroSprite++
        if (this.numeroSprite == 6) {
            this.numeroSprite = 0
        }
        this.posInitX = this.larguraSprite * this.numeroSprite
        ctx.drawImage(personIMG, this.posInitX, 0, this.larguraSprite, this.alturaSprite, this.x, this.y, this.larguraSprite, this.alturaSprite)

    }

    jump() {
        //Jump up
        if (this.jumping && !this.heighestJump && this.y > 60) {
            this.y -= this.jumpSpeed
            personIMG.src = "./img/person-jumping.png";

            requestAnimationFrame(this.jump)
            this.numeroSprites = 4
            this.numeroSprite = 0
            this.posInitX = this.larguraSprite * this.numeroSprite


        }
        // Jump down
        else if (this.y < 170) {
            this.heighestJump = true
            this.y += this.jumpSpeed
            personIMG.src = "./img/person-jumping.png";

            requestAnimationFrame(this.jump)
            this.numeroSprites = 4

            this.numeroSprite = 2
            this.posInitX = this.larguraSprite * this.numeroSprite

            if (this.y < 150) {
                this.numeroSprite = 1
            }
        }
        // End Jump
        else {
            this.numeroSprites = 6
            personIMG.src = "./img/person-1.png";
            this.heighestJump = false
            this.jumping = false
        }
    }
    update() {
        this.animation()
        this.draw()
        this.jump()
    }
}
//Obstacle
class Obstacle {
    constructor() {
        this.x = W
        this.y = 200
        this.speed = 2

       

        this.numeroSprite = 0
        this.posInitX = 0
        this.Limagem = 0
        this.larguraSprite = 0
        this.numeroSprites = 4


    }
    draw() {
        this.larguraSprite = obstacleIMG.width / this.numeroSprites
        this.alturaSprite = obstacleIMG.height
        this.posInitX = this.larguraSprite * this.numeroSprite

        ctx.drawImage(obstacleIMG, this.posInitX, 0, this.larguraSprite, this.alturaSprite, this.x, this.y, this.larguraSprite, this.alturaSprite)
    }
    animation() {

        this.numeroSprite++
        if (this.numeroSprite >= 4) {
            this.numeroSprite = 0
        }
        this.posInitX = this.larguraSprite * this.numeroSprite
        ctx.drawImage(obstacleIMG, this.posInitX, 0, this.larguraSprite, this.alturaSprite, this.x, this.y, this.larguraSprite, this.alturaSprite)

    }

    moveLoop() {
        if (this.x > -50) {
            this.x -= this.speed
            
        }
        else {
            this.x = W
            this.speed = this.speed + 0.3
        }
    }
    update() {
        requestAnimationFrame(this.animation)
        this.animation()
        this.draw()
        this.moveLoop()
    }
}

//Collission 
function collission() {
    if (
        person.x < obstacle.x &&
        person.x + 40 > obstacle.x &&
        person.y + 80 > obstacle.y
    ) {
        restartGame()
    }

}

//Loop 
function loop() {
    ctx.clearRect(0, 0, W, H);

    obstacle.update()
    person.update()
    score.update()
    collission()


}


//Start Game
function startGame() {
    timer = setInterval(loop)
    person = new Person()
    obstacle = new Obstacle()
    score = new Score()


}

//restart Game

function restartGame() {
    clearInterval(timer)
    addEventListener('keydown', startGame, { once: true })

    ctx.fillStyle = 'rgba(44,62,80, 0.7)'
    ctx.fillRect(0, 0, W, H)

    ctx.fillStyle = 'white'
    ctx.textAlign = 'center'
    ctx.font = 'bold 25px Arial'
    ctx.fillText(`GAME OVER! ${parseInt(score.points / 20)
        } PONTOS`, W / 2, H / 2)

    ctx.font = 'bold 18px Arial'
    ctx.fillText('Pressione qualquer botão para reiniciar', W / 2, H / 2 + 30)

}


//Events
document.body.addEventListener('keydown', function (event) {
    const key = event.key;
    switch (key) {
        case "w":
            if (!person.jumping) {
                person.jumping = true
            }
            break;
        case "W":
            if (!person.jumping) {
                person.jumping = true
            }
            break;
        case "ArrowUp":
            if (!person.jumping) {
                person.jumping = true
            }
            break;
        case " ":
            if (!person.jumping) {
                person.jumping = true
            }
            break;
        case "R":
            restartGame()
            break;
        case "r":
            restartGame()
            break;

    }
});

//On load page
startGame();