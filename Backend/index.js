const express = require('express')
const app = express()
var server = require('http').Server(app);
const PORT = 4005

app.get('/', (req, res) => {
  res.send('hello')
});
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}!`)
});


var io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('newMessage', (data) => {
    io.sockets.emit('newMessage', data)
  })

  socket.on('typing', data => {
    console.log('server received typing : ',data)
    socket.broadcast.emit('typing', data)
  })
});