import { model, Schema } from 'mongoose';

const AuthorSchema = new Schema({
  name: String,
  age: Number
});

export default model('Authors', AuthorSchema);
