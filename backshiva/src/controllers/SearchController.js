const Gamer = require('../models/Gamer');

module.exports = {
  async index(request, response) {
    const { lat, long, category } = request.query;
    
    const gamers = await Gamer.find({
      category,
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [long, lat],
          },
          $maxDistance: 20000,
        },
      },
    });
    
    return response.json({ gamers });
  }
};
  



// const parseStringAsArray = require('../utils/parseStringAsArray');

// module.exports = {
//   async index(request, response) {
//     const { latitude, longitude, techs } = request.query;

//     const techsArray = parseStringAsArray(techs);

//     const devs = await Dev.find({
//       techs: {
//         $in: techsArray,
//       },
//       location: {
//         $near: {
//           $geometry: {
//             type: 'Point',
//             coordinates: [longitude, latitude],
//           },
//           $maxDistance: 10000,
//         },
//       },
//     });

//     return response.json({ devs });
//   }
// }