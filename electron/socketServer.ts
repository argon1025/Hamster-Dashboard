import * as express from "express";
import * as socketio from "socket.io";
import * as path from "path";


export default (mainWindow: any)=>{
    const app = express();
    app.set("port", 8484);
    
    let http = require("http").Server(app);
    // set up socket.io and bind it to our
    // http server.
    let io = require("socket.io")(http);
    
    app.get("/", (req: any, res: any) => {
        res.status(200).json({ completed: true });
    });
    
    // whenever a user connects on port 3000 via
    // a websocket, log that a user has connected
    io.on("connection", function(socket: any) {
      console.log("a user connected");
      socket.on("message", function(message: any) {
        console.log(message);
      });
    });
    
    const server = http.listen(8484, function() {
      console.log("listening on *:3000");
    });
    }