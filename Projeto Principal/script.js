

let numero_gerado = Math.floor(Math.random() * 51);
console.log(numero_gerado);

function gerarNovoNumero() {
    numero_gerado = Math.floor(Math.random() * 51);
    console.log(numero_gerado + ", Gerado Pelo Botão");
    document.getElementById("maiorNumero").innerHTML = "";
    document.getElementById("menorNumero").innerHTML = "";
    document.getElementById("estadoNumero").style.setProperty("background-color", "aquamarine");
    document.getElementById("estadoNumero").innerHTML = "Você ainda não digitou nenhum numero";

}

function numeroSecreto() {

    let numChute = parseInt(document.getElementById("input-numero-chute").value);


    if (numero_gerado != numChute) {
        if (numero_gerado < numChute) {
            let numChuteAdd = "";
            numChuteAdd = numChuteAdd + numChute + ", ";
            document.getElementById("maiorNumero").innerHTML += numChuteAdd;

        } else {
            if (numero_gerado < numChute) {
                let numChuteMaior = "";
                numChuteMaior = numChuteMaior + numChute + ", ";
                document.getElementById("maiorNumero").innerHTML += numChuteMaior;

            }
            else {
                let numChuteMenor = "";
                numChuteMenor = numChuteMenor + numChute + ", ";
                document.getElementById("menorNumero").innerHTML += numChuteMenor;

            }
        }
        document.getElementById("estadoNumero").style.setProperty("background-color", "red");
        document.getElementById("estadoNumero").innerHTML = "Você errou o numero  Tente novamente";
    } else {
        document.getElementById("estadoNumero").style.setProperty("background-color", "green");
        document.getElementById("estadoNumero").innerHTML = "Você adivinhou o numero";
    }

}

var canvas = document.getElementById('meuCanvas');
var ctx = canvas.getContext("2d");


//Texto Preto
ctx.beginPath();
ctx.fillStyle = "black";
ctx.font = "20px Arial";
ctx.fillText("Canvas", 120, 60);

//Quadrado Amarelo
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.fillRect(0, 270, 30, 30);

//Quadrado Amarelo
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.fillRect(30, 270, 30, 30);

//Quadrado Amarelo
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.fillRect(0, 240, 30, 30);

//Quadrado preto
ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(270, 270, 30, 30);

//Quadrado preto
ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(270, 240, 30, 30);

//Quadrado preto
ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(240, 270, 30, 30);

//Linha Azul
ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(150, 350);
ctx.strokeStyle = "black";
ctx.stroke();

//Linha Azul
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(150, 150);
ctx.strokeStyle = "blue";
ctx.stroke();

//Quadrado Ciano
ctx.beginPath();
ctx.fillStyle = "cyan";
ctx.fillRect(270, 135, 30, 30);

//Quadrado Ciano
ctx.beginPath();
ctx.fillStyle = "cyan";
ctx.fillRect(0, 120, 30, 60);

//Quadrado vermelho
ctx.beginPath();
ctx.fillStyle = "red";
ctx.fillRect(110, 150, 40, 40);

//Circulo Ciano
ctx.beginPath();
ctx.fillStyle = "cyan";
ctx.arc(150, 120, 15, 0, 2 * Math.PI);
ctx.fill(); 
ctx.stroke()

//Linha Vermelho
ctx.beginPath();
ctx.moveTo(300, 0);
ctx.lineTo(150, 150);
ctx.strokeStyle = "red";
ctx.stroke();

//Linha Verde
ctx.beginPath();
ctx.moveTo(0, 150);
ctx.lineTo(300, 150);
ctx.strokeStyle = "green";
ctx.stroke();

//Quadrado azul  
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 60, 60);

//Quadrado Maior vermelho
ctx.beginPath();
ctx.fillStyle = "red";
ctx.fillRect(240, 0, 60, 60);


//Meia-Lua verde
ctx.beginPath();
ctx.arc(150, 150, 60, Math.PI, 0);
ctx.stroke();

//Meia-Lua verde
ctx.beginPath();
ctx.arc(150, 150, 80, Math.PI, Math.PI* 1.25);
ctx.stroke();


//Meia-Lua verde
ctx.beginPath();
ctx.arc(150, 150, 80, Math.PI * 1.75, 0);
ctx.stroke();


//Meia-Lua verde
ctx.beginPath();
ctx.arc(150, 300, 70, Math.PI, Math.PI * 1.5);
ctx.stroke();


//Meia-Lua verde
ctx.beginPath();
ctx.arc(150, 300, 50, 11, Math.PI * 2);
ctx.stroke();


//Circulo Amarelo
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.arc(80, 220, 15, 0, 2 * Math.PI);
ctx.fill(); // preenche o círculo com a cor amarela
ctx.stroke()

//Circulo Amarelo 
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.arc(220, 220, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

//Circulo Ciano
ctx.beginPath();
ctx.fillStyle = "cyan";
ctx.arc(150, 300, 35, 0, 2 * Math.PI);
ctx.fill(); // preenche o círculo com a cor amarela
ctx.stroke()

