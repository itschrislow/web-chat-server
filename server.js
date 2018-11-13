let express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('./dist'));
io.on('connect', (socket) => {
    socket.on('chat message', (msg) => {
        if(socket.username) {
            socket.broadcast.emit('chat message', {id: socket.username, message: msg});
        }
    });
    socket.on('set username', (username) => {
        socket.username = username;
        socket.emit('username set', username);
        socket.broadcast.emit('user joined', username);
    });
});
http.listen(3000, () => console.log('Listening on port 3000'));