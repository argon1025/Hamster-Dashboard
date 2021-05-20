const io = require("socket.io-client")
const socket = io.connect('http://localhost:8484');

socket.emit("connection", "hi!")

socket.emit("userinfo", {"clientName": "Hamster-89"})
socket.on('shutdown', ()=>{
    console.log("shutdown명령받음");
})
socket.on('reboot', ()=>{
    console.log("reboot명령받음");
})
process.on('SIGINT', () => {
    process.exit(2)
  })
process.on('exit', function(){
    socket.emit("disconnection", "bye!\n bitcoin is good!")
});