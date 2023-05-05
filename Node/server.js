const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = 80;

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.redirect('/teste_chat.html');
});

io.on('connection', (socket) => {

  socket.on('connection', () => {
    console.log('Um usuário conectou, entrou na funcao');
    io.emit('connection', connection);
  });

  socket.on('mensagem', (mensagem) => {
    console.log('Mensagem recebida:', mensagem);
    io.emit('mensagem', mensagem);
  });

  socket.on('disconnect', () => {
    console.log('Um usuário desconectou');
  });

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('nameUser', (nameUser) => {
    console.log('Nome:',nameUser);
    io.emit('nameUser', nameUser);
  });

  socket.on('digitando', (digitando) => {
    io.emit('digitando', digitando);

  });

});


server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
