import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const characterSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const character = mongoose.model('Character', characterSchema);

export default character;
