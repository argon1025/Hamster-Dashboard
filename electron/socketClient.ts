import { ipcMain } from "electron";

const io = require("socket.io-client");
export default function socketClient(mainWindow: any) {
  let socket = io.connect("http://localhost:8080", {
    reconnectionAttempt: 3,
    // reconnection: false,
    // autoConnect: false,
  });
  socket = socket.connect();
  const room = 'Hamster';
  socket.on("disconnect", (reason) => {
    mainWindow.webContents.send("socketServerOffline")
  });
  socket.on("connect", () => {
    console.log("소켓 서버와 연결 성공");
    // 서버에 클라이언트정보를 요청합니다.
    socket.emit("dashBoard_getClientInfo");
  });
  socket.on("dashBoard_setClientInfo", (clientInfo: object) => {
    mainWindow.webContents.send("isOnline", clientInfo);
    console.log(clientInfo);
  });
  socket.on("dashBoard_clientDisconnect", (clientInfo: string)=>{
    mainWindow.webContents.send("isOffline", clientInfo);
  })
   //전체 유저 이벤트
   ipcMain.on("all-users", (event: any, data: any) => {
    switch (data) {
      case "shutdown":
        socket.emit("shutdown");
        break;
      case "reboot":
        socket.emit("reboot");
        break;
      case "filedown":
        socket.emit("filedown", data.url);
        break;
      case "commnand":
        socket.emit("commnand", data.command);
        break;
      default:
        break;
    }
  });
  // //단일 유저 이벤트
  ipcMain.on("single-user", (event: any, data: any) => {
    console.log(data);
    switch (data.type) {
      case "shutdown":
        socket.emit("shutdown", { socketID: data.socketID });
        break;
      case "reboot":
        socket.emit("reboot", { socketID: data.socketID });
        break;
      case "filedown":
        socket.emit("filedown", { socketID: data.socketID, data: data.url});
        break;
      case "commnand":
        socket.emit("commnand", { socketID: data.socketID, data: data.command});
        break;
      default:
        break;
    }
  });
}
