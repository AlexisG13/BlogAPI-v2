import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
	author: String,
  tags: [String],
  comments: [String],
  createdDate : {type:Date,default:Date.now},
  updatedDate : {type:Date,default:Date.now}
});

export interface IUser extends mongoose.Document{
  title: string,
  content: string,
	author: string,
  tags: Array<string>,
  comments: Array<string>,
  createDate : Date,
  updateDate : Date
}

export const Post = mongoose.model<IUser>('Post',postSchema);


