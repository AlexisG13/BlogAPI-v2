import { Request, Response } from 'express';
import { postModel } from '../../database/postModel';
export async function createPost(req: Request, res: Response) {
	const post = new postModel({
		title: req.body.title,
		content: req.body.content,
		author: req.body.author
	});
	const newPost = await post.save();
	return newPost;
}
