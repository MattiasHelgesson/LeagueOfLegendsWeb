/* const mongoose = require('mongoose')

const championSchema = new mongoose.Schema({
    name: String,
    role: String,
    
  });
  
const Champion = mongoose.model('Champion', championSchema);

module.exports = Champion; */

const mongoose = require('mongoose');

const championSchema = new mongoose.Schema({
    name: String,
    role: String,
    description: String,
    picture: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image',
    },
});

const Champion = mongoose.model('Champion', championSchema);

module.exports = Champion;

