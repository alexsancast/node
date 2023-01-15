const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/about") {
    res.write("Esto es el about");
    return res.end();
  }

  if (req.url === "/") {
    res.write("Bienvenido al servidor");
    return res.end();
  }
  res.write("Hola este es mi primer serv web");
  res.end();
});
server.listen(3001);
