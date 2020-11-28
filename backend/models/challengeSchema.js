const { model, Schema } = require('mongoose');

const challengeSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  miniDescription: { type: String, required: true },
  category: { type: String, required: true },
  target: { type: Number, required: true },
  collected: { type: Number, required: true },
  participants: { type: Number, required: true },
  days: { type: Number, required: true },
  creator: { type: String, required: true },

});

module.exports = model('challenge', challengeSchema);
