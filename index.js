const express = require("express");
const app = express();
const http = require("http");

const expressServer = http.createServer(app);

const { Server } = require("socket.io");

const io = new Server(expressServer);

// first param is event, second is callback
io.on("connection", (socket) => {
    console.log("New user connected");

    setInterval(() => {
        let date = new Date();
        let time = date.getTime();
        socket.emit("MyEvent", time);
    }, 1000);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

expressServer.listen(3000, function () {
    console.log("Server running on port: 3000");
});
