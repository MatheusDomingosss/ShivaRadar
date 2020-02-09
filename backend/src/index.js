const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();


mongoose.connect('mongodb+srv://MatheusDomingos:dmg13CHAOS@plataformashiva-eylb1.gcp.mongodb.net/fakedata?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use(express.json());
app.use(routes);

app.listen(8242);


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const http = require('http');

// const routes = require('./routes');
// const { setupWebsocket } = require('./websocket')

// const app = express();
// const server = http.Server(app);

// setupWebsocket(server);

// mongoose.connect('mongodb+srv://MatheusDomingos:dmg13CHAOS@plataformashiva-eylb1.gcp.mongodb.net/test?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
// });

// //cors vai ser utilizado para definir os acessos da api
// app.use(cors());  

// app.use(express.json());
// app.use(routes);

// server.listen(3333);

