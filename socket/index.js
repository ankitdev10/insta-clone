const { Server } = require("socket.io");

const io = new Server({
  cors: "http://localhost:3000",
});

io.on("connection", (socket) => {
  console.log("Connected hehe");

  socket.on("sendMessage", (data) => {
    console.log(data);
  });
});

io.listen(5000);
