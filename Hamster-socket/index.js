"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
function socketServer(mainWindow) {
    const app = express_1.default();
    app.set("port", 8484);
    let http = require("http").Server(app);
    // set up socket.io and bind it to our
    // http server.
    let io = require("socket.io")(http);
    http.listen(8484, function () {
        console.log("listening on *:8484");
    });
}
exports.default = socketServer;
