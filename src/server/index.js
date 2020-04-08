// Create Server
const app = require('http').createServer();

// Create Socket
const io = module.exports.io = require("socket.io")(app);

const PORT = process.env.PORT || 2708;
const SocketManager = require("./SocketManager")
io.on("connection",SocketManager);

app.listen(PORT,()=> {
	console.log("CONNECT TO PORT" + PORT)
})