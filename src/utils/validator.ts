import { Request, Response } from 'express';
import { CommentBody, UpdateCommentBody } from '../dto/comment';
import { validate } from 'class-validator';
import { ID, PostUpdateBody, PostBody } from '../dto/post';

export async function validateComment(req: Request, res: Response, next: Function): Promise<void> {
  try {
    const comment = new CommentBody(req);
    const result = await validate(comment);
    if (result.length > 0) {
      console.log(result);
      res.status(400).json(result);
    }
    req.body.comment = comment;
    next();
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
  }
}

export async function validateId(req: Request, res: Response, next: Function): Promise<void> {
  try {
    const id = new ID(req.params.id);
    const result = await validate(id);
    if (result.length > 0) {
      res.status(400).send(result);
    }
    if (!req.body.idArray) {
      req.body.idArray = [];
    }
    req.body.idArray.push(req.params.id);
    next();
  } catch {
    res.status(500).send({ message: 'Internal server error' });
  }
}

export async function updatePostValidator(req: Request, res: Response, next: Function): Promise<void> {
  try {
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
  } catch {
    res.status(500).send({ message: 'Internal server error' });
  }
}

export async function postValidator(req: Request, res: Response, next: Function): Promise<void> {
  try {
    const post = new PostBody(req);
    const result = await validate(post);
    if (result.length > 0) {
      console.log(result);
      res.status(400).json(result);
    }
    req.body = post;
    next();
  } catch {
    res.status(500).send({ message: 'Internal server error' });
  }
}

export async function updateCommentValidator(req: Request, res: Response, next: Function): Promise<void> {
  try {
    const comment = new UpdateCommentBody(req);
    const result = await validate(comment);
    if (result.length > 0) {
      console.log(result);
      res.status(400).json(result);
    }
    req.body.comment = comment;
    next();
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
  }
}
