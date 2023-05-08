

// Variaveis
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//var personIMG = document.getElementById('player')
var personIMG = new Image()
personIMG.src="./img/cores.png";
var obstacleIMG = document.getElementById('obstacle')

var timer, person, obstacle
var W = canvas.width, H = canvas.height

//Score
class Score{
    constructor(){
        this.x = 20
        this.y = 170
        this.heighestJump = false
    }
    draw(){
        ctx.drawImage(personIMG, this.x, this.y, 70, 70)
    }
    
    update(){
        this.draw()
      
    }
}

//Person
class Person{
    constructor(){
        this.x = 20
        this.y = 170
        this.jumping = false
        this.jumpSpeed = 2
        this.heighestJump = false
    }
    draw(){
        ctx.drawImage(personIMG, this.x, this.y, 70, 70)
    }
    jump(){
        //Jump up
        if(this.jumping && !this.heighestJump && this.y > 50){
            this.y -= this.jumpSpeed
        }
        // Jump down
        else if(this.y < 170){
            this.heighestJump = true
            this.y += this.jumpSpeed
        }

        // End Jump
        else{
            this.heighestJump = false
            this.jumping = false
        }

    }
    update(){
        this.draw()
        this.jump()
    }
}
//Obstacle
class Obstacle{
    constructor(){
        this.x = W
        this.y = 200
        this.speed = 2
    }
    draw(){
        ctx.drawImage(obstacleIMG, this.x, this.y, 50,50)
    }
    moveLoop(){
        if(this.x > -50){
            this.x -= this.speed
        }
        else{
            this.x = W
        }

    }
    update(){
        this.draw()
        this.moveLoop ()
    }
}

//Collission 
function collission() {
    if( 
        person.x < obstacle.x &&
        person.x + 40 > obstacle.x &&
        person.y + 80 > obstacle.y 
    ){  
        restartGame()
    }

}

//Loop 
function loop() {
    ctx.clearRect(0, 0, W, H);
    obstacle.update()
    person.update()
    collission()
}


//Start Game
function startGame(){
    timer = setInterval(loop, 1000 / 160)
    person = new Person()
    obstacle = new Obstacle()
    
}

//restart Game

function restartGame(){
    clearInterval(timer)
    addEventListener('keydown', startGame, {once: true})
    
    ctx.fillStyle = 'rgba(44,62,80, 0.7)'
    ctx.fillRect(0,0 ,W,H)

    ctx.fillStyle = '#4cffd7'
    ctx.textAlign = 'center'
    ctx.font = 'bold 30px Poppins'
    ctx.fillText('GAME OVER!', W / 2 , H / 2)

    ctx.font = 'bold 18px Poppins'
    ctx.fillText('Prescione qualquer botão para reinicionar', W / 2 , H / 2 + 30)

}


//Events
addEventListener('keydown', function(){
    if(!person.jumping){
        person.jumping = true
    }
}) 

//On load page
startGame();