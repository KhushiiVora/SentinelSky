const express = require("express");
const cors = require("cors");
const http = require("http");
const path = require("path");
const mongoDB = require("./db/mongoose");
mongoDB();
const userRouter = require("./routers/userRouter");
const port = 5000;
const app = express();

const server = http.createServer(app);

app.use(cors());
// app.use(express.static(__dirname + "/public"));
// app.use(express.static(path.join(__dirname, "../../client")));
app.use(express.json());
app.use(userRouter);

server.listen(port, () => {
  console.log(`Server started on port ${port}!!!`);
});
