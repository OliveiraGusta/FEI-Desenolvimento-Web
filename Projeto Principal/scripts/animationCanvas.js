let canvas = document.getElementById('animationCanvas');
let ctx = canvas.getContext('2d');

let quadradoInicial = {
    x: 0,
    y: 0,
    size: 50,

};

function desenharQuadradoNaTela() {
    ctx.beginPath()
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(quadradoInicial.x, quadradoInicial.y, quadradoInicial.size, quadradoInicial.size);
    ctx.fillStyle = 'yellow';
}

function moverQuadradoComMouse(event) {
    let rect = canvas.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;

    quadradoInicial.x = mouseX - quadradoInicial.size / 2;
    quadradoInicial.y = mouseY - quadradoInicial.size / 2;

    if (quadradoInicial.x < 0)
    quadradoInicial.x = 0;

    if (quadradoInicial.x > canvas.width - quadradoInicial.size)
    quadradoInicial.x = canvas.width - quadradoInicial.size;

    if (quadradoInicial.y < 0)
    quadradoInicial.y = 0;

    if (quadradoInicial.y > canvas.height - quadradoInicial.size)
    quadradoInicial.y = canvas.height - quadradoInicial.size;

    desenharQuadradoNaTela();
}

canvas.addEventListener('mousemove', moverQuadradoComMouse);

desenharQuadradoNaTela()