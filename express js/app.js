const express = require('express');
const path = require('path');
const app = express();

//setup static middleware
// Middleware comes in the middle of the request and response cycle of the node.js execution. It also provides access to many functions liek request and response objects.

// Response Object is passed as the second paramenter to the requestListener function. The response object represents the writable stream back to the client
// write() sends text or text stream to client
// writeHead() signals that the server should consider that the response is complete.
// getHeader() returns the value of the speicelen header
// setTimeout sets the timeout value of the socket to the specified value in milliseconds.
// statusCode sets the status code that will be sent to the client

// For the writeHead and the status Code methods the following are accepteable:
// 100-199 Information Response
// 200-299 Successful Response
// 300-399 Redirect Message
// 400-499 Client Error
// 500-599 Server Error

// Request Object is made by a client to a named host which is located on the server. The aim of the request is to access resources on ther server. A proper HTTP request contains the following:
//  A request line
// A series of HTTP header(s)
// A message body if needed

// Rquest Line has 3 main aspects that
// A method like GET, UPDATE, DELETE, etc tells the servefr what it should do with the resources
// The path component identifies the resource on the server
// The HTTP Version Number shows what specification to which the client has tried to make the message comply.

// HTTP Headers:
// HTTP headers are written on a message to provide the recipient with information about the request, the sender and the way in which the send wants to communicate with the server/recipient
// Ex.{'Content-Type': 'text/html'}
// -host, user-agent, ... etc
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  console.log(req.url);
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('*', (req, res) => {
  res.status(404).send('404 not found');
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
