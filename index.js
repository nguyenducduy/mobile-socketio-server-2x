const express = require("express");
const socket = require("socket.io");

// App setup
const PORT = 5000;
const app = express();
const server = app.listen(PORT, '0.0.0.0', function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

// Static files
app.use(express.static("public"));

// Socket setup
const io = socket(server);

io.on("connection", function (socket) {
  console.log(socket);
  console.log("Made socket connection");
  let username = `User ${Math.round(Math.random() * 999999)}`;
    socket.emit('name', username);

    socket.on('message', (message) => {
      console.log(message);
        // io.emit('message', {
        //     from: username,
        //     message: message,
        //     time: new Date().toLocaleString()
        // });
    });
});

