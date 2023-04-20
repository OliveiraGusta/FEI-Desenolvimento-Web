
 
let numero_gerado = Math.floor(Math.random()*51);
  console.log(numero_gerado);

function gerarNovoNumero(){
    numero_gerado = Math.floor(Math.random()*51);
    console.log(numero_gerado +", Gerado Pelo Botão");
    document.getElementById("maiorNumero").innerHTML = "";
    document.getElementById("menorNumero").innerHTML = "";
    document.getElementById("estadoNumero").style.setProperty("background-color", "aquamarine");
    document.getElementById("estadoNumero").innerHTML = "Você ainda não digitou nenhum numero";

}

function numeroSecreto(){

    let numChute = parseInt(document.getElementById("input-numero-chute").value);
    
    
    if(numero_gerado != numChute){
        if(numero_gerado < numChute){ 
        let numChuteAdd = "";
        numChuteAdd = numChuteAdd + numChute + ", ";
        document.getElementById("maiorNumero").innerHTML += numChuteAdd;
            
        }else{
            if(numero_gerado < numChute){ 
                let numChuteMaior = "";
                numChuteMaior = numChuteMaior + numChute + ", ";
                document.getElementById("maiorNumero").innerHTML += numChuteMaior;
                    
            }
            else{
            let numChuteMenor = "";
            numChuteMenor = numChuteMenor + numChute + ", ";
            document.getElementById("menorNumero").innerHTML += numChuteMenor;
                
        }
        }
        document.getElementById("estadoNumero").style.setProperty("background-color", "red");
       document.getElementById("estadoNumero").innerHTML = "Você errou o numero  Tente novamente";
    }else{
        document.getElementById("estadoNumero").style.setProperty("background-color", "green");
        document.getElementById("estadoNumero").innerHTML = "Você adivinhou o numero";
    }
    
}
