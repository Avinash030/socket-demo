const express = require("express");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

var y = 0
// setInterval(()=>{
//     y++
//     },2000) 
io.on('connection',  socket => {
	console.log("Client Successfully Connected");
	// setInterval(()=>{
	// 	io.emit('chat',y++);
	// },2000)
	socket.on('chat', function(data){
       console.log( data);
    })
})

server.listen(5000, () => {
	console.log("Backend Server is running on http://localhost:5000");
})