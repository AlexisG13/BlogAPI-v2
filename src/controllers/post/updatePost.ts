import { Request, Response } from 'express';
import { postModel } from '../../database/postModel';

export async function updatePost(req: Request, res: Response) {
	const updatedPost = await postModel.findByIdAndUpdate(req.params.id, {
		title: req.body.title,
		content: req.body.content,
		tags: req.body.tags
	});
	return updatedPost;
}
