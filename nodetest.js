const http = require('http');

//加载文件模块
const fs = require("fs");


const hostname = '127.0.0.1';
//端口
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  fs.readFile('./index.html', (err, data) => {
    if (err) throw err;
    console.log(data.toString);
    res.end(data);
  });
 
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
