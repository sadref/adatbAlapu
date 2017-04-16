var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('sendregister', (data) => {
    let username = data.username;
    let email = data.email;
    let password = data.password;
    let passwordagain = data.passwordagain;

    let test = true;

    if (test) {
      socket.emit('loginsuccess', {result: true})
    } else {
      socket.emit('loginfailed', {result: false})
    }
    
  })
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});