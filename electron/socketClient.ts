import { ipcMain } from "electron";

const io = require("socket.io-client");
export default function socketClient(mainWindow: any) {
  let socket = io.connect(
    "http://ec2-3-34-49-175.ap-northeast-2.compute.amazonaws.com:8828",
    {
      reconnectionAttempt: 3,
      // reconnection: false,
      // autoConnect: false,
    }
  );
  socket = socket.connect();
  socket.on("disconnect", () => {
    mainWindow.webContents.send("socketServerOffline");
  });
  socket.on("connect", () => {
    console.log("소켓 서버와 연결 성공");
    // 서버에 클라이언트정보를 요청합니다.
    socket.emit("dashBoard_getClientInfo", socket.id);
  });
  socket.on("dashBoard_newClient", (clientInfo) => {
    console.log("dashBoard_newClient");
    mainWindow.webContents.send("isOnline", clientInfo);
  });
  socket.on("dashBoard_setClientInfo", (clientInfo: object) => {
    mainWindow.webContents.send("isOnline", clientInfo);
    console.log(clientInfo);
  });
  socket.on("dashBoard_clientDisconnect", (socketID: any) => {
    console.log(socketID + "is disconnect");
    mainWindow.webContents.send("isOffline", socketID);
  });
  //전체 유저 이벤트
  ipcMain.on("all-users", (event: any, data: any) => {
    console.log("all-users");
    switch (data) {
      case "shutdown":
        socket.emit("shutdown", socket.id);
        break;
      case "reboot":
        socket.emit("reboot", socket.id);
        break;
      case "filedown":
        socket.emit("filedown", socket.id, data.url);
        break;
      case "commnand":
        socket.emit("commnand", socket.id, data.command);
        break;
      default:
        break;
    }
  });
  // //단일 유저 이벤트
  ipcMain.on("single-user", (event: any, data: any) => {
    console.log("single-users");
    console.log(data);
    switch (data.type) {
      case "shutdown":
        socket.emit("shutdown", socket.id, data.socketID);
        break;
      case "reboot":
        socket.emit("reboot", socket.id, data.socketID);
        break;
      case "filedown":
        socket.emit("filedown", socket.id, data.url, data.socketID);
        break;
      case "commnand":
        socket.emit("commnand", socket.id, data.command, data.socketID);
        break;
      default:
        break;
    }
  });
  // logEvent
  socket.on("dashboard_logEvent", function (clientIP, socketID, result) {
    console.log("dashboard_logEvent", clientIP, socketID, result);

    mainWindow.webContents.send("logEvent", {
      socketID: socketID,
      clientIP: clientIP,
      log: result.result,
    });
  });
}
