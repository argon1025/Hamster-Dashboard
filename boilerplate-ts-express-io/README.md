### Boilerplate TS - Express - SocketIO

Boiler plate using new SocketIO 3x version syntax 


Instead of
>import express from "express";
import socketio from "socket.io";
import http from "http";
//
const app = express();
const server = http.createServer(app);
const io = socketio(server);
//
server.listen(3000, () => console.log('Running on 300'))

Socket 3x now uses

>import express from "express"
import { Server } from "socket.io"
import http from "http"  
//
const app = express()
const server = http.createServer(app)
const io = new Server(server)
//
server.listen(3000, () => console.log('Running on 300'))


[Socket issue about it](https://github.com/socketio/socket.io/issues/3676)