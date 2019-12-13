import mongoose from 'mongoose';
import { commentSchema } from './comment';

const postSchema = new mongoose.Schema({
  title: { type: String, require: true },
  content: { type: String, require: true },
  author: { type: String, require: true },
  tags: [String],
  comments: [commentSchema],
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
});

export const postModel = mongoose.model('Post', postSchema);
