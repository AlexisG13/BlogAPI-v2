import express from 'express';
import { validate } from 'class-validator';
import {createPost } from '../controllers/createPost';
import { Request, Response } from 'express';
import { Post } from '../classes/postClass';
import { getPosts } from '../controllers/getPosts';

const router = express.Router();

const postValidator = async function(
	req: Request,
	res: Response,
	next: Function
) {
	if (!req.body) {
		res.status(400).end(JSON.stringify({ message: 'Bad request' }));
	}
	const post = new Post(req.body.title, req.body.content);
  const result = await validate(post);
  // AUN FALTA VER QUE ERROR SUCEDIO EN LA VALIDACION!!
  if (result.length > 0) res.end('Missing parameters');
  req.body = post;
	next();
};

router.get('/',getPosts);
router.post('/', postValidator,createPost);
//postRouter.post('/',createPost)
//postRouter.delete('/:id',deletePost)

export const postRouter = router;
