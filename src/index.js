import { Server as WebSocket } from "socket.io";
import { v4 as uuid } from "uuid";
import http from "http";
import app from "./app";

const httpServer = http.createServer(app);
const io = new WebSocket(httpServer);
const notes = [];

io.on("connection", (socket) => {
  socket.on("client:newnote", (data) => {
    const note = { ...data, id: uuid() };
    notes.push(note);
    socket.emit("server:newnote", note);
  });
});

const main = () => {
  httpServer.listen(app.get("port"));
};

main();
