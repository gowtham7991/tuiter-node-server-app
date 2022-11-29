import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  title : String,
  likes: Number,
  liked: Boolean,
  dislikes : Number,
  topic : String,
  userName : String,
  handle : String,
  time : String,
  replies : Number,
  retuits : Number,
  image : String
}, {collection: 'tuits'});
export default schema;

