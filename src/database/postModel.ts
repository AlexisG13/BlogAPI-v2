import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
	title: String,
	content: String,
	// author: String,
	// tags: [String],
	// comments: [String],
	// createdDate: { type: Date, default: Date.now },
	// updatedDate: { type: Date, default: Date.now }
});	

export const postModel = mongoose.model('Post', postSchema);
