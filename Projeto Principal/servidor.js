var http = require('http')
var express = require('express')
var app = express()

app.use(express.static('./public'))
var server = http.createServer(app)

const PORT = 80;

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});