const socketio = require('socket.io');
const parseStringAsArray = require('./utils/parseStringAsArray');
const calculateDistance = require('./utils/calculateDistance');

let io;
const connections = [];

exports.setupWebsocket = (server) => {
  io = socketio(server);

  io.on('connection', socket => {
    const { lat, long, category } = socket.handshake.query;
    
    console.log (lat);
    console.log (long);
    console.log (socket.handshake.query);

    connections.push({
      id: socket.id,
      category,
      coordinates: {
        lat: Number(lat),
        long: Number(long),
      },
    });
  });
};

exports.findConnections = (coordinates, techs) => {
  return connections.filter(connection => {
    return calculateDistance(coordinates, connection.coordinates) < 10
      && connection.techs.some(item => techs.includes(item)) 
  });
};

exports.sendMessage = (to, message, data) => {
  to.forEach(connection => {
    io.to(connection.id).emit(message, data);
  })
};

// setTimeout(() => {
//   socket.emit('message', 'Hello Omnistack')
// }, 3000);