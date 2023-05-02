var http = require('http')
var express = require('express')
var app = express()
var BodyParser = require('body-parser')


app.use(express.static('./public'))
app.use(BodyParser.urlencoded({extended: false}))
app.use(BodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app)
const PORT = 80;

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});

app.get('/', (req, res) => {
    res.redirect('project.html')
})


var usuarios = []

app.get('/cadastra', (req, res) => {
    res.redirect('cadastro.html')
})

app.get('/login', (req, res) => {
    res.redirect('login.html')
})



app.post('/cadastra', (req, res) => {
    let nome = req.body.name;
    let senha = req.body.pass;
    let usuarioJaExistente = false;
  
    for (var i = 0; i < usuarios.length; i++) {
        if(usuarios[i].nome == nome ){
            usuarioJaExistente = true;
        }
    }

    if(usuarioJaExistente == false){
        const userLogin = { 'nome' : nome, 'senha' : senha}
        usuarios.push(userLogin)
        console.log('Usuario Cadastrado')
        console.log(usuarios)
        res.render('respostaCadastro', {nome, usuarioJaExistente})
    }else{
        res.render('respostaCadastro', {nome, usuarioJaExistente})
    }
   
});

app.post('/login', (req, res) => {
    let nome = req.body.name;
    let senha = req.body.pass;
    let logado = false;
    
    for (var i = 0; i < usuarios.length; i++) {
        if(usuarios[i].nome == nome && usuarios[i].senha == senha){
            logado = true;
            break;
        }
    } 
   
    if(logado == true){
        res.render('resposta', {nome, logado})
    }else{
        res.render('resposta', {nome, logado})
    }
});