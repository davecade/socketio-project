const express = require("express");
const app = express();
const http = require("http");

const expressServer = http.createServer(app);

const { Server } = require("socket.io");

const io = new Server(expressServer);

let buyNsp = io.of("/buy");
buyNsp.on("connection", (socket) => {
    buyNsp.emit("MyEvent", "Hello buy namespace");
});

let sellNsp = io.of("/sell");
sellNsp.on("connection", (socket) => {
    sellNsp.emit("MyEvent", "Hello sell namespace");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

expressServer.listen(3000, function () {
    console.log("Server running on port: 3000");
});
