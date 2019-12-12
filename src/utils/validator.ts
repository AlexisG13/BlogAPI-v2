import { Request, Response } from 'express';
import { CommentBody } from '../dto/commentClass';
import { validate } from 'class-validator';
import { ID, PostUpdateBody, PostBody } from '../dto/postClass';

export async function validateComment(req: Request, res: Response, next: Function): Promise<void> {
  if (!req.body) {
    res.status(400).end(JSON.stringify({ message: 'Bad request' }));
  }
  const comment = new CommentBody(req);
  try {
    const result = await validate(comment);
    if (result.length > 0) {
      console.log(result);
      res.status(400).json(result);
    }
    req.body.comment = comment;
    next();
  } catch (error) {
    throw error;
  }
}

export async function validateId(req: Request, res: Response, next: Function): Promise<void> {
  const id = new ID(req.params.id);
  try {
    const result = await validate(id);
    if (result.length > 0) {
      res.status(400).send(result);
    }
    req.body.id = req.params.id;
    next();
  } catch {
    res.status(500).send('Internal server error');
  }
}

export async function updatePostValidator(req: Request, res: Response, next: Function): Promise<void> {
  if (!req.body) {
    res.status(400).end(JSON.stringify({ message: 'Bad request' }));
  }
  const post = new PostUpdateBody(req);
  const result = await validate(post);
  if (result.length > 0) {
    res.status(400).send(result);
  }
  req.body = post;
  next();
}

export async function postValidator(req: Request, res: Response, next: Function): Promise<void> {
  if (!req.body) {
    res.status(400).end(JSON.stringify({ message: 'Bad request' }));
  }
  const post = new PostBody(req);
  try {
    const result = await validate(post);
    if (result.length > 0) {
      console.log(result);
      res.status(400).json(result);
    }
    req.body = post;
    next();
  } catch (error) {
    throw error;
  }
}
