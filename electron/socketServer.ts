import * as express from "express";
import { ipcMain } from 'electron';

export default function socketServer(mainWindow: any){
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
    let online = {};
    //온라인유저리스트 클라이언트에 던져주기
    function onlineList():void {
      const socketIdList = Object.keys(online)
      mainWindow.webContents.send('isonline', socketIdList);
    }

    io.on("connection", function(socket: any) {
      console.log(online);
      
      //클라이언트와 서버 데이터 교환
      socket.on("userinfo", function(userdata: any) {
        online[socket.id] = userdata;
        console.log('user ' + socket.id + ' connection');
        mainWindow.webContents.send('userinfo', userdata);
        onlineList()
      });
      // 클라이언트 종료 이벤트
      socket.on('disconnect', function(){
        console.log('user ' + socket.id + ' disconnected');
        // remove saved socket from users object
        delete online[socket.id];
        onlineList()
      });
      //전체 유저 이벤트
      ipcMain.on('all-users', (event: any, data: any)=>{
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
        //단일 유저 이벤트
        ipcMain.on('single-user', (event: any, data: any)=>{
          switch (data.event) {
            case "shutdown":

              break;

            default:
              break;
          }
        })

      })
    });

    http.listen(8484, function() {
      console.log("listening on *:8484");
    });
    }