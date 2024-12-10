const express = require("express");
const app = express();
const path = require("path");
const dotEnv = require("dotenv");
dotEnv.config();

const PORT = process.env.PORT || 5030;
//socket require and socket boyler pleat
const socketIo = require("socket.io");
const http = require("http"); // require http 
const server = http.createServer(app); // create the server in breket app store
const io = socketIo(server); // socket io in breket server

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// handle the inilacetion socket connectd 
io.on("connection", (socket) => {
    console.log("socket connectd.....!!");
    // send the location backend
    socket.on("Send-location", (data) => {
        io.emit("recive-location", {  // recive the location in backend 
            id : socket.id, ...data // socket id unieq and spred(data) je latitude longitude avelu te
        })
    });

    socket.on("disconnect", () => {
        io.emit("user-disconnected", socket.id)
    });
})

// frontem route views 
app.get('/', (req, res) => {
    res.render('index');
});


server.listen(PORT, (err) => {
    if(!err) { 
        console.log(`server is runinnig on the port http://localhost:${PORT}`);
        
    }
})