const socketio = require('socket.io');
const parseStringAsArray = require('./utils/parseStringAsArray');
const calculateDistance = require('./utils/calculateDistance');

let io;
const connections = [];

exports.setupWebsocket = (server) => {
  io = socketio(server);

  io.on('connection', socket => {
    const { latitude, longitude, techs } = socket.handshake.query;
    
    connections.push({
      id: socket.id,
      techs: parseStringAsArray(techs),
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude),
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