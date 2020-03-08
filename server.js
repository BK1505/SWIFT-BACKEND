const http = require("http");
const app = require("./app");
const serever = http.createServer(app);

serever.listen(3000, "127.0.0.1");
console.log("Server Connected");
