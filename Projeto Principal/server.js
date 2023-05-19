var http = require('http')
var express = require('express')
var app = express()
var BodyParser = require('body-parser')

var username_db = encodeURIComponent('oliveiragusta_aula');
var password_db = encodeURIComponent('123');

const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://${username_db}:${password_db}@cluster0.ezpcx6t.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri, { useNewUrlParser: true });

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

/*app.post('/cadastra', (req, res) => {
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
   
});*/

app.post("/cadastra", function(req, resp) {
   // salva dados no banco
   client.db("username_db").collection("usuarios").insertOne(
    { db_nome: req.body.name, db_senha: req.body.pass}, function (err) {
    if (err) {
        res.render('respostaCadastro', {nome, true})
    }else {
        res.render('respostaCadastro', {nome, false})
    };
  });
});


app.get('/login', (req, res) => {
    res.redirect('login.html')
})

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