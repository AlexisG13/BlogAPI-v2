
import { Request, Response } from 'express';
import { validate } from 'class-validator';
import { PostUpdateBody } from '../classes/postClass';

export async function updatePostValidator(
	req: Request,
	res: Response,
	next: Function
) {
	if (!req.body) {
		res.status(400).end(JSON.stringify({ message: 'Bad request' }));
	}
	const post = new PostUpdateBody(req.body.title, req.body.content);
	const result = await validate(post);
	// AUN FALTA VER QUE ERROR SUCEDIO EN LA VALIDACION!!
	if (result.length > 0) {
		console.log(result);
		res.end('Missing parameters');
	}
	req.body = post;
	next();
}
