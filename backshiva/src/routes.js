const { Router } = require('express');

const GamerController = require('./controllers/GamerController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.post('/gamers', GamerController.store);
routes.get('/gamers', GamerController.index);
routes.get('/gamers/:id', GamerController.show);
routes.put('/gamers/:id', GamerController.update);
routes.delete('/gamers/:id', GamerController.destroy);

routes.get('/search', SearchController.index);

module.exports = routes;


 //editando para subir branch dev

// const { Router } = require('express');

// const DevController = require('./controllers/DevController');
// const SearchController = require('./controllers/SearchController');

// const routes = Router();


// routes.get('/devs', DevController.index);
// routes.post('/devs', DevController.store);

// routes.get('/search', SearchController.index);

// module.exports = routes;