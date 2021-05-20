const io = require("socket.io-client")
const socket = io.connect('http://localhost:8484');

socket.emit("connection")
socket.emit("userinfo", {"socketId": null, "clientName": "Hamster-90", "cpu": NaN, "ram": NaN, "vga": NaN})

socket.on('shutdown', ()=>{
    console.log("shutdown명령 도착");
})
socket.on('reboot', ()=>{
    console.log("reboot명령받음");
})