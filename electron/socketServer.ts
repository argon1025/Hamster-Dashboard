import * as express from "express";
import { ipcMain } from 'electron';

export default function socketServer(mainWindow: any) {
  const app = express();
  app.set("port", 8484);

  let http = require("http").Server(app);
  // set up socket.io and bind it to our
  // http server.
  let io = require("socket.io")(http);

  // app.get("/", (req: any, res: any) => {
  //     res.status(200).json({ completed: true });
  // });
  //    // whenever a user connects on port 3000 via
  // // a websocket, log that a user has connected
  //let online = {};
  //온라인유저리스트 클라이언트에 던져주기
  function offlineList(socketID: any): void {
    mainWindow.webContents.send('isOffline', socketID);
  }

  io.on("connection", function (socket: any) {
    const sHeaders = socket.conn.remoteAddress.split(":")[3];
    
    console.log('user ' + socket.id + ' connection');
    // 클라이언트에게 유저 정보를 요청한다.
    io.to(socket.id).emit("get_userinfo");

    //유저 아이피
    // socket.on("get_ip", ()=>{
    //   io.to(socket.id).emit("set_ip", address)
    // })
    
    //클라이언트와 서버 데이터 교환
    socket.on("set_userinfo", function (userdata: any) {
      //online[socket.id] = userdata;
      console.log('user ' + socket.id + ' connection');
      console.log(userdata.socketID, sHeaders);
      
      mainWindow.webContents.send('isOnline', { socketID: userdata.socketID, clientIP: sHeaders });
      //offlineList()
    });
    // 클라이언트 종료 이벤트
    socket.on('disconnect', function () {
      console.log('user ' + socket.id + ' disconnected');
      // remove saved socket from users object
      //delete online[socket.id];
      offlineList(socket.id)
    });
    //전체 유저 이벤트
    ipcMain.on('all-users', (event: any, data: any) => {
      switch (data) {
        case 'shutdown':
          io.emit('shutdown')
          break;
        case 'reboot':
          io.emit('reboot')
          break;
        default:
          break;
      }
    })
    //단일 유저 이벤트
    ipcMain.on('single-user', (event: any, data: any) => {
      console.log(data);
      
      switch (data.command) {
        case "shutdown":
          io.to(data.socketID).emit("shutdown")
          break;
        case "reboot":
          io.to(data.socketID).emit("reboot")
          break;
        default:
          break;
      }
    })
  });

  http.listen(8484, function () {
    console.log("listening on *:8484");
  });
}