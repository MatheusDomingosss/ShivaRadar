const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const GamerSchema = new mongoose.Schema({
  name: String,
  category: String,
  address: String,
  logo_url: String,
  tel: String,
  face: String,
  web: String,
  cnpj: String,
  location: {
    type: PointSchema,
    index: '2dsphere'
  }
});

module.exports = mongoose.model('Gamer', GamerSchema);
