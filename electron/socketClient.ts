import { ipcMain } from "electron";

const io = require("socket.io-client");
export default function socketClient(mainWindow: any) {
  let socket = io.connect("http://localhost:8080", {
    reconnectionAttempt: 3,
    // reconnection: false,
    // autoConnect: false,
  });
  socket = socket.connect();

  socket.on("disconnect", (reason) => {
    console.log(reason);
  });
  socket.on("connect", () => {
    console.log("소켓 서버와 연결 성공");
    // 서버에 클라이언트정보를 요청합니다.
    socket.emit("AllReadyGetClientInfo");

    socket.on("SentClientInfo", (clientInfo: object) => {
      console.log(clientInfo);
    });
  });
}
