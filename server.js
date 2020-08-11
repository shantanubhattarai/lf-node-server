const http = require('http');
const fileOperations = require('./file');

const server = http.createServer(function(req, res){
  let splitURL = req.url.split('/');
  switch(splitURL[1]){
    case 'write':
      fileOperations.write(splitURL[2], splitURL[3])
      .then(function (data) {
        res.end('success');
      })
      .catch(function(err){
        res.end('error', err);
      });
      break;
    case 'read':
      fileOperations.read(splitURL[2])
      .then(function (data) {
        res.end(data);
      }).catch(function(err){
        res.end('error', err);
      });
      break;
    case 'rename':
      fileOperations.rename(splitURL[2], splitURL[3])
      .then(function (data) {
        res.end('success');
      }).catch(function(err){
        res.end('error', err);
      });
      break;
    case 'deletefile':
      fileOperations.deleteFile(splitURL[2])
      .then(function (data) {
        res.end('success');
      }).catch(function(err){
        res.end('error', err);
      });
      break;
  }
});

server.listen(9090, 'localhost', function(){
  console.log('server running');
})