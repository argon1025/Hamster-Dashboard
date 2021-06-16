import { ipcMain } from "electron";

const io = require("socket.io-client");
export default function socketClient(mainWindow: any) {
  let socket = io.connect(
    "http://localhost:8828", //ec2-3-34-49-175.ap-northeast-2.compute.amazonaws.com
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
  // //단일 유저 이벤트
  ipcMain.on("single-user", (event: any, data: any) => {
    console.log("single-users");
    const DashBoardID = socket.id;
    // 클라이언트 -> 소켓
    // param:
    // DashBoardID
    // data = { commnadtype, clientsocketID, url?, command? }
    socket.emit("single-users", DashBoardID, data);
  });
  //전체 유저 이벤트
  ipcMain.on("all-users", (event: any, data: any) => {
    console.log("all-users");
    const DashBoardID = socket.id;
    // 클라이언트 -> 소켓
    // param:
    // data = { commnadtype, clientsocketID, url?, command? }
    socket.emit("all-users", DashBoardID, data);
  });
  // logEvent
  socket.on("dashboard_logEvent", function (clientIP, socketID, result) {
    console.log("dashboard_logEvent", clientIP, socketID, result);

    mainWindow.webContents.send("logEvent", {
      socketID: socketID,
      clientIP: clientIP,
      log: result,
    });
  });
}
