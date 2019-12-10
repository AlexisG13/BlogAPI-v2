import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
	author: String,
  tags: [String],
  comments: [String],
  created_at : {type:Date,default:Date.now},
  updated_at : {type:Date,default:Date.now}
});

export const Post = mongoose.model('Post',postSchema);


