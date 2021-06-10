import express from "express";

export default function socketServer(mainWindow: any) {
  const app = express();
  app.set("port", 8484);

  let http = require("http").Server(app);
  // set up socket.io and bind it to our
  // http server.
  let io = require("socket.io")(http);

  http.listen(8484, function () {
    console.log("listening on *:8484");
  });
}
