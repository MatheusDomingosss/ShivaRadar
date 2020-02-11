 import socketio from 'socket.io-client';

 const socket = socketio('http://192.168.0.18:8242', {
   autoConnect: false,
 });

function subscribeToNewDevs(subcribeFunction) {
  socket.on('new-dev', subcribeFunction);
};


function connect(latitude, longitude, category){
  var lat = latitude;
  var long = longitude;

  socket.io.opts.query = {
    lat,
    long,
    category,
  };

  socket.connect();
};

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
};

export {
  connect,
  disconnect,
  subscribeToNewDevs,
};


  socket.on('message', text => {
console.log(text);
})