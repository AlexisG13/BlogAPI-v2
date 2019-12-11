import {PostBody } from '../classes/postClass';
import { validate } from 'class-validator';
import { Request, Response } from 'express';

export async function postValidator(
	req: Request,
	res: Response,
	next: Function
) {
	if (!req.body) {
		res.status(400).end(JSON.stringify({ message: 'Bad request' }));
	}
	const post = new PostBody(
		req.body.title,
		req.body.content,
		req.body.author,
		req.body.tags,
		req.body.comments
	);
	const result = await validate(post);
	// AUN FALTA VER QUE ERROR SUCEDIO EN LA VALIDACION!!
	if (result.length > 0) {
		console.log(result);
		res.end('Missing parameters');
	}
	req.body = post;
	next();
};
