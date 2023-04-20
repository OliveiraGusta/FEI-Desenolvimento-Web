

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




function desenhar_quadrado(x, y, cor){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, 30, 30);
}

function desenhar_linha(x1, y1, x2, y2, cor){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = cor;
    ctx.stroke();
}

function desenhar_arco(x, y ,r, ang1, ang2, cor, preencher){
    ctx.beginPath();
    ctx.fillStyle = cor;
    
    ctx.arc(x, y, r, ang1, ang2);
   if(preencher == true){
        ctx.fill(); 
    }
    ctx.stroke();
}

function escrever(x, y, texto, cor){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.font = "20px Arial";
    ctx.fillText(texto, x, y);
}

function desenharModeloCanvas(){

    escrever(120, 60, "Canvas" , "black");

    desenhar_quadrado(0, 270, "yellow");
    desenhar_quadrado(30, 270, "yellow");
    desenhar_quadrado(0, 240, "yellow");
    
    desenhar_quadrado(270, 270, "black");
    desenhar_quadrado(270, 240, "black");
    desenhar_quadrado(240, 270, "black");
    
    desenhar_linha(150, 150, 150, 350, "black");
    desenhar_linha(0, 0, 150, 150, "blue");
    
    desenhar_quadrado(270, 135, "cyan");
    desenhar_quadrado(0, 120, "cyan");
    desenhar_quadrado(0, 150, "cyan");
    desenhar_quadrado(120, 150, "red");
    
    
    desenhar_arco(150, 120 ,15, 0, 2 * Math.PI, "cyan", true);
    
    desenhar_linha(300, 0, 150, 150, "red");
    desenhar_linha(0, 150, 300, 150, "green");
    
    desenhar_quadrado(0, 0, "blue");
    desenhar_quadrado(30, 30, "blue");
    desenhar_quadrado(0, 30, "blue");
    desenhar_quadrado(30, 0, "blue");
    
    desenhar_quadrado(270, 0, "red");
    desenhar_quadrado(240, 0, "red");
    desenhar_quadrado(240, 30, "red");
    desenhar_quadrado(270, 30, "red");
    
    desenhar_arco(150, 150 ,60, Math.PI, 0, "green", false);
    desenhar_arco(150, 150 ,80, Math.PI, Math.PI* 1.25, "green", false);
    desenhar_arco(150, 150 ,80,Math.PI* 1.75, 0 , "green", false);
    desenhar_arco(150, 300 ,70,Math.PI, Math.PI* 1.5 , "green", false);
    desenhar_arco(150, 300 ,50, 11, Math.PI* 2 , "green", false);
    
    desenhar_arco(80, 220 ,15, 0, 2 * Math.PI, "yellow", true);
    desenhar_arco(220, 220 ,15, 0, 2 * Math.PI, "yellow", true);
    desenhar_arco(150, 300 ,35, 0, 2 * Math.PI, "cyan", true);
}

desenharModeloCanvas();