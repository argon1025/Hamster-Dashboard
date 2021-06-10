import { Server, Socket } from "socket.io";

import App from "./App";

class SocketHandler {
  // 소켓 연결
  constructor(io: Server) {
    io.on("connect", (socket: Socket) => {
      console.log(`Connection ID: ${socket.id}`);
      this.DashBoard(socket);
    });
  }

  /**
   *  대쉬보드는 클라이언트의 정보가 필요합니다.
   * 1. 대쉬보드가 연결되면 클라이언트에게 정보를 요청합니다.
   * 2. 클라이언트가 연결되면 대쉬보드에게 정보를 건내줍니다.
   */
  private DashBoard(socket: Socket) {
    socket.on("AllReadyGetClientInfo", () => {
      this.GetClientInfo(socket);
    });
    //2. 클라이언트가 연결되면 대쉬보드에게 정보를 건내줍니다.
    this.GetClientInfo(socket);
  }
  private GetClientInfo(socket: Socket) {
    socket.on("SetClientInfo", (clientip: any) => {
      socket.emit("SentClientInfo", {
        socketID: socket.id,
        clientIP: clientip,
      });
    });
  }
}
export default new SocketHandler(App.socketioServer);
