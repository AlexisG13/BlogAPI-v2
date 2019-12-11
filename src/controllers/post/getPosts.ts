import { postModel } from '../../database/postModel';
import { Request, Response } from 'express';

export async function getPosts(req: Request, res: Response) {
	const posts = await postModel.find().sort({ createdDate: -1 });
	return posts; 
}
