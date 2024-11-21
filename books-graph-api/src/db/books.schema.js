import { model, Schema } from 'mongoose';

const BookSchema = new Schema({
  name: String,
  pages: Number,
  authorID: String
});

export default model('Books', BookSchema);
