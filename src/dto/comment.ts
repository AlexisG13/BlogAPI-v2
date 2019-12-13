import { IsDefined } from 'class-validator';
import { Request } from 'express';

export class CommentBody {
  @IsDefined()
  content: string;
  @IsDefined()
  author: string;
  constructor(req: Request) {
    this.content = req.body.content;
    this.author = req.body.author;
  }
}

export class UpdateCommentBody {
  @IsDefined()
  content: string;
  constructor(req: Request) {
    this.content = req.body.content;
  }
}
