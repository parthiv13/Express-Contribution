const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);

console.log('Server listen on port: localhost:' + port);
server.listen(port);
