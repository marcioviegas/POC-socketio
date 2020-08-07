import express from 'express'
import io from 'socket.io'
import http from 'http'

const SERVER_PORT = process.env.SERVER_PORT || 3000;

var app = express();
var server = http.Server(app);
var ioServer = io(server);

app.use(express.static('public'));

ioServer.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})


server.listen(SERVER_PORT, function(){
    console.log('listening on port 3000');
});