import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
});

const character = mongoose.model('Character', characterSchema);

export default character;
