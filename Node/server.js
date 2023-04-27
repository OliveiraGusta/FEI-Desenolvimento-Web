const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

io.on('connection', (socket) => {
  console.log('Um usuário conectou');
  
  socket.on('mensagem', (mensagem) => {
    console.log('Mensagem recebida:', mensagem);
    io.emit('mensagem', mensagem);
  });

  socket.on('disconnect', () => {
    console.log('Um usuário desconectou');
  });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
