const axios = require('axios');
const Gamer = require('../models/Gamer');

module.exports = {
  async index(request, response) {
    const gamers = await Gamer.find();

    return response.json(gamers);
  },
   
  async store(request, response) {
    const { name, category, address, logo_url, tel, face, web, cnpj, lat, long } = request.body;
  
    let gamer = await Gamer.findOne({ name, address, cnpj });

    if(!gamer) {

      // const apiResponse = axios.get... connecta com Facebook para pegar a logo_url
  
      const location = {
        type: 'Point',
        coordinates: [long, lat],
      };
  
      gamer = await Gamer.create({
        name,
        category,
        address, 
        logo_url,
        tel, 
        face, 
        web, 
        cnpj,
        location,
      });
    }
    
    else {
      return response.json({error: "user already exists"})
    }

    return response.json(gamer);
  },

  async show(request, response) {
    const gamer = await Gamer.findById(request.params.id);

    return response.json(gamer);
  },

  async update(request, response) {
    const gamer = await Gamer.findByIdAndUpdate(request.params.id, request.body, {new: true});

    return response.json(gamer);
  },

  async destroy(request, response) {
    await Gamer.findByIdAndRemove(request.params.id);

    return response.send();
  }  
};