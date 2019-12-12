import mongoose from 'mongoose';

export const commentSchema = new mongoose.Schema({
  content: { type: String, require: true },
  author: { type: String, require: true },
});
